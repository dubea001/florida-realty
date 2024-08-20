export const cities = [
    'Cape Coral',
    'Fort Myers',
    'West Palm Beach',
    'Lake Worth',
    'Lantana',
    'Boynton Beach',
    'Delray Beach',
    'Boca Raton',
    'Pompano Beach',
    'Fort Lauderdale',
    'Naples',
    'Tampa',
    'Saint Petersburg',
];

export const sortOptions = [
    { value: 'RELEVANCE', label: 'Best Match' },
    { value: 'NEWEST', label: 'Newest First' },
    { value: 'PRICE_LOW', label: 'Cheapest First' },
    { value: 'PRICE_HIGH', label: 'Most Expensive First' },
];


export const shuffleArray = <T>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
