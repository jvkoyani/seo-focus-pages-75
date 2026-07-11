// Minimal RFC 4180 CSV parser: handles quoted fields, escaped quotes ("") and
// commas/newlines inside quotes. No external dependency needed for our use case.

function parseRows(input: string): string[][] {
    const rows: string[][] = [];
    let row: string[] = [];
    let field = '';
    let inQuotes = false;
    const text = input.replace(/\r\n/g, '\n');

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (inQuotes) {
            if (char === '"') {
                if (text[i + 1] === '"') {
                    field += '"';
                    i++;
                } else {
                    inQuotes = false;
                }
            } else {
                field += char;
            }
            continue;
        }

        if (char === '"') {
            inQuotes = true;
        } else if (char === ',') {
            row.push(field);
            field = '';
        } else if (char === '\n') {
            row.push(field);
            rows.push(row);
            row = [];
            field = '';
        } else {
            field += char;
        }
    }

    if (field.length > 0 || row.length > 0) {
        row.push(field);
        rows.push(row);
    }

    return rows;
}

/** Parses CSV text (with a header row) into an array of column-name -> value records. */
export function parseCsv(input: string): Record<string, string>[] {
    const rows = parseRows(input).filter(r => !(r.length === 1 && r[0].trim() === ''));
    if (rows.length === 0) return [];

    const [header, ...rest] = rows;
    const columns = header.map(h => h.trim());

    return rest.map(r =>
        Object.fromEntries(columns.map((col, i) => [col, (r[i] ?? '').trim()]))
    );
}
