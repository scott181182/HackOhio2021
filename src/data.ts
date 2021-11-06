import { promises as fs } from "fs";
import path from "path";

const dataFile = path.resolve(__dirname, "..", "data", "Prescriber_Data.csv");



export interface PrescriberRecord {
    id: string;
    firstName: string;
    lastName: string;
    state: string;
    product: string;
    nrx: number[];
    trx: number[];
}

function parsePrescriberRecord(fields: string[]): PrescriberRecord {
    if(fields.length !== 17) {
        throw new Error(`Unexpected number of fields in prescriber record: ${fields.length}`);
    }
    return {
        id: fields[0],
        firstName: fields[1],
        lastName: fields[2],
        state: fields[3],
        product: fields[4],
        nrx: fields.slice(5,  11).map((n) => parseInt(n, 10)),
        trx: fields.slice(11, 17).map((n) => parseInt(n, 10))
    }
}

let dataCache: PrescriberRecord[] | null = null;
export async function getData(): Promise<PrescriberRecord[]> {
    if(dataCache === null) {
        const fileData = await fs.readFile(dataFile, "utf8");
        const records = fileData.split(/[\r\n]+/)
            .filter((line) => line)
            .map((line) => line.split(","));
        if(records.length === 0) {
            console.error("Could not read any records from data file.");
            return [];
        }
        records.shift();
        dataCache = records.map(parsePrescriberRecord);
    }
    return dataCache;
}
