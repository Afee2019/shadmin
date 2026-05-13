"use client";

import { useState } from "react";

import { Lightbulb } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export function LightSwitchCard() {
  const [lightsOn, setLightsOn] = useState(false);

  return (
    <Card className={lightsOn ? "bg-amber-500 text-white" : ""}>
      <CardContent className="flex flex-col items-center justify-center py-8">
        <Lightbulb className={`h-12 w-12 ${lightsOn ? "text-white" : "text-muted-foreground"}`} />
        <p className="mt-4 font-medium">灯光</p>
        <Switch className="mt-4" checked={lightsOn} onCheckedChange={setLightsOn} />
      </CardContent>
    </Card>
  );
}
