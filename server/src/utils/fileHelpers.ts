import fs from 'fs/promises';
import {JsonMap} from "../types";

class FileHelpers {
    private static async readJsonFile(filePath: string): Promise<JsonMap[]> {
        try {
            const data = await fs.readFile(filePath, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            throw new err('Failed to read file: ' + err.message);
        }
    }

    private static async writeJsonFile(filePath: string, data: JsonMap[]): Promise<void> {
        try {
            await fs.writeFile(filePath, JSON.stringify(data, null, 2));
        } catch (err) {
            throw new err('Failed to write file: ' + err.message);
        }
    }

    static async create(filePath: string, item: JsonMap): Promise<void> {
        try {
            const items = await this.readJsonFile(filePath);
            items.push(item);
            await this.writeJsonFile(filePath, items);
        } catch (err) {
            throw new err('err creating item: ' + err.message);
        }
    }

    static async update(filePath: string, newItem: JsonMap): Promise<void> {
        try {
            let items = await this.readJsonFile(filePath);
            const itemIndex = items.findIndex((item: JsonMap) => item.id === newItem.id);
            if (itemIndex === -1) {
                throw new Error('Item not found');
            }
            items[itemIndex] = { ...items[itemIndex], ...newItem };
            await this.writeJsonFile(filePath, items);
        } catch (err) {
            throw new Error('error updating item: ' + err.message);
        }
    }

    static async delete(filePath: string, itemId: string): Promise<void> {
        try {
            let items = await this.readJsonFile(filePath);
            items = items.filter((item: JsonMap) => item.id !== itemId);
            await this.writeJsonFile(filePath, items);
        } catch (err) {
            throw new Error('error deleting item: ' + err.message);
        }
    }
}

export default FileHelpers;
