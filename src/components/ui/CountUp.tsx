"use client";

import { useEffect, useState } from 'react';

interface CountUpProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
}

export const CountUp = ({ 
    end, 
    duration = 2000, 
    prefix = "", 
    suffix = "",
    decimals = 0
}: CountUpProps) => {
    const [count, setCount] = useState(end); // Start with the end value for SSR
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        setCount(0); // On mount, reset to 0 to start animation
        setHasStarted(true);
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function: easeOutQuart
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const nextCount = easeOutQuart * end;
            
            setCount(nextCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, hasStarted]);

    return (
        <span>
            {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.round(count)}{suffix}
        </span>
    );
};
