
interface Items {
    [key: string]: any
}
function extractIds(items: Items) : number[] {
    return items.map(item => item.id)
}

function randomizeIds(ids: number[]) : number[] {
    return ids.sort(() => Math.random() - 0.5)
}

export const generateRandomId = (items: Items[]) => {
    let remainingIds = extractIds(items)

    return () => {
        if (!remainingIds.length) {
            remainingIds = extractIds(items)
        }
        const randomIds = randomizeIds(remainingIds)
        return randomIds.shift();
    };
};