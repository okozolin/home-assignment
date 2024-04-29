import fs from 'fs/promises';
import {JsonMap} from "../types";

class FileHelpers {
    private static handleError(err: unknown, message: string): never {
        if (err instanceof Error) {
            throw new Error(`${message}: ${err.message}`);
        } else {
            console.error('An unexpected error occurred:', err);
            throw new Error('An unexpected error occurred');
        }
    }
    private static async writeJsonFile(filePath: string, data: JsonMap[]): Promise<void> {
        try {
            await fs.writeFile(filePath, JSON.stringify(data, null, 2));

        } catch (err: unknown) {
            FileHelpers.handleError(err, 'Failed to write file: ');
        }
    }
    static async readJsonFile(filePath: string): Promise<JsonMap[]> {
        try {
            const data = await fs.readFile(filePath, 'utf8');
            return JSON.parse(data);

        } catch (err: unknown) {
            FileHelpers.handleError(err, 'Failed to read file: ');
        }
    }

    static async create(filePath: string, item: JsonMap): Promise<void> {
        try {
            const items = await FileHelpers.readJsonFile(filePath);
            items.push(item);
            await FileHelpers.writeJsonFile(filePath, items);

        } catch (err: unknown) {
            FileHelpers.handleError(err, 'error creating item: ');
        }
    }

    static async update(filePath: string, newItem: JsonMap): Promise<void> {
        try {
            let items = await FileHelpers.readJsonFile(filePath);
            const itemIndex = items.findIndex((item: JsonMap) => item.id === newItem.id);
            if (itemIndex === -1) {
                throw new Error('Item not found');
            }
            items[itemIndex] = { ...items[itemIndex], ...newItem };
            await FileHelpers.writeJsonFile(filePath, items);

        } catch (err: unknown) {
            FileHelpers.handleError(err, 'error updating item: ');
        }
    }

    static async delete(filePath: string, itemId: number): Promise<void> {
        try {
            let items = await FileHelpers.readJsonFile(filePath);
            items = items.filter((item: JsonMap) => item.id !== itemId);
            await FileHelpers.writeJsonFile(filePath, items);

        } catch (err: unknown) {
            FileHelpers.handleError(err, 'error deleting item: ');
        }
    }
}

export default FileHelpers;
