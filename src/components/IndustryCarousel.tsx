"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from 'lucide-react';
import { IndustryData } from '@/lib/data';
import { getIcon } from '@/lib/icons';

interface IndustryCarouselProps {
    industries: IndustryData[];
    locationSlug: string;
    serviceSlug: string;
}

const IndustryCarousel = ({ industries, locationSlug, serviceSlug }: IndustryCarouselProps) => {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 3000,
                })
            ]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
        >
            <CarouselContent className="-ml-4">
                {industries.map((industry) => (
                    <CarouselItem key={industry.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <a href={`/areas-we-serve/${locationSlug}/${industry.slug.replace('-seo', '')}/${serviceSlug}`} className="group h-full block">
                            <Card className="h-full hover:shadow-2xl transition-all duration-500 border-slate-200 group-hover:border-seo-blue/50 bg-white group-hover:-translate-y-2 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-seo-blue/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <CardContent className="p-8 flex flex-col h-full items-center text-center relative z-10">
                                    <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white group-hover:shadow-lg">
                                        {(() => {
                                            const Icon = getIcon(industry.icon);
                                            return <Icon className="w-10 h-10 text-slate-400 group-hover:text-seo-blue transition-colors duration-300" />;
                                        })()}
                                    </div>
                                    <h3 className="text-xl font-bold text-seo-dark mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-seo-blue group-hover:to-purple-500 transition-all duration-300">
                                        {industry.title}
                                    </h3>
                                    <p className="text-sm text-seo-gray-dark mb-6 line-clamp-3 leading-relaxed">
                                        {industry.description}
                                    </p>
                                    <div className="mt-auto flex items-center text-sm font-bold text-seo-blue opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        View Strategy <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 lg:-left-12 bg-white border-slate-200 hover:bg-seo-blue hover:text-white shadow-md" />
            <CarouselNext className="-right-4 lg:-right-12 bg-white border-slate-200 hover:bg-seo-blue hover:text-white shadow-md" />
        </Carousel>
    );
};

export default IndustryCarousel;
