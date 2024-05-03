
interface Item {
    [key: string]: any
}
function extractIds(items: Item[]) : number[] {
    return items.map(item => item.id)
}

function randomizeIds(ids: number[]) : number[] {
    return ids.sort(() => Math.random() - 0.5)
}

export const generateRandomId = (items: Item[]) => {
    let remainingIds = extractIds(items)

    return () => {
        if (!remainingIds.length) {
            remainingIds = extractIds(items)
        }
        const randomIds = randomizeIds(remainingIds)
        return randomIds.shift();
    };
};

export function generateRandomColor(): string {
    const colors = ['#FF5733', '#3498DB', '#E74C3C', '#27AE60', '#9B59B6'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

export function generateInitials(name: string): string {
    if (!name) return ""

    const words = name.split(' ');
    if (words.length === 1) {
        // If only one word, use the first letter
        return words[0].charAt(0).toUpperCase();
    } else {
        // Use the first letter of each 2 first words
        words.splice(2)
        return words.map(word => word.charAt(0)).join('').toUpperCase();
    }
}

export function formatDate(date: string): string {
    // Output will be in the format "M/D/YYYY, h:mm:ss A"
    const d = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };

    return new Intl.DateTimeFormat('en-US', options).format(d);
}
