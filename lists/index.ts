import { AvailabilityStatusProps } from "@/types";

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

export const getAvailabiltyColor = (status: AvailabilityStatusProps): {color: string, text: string} => {
    switch (status) {
        case "LimitedAvailability":
            return {color: 'bg-yellow-600', text: 'Pending'}         
        case "InStock": 
            return {color: 'bg-green-600', text: 'For Sale'}
        default:
            return {color: 'bg-gray-600', text: 'Not available'}
    }
}