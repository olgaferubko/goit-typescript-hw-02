type SearchData = {
    results: Array<object>;
    total_pages: number;
    [field: string]: unknown;
};

export type Response = Partial<SearchData>;