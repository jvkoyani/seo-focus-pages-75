"use client";

import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Location } from '@/lib/locationData';

interface LocationGridProps {
    locations: Location[];
    serviceSlug?: string;
}

const LocationGrid = ({ locations, serviceSlug }: LocationGridProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {locations.map((location, index) => (
                <motion.div
                    key={location.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                >
                    <Link
                        href={serviceSlug ? `/location/${location.slug}/${serviceSlug}` : `/${location.slug}`}
                        className="group block h-full bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:border-seo-blue/30 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="w-4 h-4 text-seo-blue -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>

                        <div className="flex flex-col h-full">
                            <div className="w-10 h-10 rounded-full bg-seo-blue/5 group-hover:bg-seo-blue/10 flex items-center justify-center mb-3 transition-colors">
                                <MapPin className="w-5 h-5 text-seo-blue" />
                            </div>

                            <h3 className="font-bold text-seo-dark group-hover:text-seo-blue transition-colors mb-1">
                                {location.name}
                            </h3>

                            <p className="text-xs text-slate-500 mt-auto">
                                {location.state}
                            </p>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

export default LocationGrid;
