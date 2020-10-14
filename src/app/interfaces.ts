export interface Tree {
    levelName: string;
    entries: Entry[]
}

export interface Entry {
    id: number;
    name: string;
    children: Tree[]
}