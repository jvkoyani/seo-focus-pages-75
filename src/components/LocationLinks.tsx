/**
 * LocationLinks — Server Component
 * 
 * Optimized for SEO/LLMs: renders all matching location links in the HTML.
 * Used for inter-linking between location pages.
 */

import React from 'react';
import { allAustralianCities, Location } from '@/lib/locationData';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LocationLinksProps {
  service: {
    title: string;
    slug: string;
  };
  excludeLocation?: string;
}

const LocationLinks = ({ service, excludeLocation }: LocationLinksProps) => {
  // Filter and group on the server
  let filteredLocations = allAustralianCities;
  if (excludeLocation) {
    filteredLocations = filteredLocations.filter(loc => loc.slug !== excludeLocation);
  }

  const groups: Record<string, Location[]> = {};
  filteredLocations.forEach(loc => {
    if (!groups[loc.state]) {
      groups[loc.state] = [];
    }
    groups[loc.state].push(loc);
  });

  const sortedStates = Object.keys(groups).sort();

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-seo-dark flex items-center gap-2">
          <MapPin className="w-5 h-5 text-seo-blue" />
          Local SEO Services Near You
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Serving businesses across all Australian states and territories.
        </p>
      </div>

      <div className="space-y-8">
        {sortedStates.map((state) => (
          <div key={state}>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-seo-blue/40"></span>
              {state}
            </h4>
            <div className="flex flex-wrap gap-2">
              {groups[state].map((location) => (
                <a
                  key={location.id}
                  href={`/areas-we-serve/${location.slug}/${service.slug}`}
                  className="inline-flex items-center px-3 py-1.5 rounded-md text-sm text-slate-600 bg-slate-50 hover:bg-seo-blue/10 hover:text-seo-blue transition-colors border border-transparent hover:border-seo-blue/20"
                >
                  {location.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationLinks;
