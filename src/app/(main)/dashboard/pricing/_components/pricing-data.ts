export const pricingPlans = [
  {
    name: "免费版",
    description: "适合个人用户体验",
    price: "0",
    features: [
      { label: "最多 3 个项目", included: true },
      { label: "基础数据分析", included: true },
      { label: "社区支持", included: true },
      { label: "基础 API 访问", included: true },
      { label: "优先客服支持", included: false },
      { label: "自定义品牌", included: false },
      { label: "高级安全功能", included: false },
      { label: "专属客户经理", included: false },
    ],
    buttonText: "免费开始",
    buttonVariant: "outline" as const,
  },
  {
    name: "专业版",
    description: "适合中小型团队",
    price: "99",
    popular: true,
    features: [
      { label: "无限项目", included: true },
      { label: "高级数据分析", included: true },
      { label: "优先邮件支持", included: true },
      { label: "完整 API 访问", included: true },
      { label: "优先客服支持", included: true },
      { label: "自定义品牌", included: true },
      { label: "高级安全功能", included: false },
      { label: "专属客户经理", included: false },
    ],
    buttonText: "升级到专业版",
    buttonVariant: "default" as const,
  },
  {
    name: "企业版",
    description: "适合大型企业",
    price: "299",
    features: [
      { label: "无限项目", included: true },
      { label: "企业级数据分析", included: true },
      { label: "7x24 技术支持", included: true },
      { label: "完整 API 访问", included: true },
      { label: "优先客服支持", included: true },
      { label: "自定义品牌", included: true },
      { label: "高级安全功能", included: true },
      { label: "专属客户经理", included: true },
    ],
    buttonText: "联系销售",
    buttonVariant: "outline" as const,
  },
];

export const faqItems = [
  {
    question: "可以随时升级或降级套餐吗？",
    answer: "是的，您可以随时升级或降级您的订阅套餐。升级会立即生效，降级将在当前计费周期结束后生效。",
  },
  {
    question: "支持哪些支付方式？",
    answer: "我们支持主流的支付方式，包括信用卡、借记卡、支付宝和微信支付。企业客户还可以选择银行转账。",
  },
  {
    question: "有免费试用期吗？",
    answer: "专业版和企业版都提供 14 天免费试用期。试用期内您可以体验所有功能，无需绑定支付方式。",
  },
  {
    question: "如果不满意可以退款吗？",
    answer: "我们提供 30 天无条件退款保证。如果您对我们的服务不满意，可以在购买后 30 天内申请全额退款。",
  },
];
