interface Items {
    [key: string]: any
}
function extractIds(items: Items) : number[] {
    return items.map(item => item.id)
}

function randomizeIds(ids: number[]) : number[] {
    return ids.sort(() => Math.random() - 0.5)
}

function selectFirstId(ids: number[]) : number {
    return ids.shift()
}
function generateRandomId(items: Items): number {
    if (items.length === 0) {
        return 0
    }
    const ids = extractIds(items)
    const randomIds = randomizeIds(ids)
    return selectFirstId(randomIds)
}