"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import Image from "next/image";

const CompanyCarousel = () => {
  return (
    <Carousel plugins={[Autoplay({ delay: 2000 })]}>
      <CarouselContent className=" gap-9 flex items-center">
        {companies.map(({ name, path, id }) => (
          <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
            <Image src={path} alt={name} width={200} height={50} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CompanyCarousel;
