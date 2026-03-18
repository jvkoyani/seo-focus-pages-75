import { useState, useEffect } from 'react';

export function isServer() {
    return typeof window === 'undefined';
}

export function isBrowser() {
    return typeof window !== 'undefined';
}

export function useMounted() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted;
}

export function createStableId(prefix: string, index: number): string {
    return `${prefix}-${index}`;
}
