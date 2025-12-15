import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { allAustralianCities } from '@/lib/locationData';
import { ArrowRight, MapPin, TrendingUp, Award, Users, Activity, Star, Clock, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LocationLinksProps {
  service: {
    title: string;
    slug: string;
  };
  limit?: number;
  excludeLocation?: string;
}

const LocationLinks = ({ service, limit = 9, excludeLocation }: LocationLinksProps) => {
  // Filter out the excluded location if provided
  const filteredLocations = excludeLocation 
    ? allAustralianCities.filter(loc => loc.slug !== excludeLocation)
    : allAustralianCities;
    
  // Only display the specified number of locations (defaults to 9)
  const displayedLocations = filteredLocations.slice(0, limit);

  // Get a location image, with fallback to placeholder
  const getLocationImage = (location: typeof allAustralianCities[0]) => {
    // If location has an image defined, use it
    if (location.image) {
      return location.image;
    }
    
    // Otherwise generate a placeholder image with the location name
    return `/service-images/${service.slug}.jpg`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayedLocations.map((location, index) => (
        <AnimatedSection
          key={location.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group relative"
          animation="fade-in"
          delay={index * 100}
        >
          {/* Top badge */}
          <div className="absolute top-4 right-4 z-20">
            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full shadow-sm text-seo-blue">
              {getRandomBadge()}
            </span>
          </div>
          
          <div className="relative h-52 overflow-hidden">
            <img 
              src={getLocationImage(location)} 
              alt={location.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <div className="flex items-center mb-2">
                <MapPin className="h-5 w-5 text-white mr-2" />
                <span className="text-white font-medium text-lg">{location.name}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                {service.title} in {location.name}
              </h3>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-4 bg-gradient-to-r from-seo-blue/5 to-seo-blue/0 p-3 rounded-lg border-l-2 border-seo-blue">
              <p className="text-seo-gray-dark">
                Customized {service.title.toLowerCase()} solutions for {location.name} businesses to boost rankings and drive targeted traffic.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-6">
              {getLocationAttributes(index).map((attr, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex flex-col items-center justify-center p-2 rounded-lg group",
                    attr.bgColor,
                    "hover:shadow-md transition-all duration-300 cursor-pointer"
                  )}
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {attr.icon}
                  </div>
                  <span className={cn("text-xs font-medium mt-1 text-center", attr.textColor)}>
                    {attr.label}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between mb-4 border-t border-b border-gray-100 py-2">
              <span className="text-xs text-seo-gray-dark">Success rate</span>
              <div className="flex items-center">
                <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden mr-2">
                  <div 
                    className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                    style={{ width: `${85 + (index * 5) % 15}%` }}
                  ></div>
                </div>
                <span className="text-xs font-medium text-green-600">{85 + (index * 5) % 15}%</span>
              </div>
            </div>
            
            <Link
              to={`/location/${location.slug}/${service.slug}`}
              className="inline-flex items-center justify-center bg-seo-blue text-white px-5 py-3 rounded-md hover:bg-seo-blue-light transition-colors w-full group"
            >
              <span>Explore {location.name} strategies</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

const getRandomBadge = () => {
  const badges = ['Top Performer', 'High ROI', 'Best Results', 'Recommended', 'Fast Growth'];
  return badges[Math.floor(Math.random() * badges.length)];
};

const getLocationAttributes = (index: number) => {
  // Create different attributes based on index to add variety
  const attributes = [
    [
      { icon: <TrendingUp className="h-4 w-4 text-green-600" />, label: "High Growth", bgColor: "bg-green-50", textColor: "text-green-600" },
      { icon: <Users className="h-4 w-4 text-blue-600" />, label: "Large Market", bgColor: "bg-blue-50", textColor: "text-blue-600" },
      { icon: <Award className="h-4 w-4 text-purple-600" />, label: "Top Results", bgColor: "bg-purple-50", textColor: "text-purple-600" }
    ],
    [
      { icon: <Activity className="h-4 w-4 text-red-600" />, label: "Competitive", bgColor: "bg-red-50", textColor: "text-red-600" },
      { icon: <Star className="h-4 w-4 text-amber-600" />, label: "5-Star", bgColor: "bg-amber-50", textColor: "text-amber-600" },
      { icon: <TrendingUp className="h-4 w-4 text-green-600" />, label: "Growing", bgColor: "bg-green-50", textColor: "text-green-600" }
    ],
    [
      { icon: <Clock className="h-4 w-4 text-blue-600" />, label: "Fast Results", bgColor: "bg-blue-50", textColor: "text-blue-600" },
      { icon: <Building className="h-4 w-4 text-slate-600" />, label: "Business Hub", bgColor: "bg-slate-50", textColor: "text-slate-600" },
      { icon: <Activity className="h-4 w-4 text-orange-600" />, label: "Dynamic", bgColor: "bg-orange-50", textColor: "text-orange-600" }
    ]
  ];
  
  return attributes[index % 3];
};

export default LocationLinks;
