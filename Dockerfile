# syntax=docker/dockerfile:1.7-labs

# ============================================================
# 多阶段构建：deps → builder → runner
# 基于 Next.js standalone output（next.config.mjs: output: "standalone"）
# 镜像最终 ~150MB，运行时只需 Node + .next/standalone/
# ============================================================

# --- Stage 1: 安装依赖 ---
FROM node:22-alpine AS deps
RUN corepack enable
WORKDIR /app

# pnpm 锁版从 package.json packageManager 字段读取
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile


# --- Stage 2: 构建 ---
FROM node:22-alpine AS builder
RUN corepack enable
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build


# --- Stage 3: 运行时 ---
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# 非 root 用户运行
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 --ingroup nodejs nextjs

# standalone 输出包含 node_modules 子集 + server.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
