export function formatCityName(slug: string): string {
    if (!slug) return '';
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

export function injectCity(text: string, citySlug: string, cityName: string): string {
    if (!text) return '';
    return text.replace(/\{\{city\}\}/gi, cityName);
}

export function injectAll(text: string, vars: Record<string, string>): string {
    if (!text) return '';
    
    let result = text;
    for (const [key, value] of Object.entries(vars)) {
        const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'gi');
        result = result.replace(regex, value);
    }
    return result;
}

export function hasRemainingPlaceholders(text: string): boolean {
    if (!text) return false;
    return /\{\{[^}]+\}\}/.test(text);
}

export function deepInjectCity(data: unknown, citySlug: string, cityName: string): unknown {
    if (data === null || data === undefined) return data;
    
    if (typeof data === 'string') {
        return injectCity(data, citySlug, cityName);
    }
    
    if (Array.isArray(data)) {
        return data.map(item => deepInjectCity(item, citySlug, cityName));
    }
    
    if (typeof data === 'object') {
        const result: Record<string, unknown> = {};
        for (const [key, value] of Object.entries(data)) {
            result[key] = deepInjectCity(value, citySlug, cityName);
        }
        return result;
    }
    
    return data;
}
