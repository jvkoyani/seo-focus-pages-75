"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { allAustralianCities, Location } from '@/lib/locationData';
import { MapPin, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

interface LocationLinksProps {
  service: {
    title: string;
    slug: string;
  };
  excludeLocation?: string;
}

const LocationLinks = ({ service, excludeLocation }: LocationLinksProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter locations based on search and excludeLocation
  const filteredLocations = useMemo(() => {
    let locations = allAustralianCities;

    if (excludeLocation) {
      locations = locations.filter(loc => loc.slug !== excludeLocation);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      locations = locations.filter(loc =>
        loc.name.toLowerCase().includes(query) ||
        loc.state.toLowerCase().includes(query)
      );
    }

    return locations;
  }, [searchQuery, excludeLocation]);

  // Group locations by state
  const locationsByState = useMemo(() => {
    const groups: Record<string, Location[]> = {};
    filteredLocations.forEach(loc => {
      if (!groups[loc.state]) {
        groups[loc.state] = [];
      }
      groups[loc.state].push(loc);
    });
    return groups;
  }, [filteredLocations]);

  const sortedStates = Object.keys(locationsByState).sort();
  const hasResults = filteredLocations.length > 0;

  // If searching, always expand
  const showAll = isExpanded || searchQuery.length > 0;

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-seo-dark flex items-center gap-2">
            <MapPin className="w-5 h-5 text-seo-blue" />
            Local SEO Services Near You
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Serving businesses across all Australian states and territories.
          </p>
        </div>

        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Find your city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-9 text-sm bg-slate-50 border-slate-200 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {hasResults ? (
        <div className={cn(
          "space-y-8 transition-all duration-500 ease-in-out overflow-hidden",
          !showAll && "max-h-[300px] relative"
        )}>
          {sortedStates.map((state) => (
            <div key={state}>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-seo-blue/40"></span>
                {state}
              </h4>
              <div className="flex flex-wrap gap-2">
                {locationsByState[state].map((location) => (
                  <Link
                    key={location.id}
                    href={`/location/${location.slug}/${service.slug}`}
                    className="inline-flex items-center px-3 py-1.5 rounded-md text-sm text-slate-600 bg-slate-50 hover:bg-seo-blue/10 hover:text-seo-blue transition-colors border border-transparent hover:border-seo-blue/20"
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Fade Overlay when collapsed */}
          {!showAll && (
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-4">
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-slate-500 text-sm">No locations found matching "{searchQuery}"</p>
        </div>
      )}

      {/* Expand/Collapse Button */}
      {hasResults && !searchQuery && (
        <div className="mt-6 flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-slate-500 hover:text-seo-blue gap-2"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View All Locations <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default LocationLinks;
