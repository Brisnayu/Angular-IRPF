import { Range } from "../models/range.interface";

export const salaryRange: Range[] = [
    { max: 12499, valor: 0.19 },
    { max: 20199, valor: 0.24 },
    { max: 35199, valor: 0.30 },
    { max: 59999, valor: 0.37 },
    { max: 299999, valor: 0.45 },
    { max: Infinity, valor: 0.47 } 
];