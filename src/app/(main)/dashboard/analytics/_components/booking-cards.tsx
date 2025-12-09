"use client";

import Image from "next/image";

import { Edit, MapPin, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const bookings = [
  {
    id: 1,
    title: "舒适五星公寓",
    description: "该公寓靠近海滩，步行2分钟即可到达公交车站，您可以在那里享受城市的主要夜生活。",
    price: "¥899/晚",
    location: "上海，中国",
    image: "/projects/project-01.jpg",
  },
  {
    id: 2,
    title: "现代办公空间",
    description: "该空间靠近地铁站，步行2分钟即可到达公交车站，适合团队协作和创业办公。",
    price: "¥1,119/晚",
    location: "北京，中国",
    image: "/projects/project-02.jpg",
  },
  {
    id: 3,
    title: "古典园林别墅",
    description: "该别墅位于市中心，交通便利，环境优雅，适合度假休闲和商务接待。",
    price: "¥459/晚",
    location: "杭州，中国",
    image: "/projects/project-03.jpg",
  },
];

export function BookingCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {bookings.map((booking) => (
        <Card key={booking.id} className="overflow-hidden">
          <CardHeader className="p-0">
            <div className="relative aspect-video">
              <Image src={booking.image} alt={booking.title} fill className="object-cover" />
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="mb-2 text-lg font-semibold">{booking.title}</h3>
            <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">{booking.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-primary text-lg font-bold">{booking.price}</span>
              <span className="text-muted-foreground flex items-center gap-1 text-sm">
                <MapPin className="h-4 w-4" />
                {booking.location}
              </span>
            </div>
          </CardContent>
          <CardFooter className="border-t p-4">
            <div className="flex w-full justify-end gap-2">
              <Button variant="ghost" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
