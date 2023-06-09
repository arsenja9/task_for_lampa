export type Staff = {
    id: number,
    title: string,
    description: string,
    price: number,
    brand: string,
    thumbnail: string,
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface StaffSliceState{
    items: Staff[],
    status: Status,
}

export interface StaffProduct{
    products: Staff[]
}