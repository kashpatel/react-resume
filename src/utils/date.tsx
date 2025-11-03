export const DateFormatterTypes = {
    Month_Year: 'short',
    Full: 'long'
} as const;

export type DateFormatType = typeof DateFormatterTypes[keyof typeof DateFormatterTypes];

export const DateFormatter = (dt: string, format: DateFormatType = DateFormatterTypes.Month_Year) => {
    const date = new Date(dt);
    if (format === DateFormatterTypes.Full) {
        return date.toLocaleString('en-US', { 
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        });
    }
    // Month Year format (e.g., "Mar 2024")
    return date.toLocaleString('en-US', { 
        year: 'numeric',
        month: 'short'
    });
};
