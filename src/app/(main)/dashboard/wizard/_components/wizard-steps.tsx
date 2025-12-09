"use client";

import * as React from "react";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface Step {
  id: number;
  title: string;
  description: string;
}

interface WizardStepsProps {
  steps: Step[];
  currentStep: number;
}

export function WizardSteps({ steps, currentStep }: WizardStepsProps) {
  return (
    <nav aria-label="Progress">
      <ol className="flex items-center justify-center">
        {steps.map((step, stepIdx) => (
          <li key={step.id} className={cn("relative", stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : "")}>
            {/* Connector line */}
            {stepIdx !== steps.length - 1 && (
              <div
                className={cn(
                  "absolute top-4 left-full -ml-px h-0.5 w-8 sm:w-20",
                  step.id < currentStep ? "bg-primary" : "bg-muted",
                )}
                aria-hidden="true"
              />
            )}

            <div className="group flex flex-col items-center">
              <span className="flex h-9 items-center">
                <span
                  className={cn(
                    "relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors",
                    step.id < currentStep
                      ? "border-primary bg-primary text-primary-foreground"
                      : step.id === currentStep
                        ? "border-primary bg-background text-primary"
                        : "border-muted bg-background text-muted-foreground",
                  )}
                >
                  {step.id < currentStep ? <Check className="h-4 w-4" /> : step.id}
                </span>
              </span>
              <span className="mt-2 text-center">
                <span
                  className={cn(
                    "block text-xs font-medium sm:text-sm",
                    step.id <= currentStep ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {step.title}
                </span>
                <span className="text-muted-foreground hidden text-xs sm:block">{step.description}</span>
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
