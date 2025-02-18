"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { DefaultDemo } from "../text";

const images = Array.from({ length: 7 }).map((_, index) => `./speaker${index + 1}.jpeg`);

function Case() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <DefaultDemo name="Previous Speaker" /> <br /><br />
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex rounded-md aspect-square bg-muted items-center justify-center overflow-hidden">
                    <img src={src} alt={`Speaker ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export { Case };
