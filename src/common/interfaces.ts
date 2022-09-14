import { OrderDirection } from "./constants";

export interface ICommonListQuery {
    page?: number;
    limit?: number;
    orderBy?: string;
    orderDirection?: OrderDirection;
    keyword?: string;
}

export interface IGetListResponse<T> {
    items: T[];
    totalItems: number;
}