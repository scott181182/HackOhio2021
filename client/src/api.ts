import axios from "axios";


const ENDPOINTS = {
    DATA: "/api/data"
};

export interface PrescriberRecord {
    id: string;
    firstName: string;
    lastName: string;
    state: string;
    product: string;
    nrx: number[];
    trx: number[];
}

export function fetchData() {
    return axios.get(ENDPOINTS.DATA).then((res) => res.data as PrescriberRecord[]);
}
