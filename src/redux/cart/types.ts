export type CartItem = {
    id: number,
    title: string,
    description: string,
    price: number,
    brand: string,
    count: number,
    thumbnail: string,
}

export interface CartSliceState {
    totalPrice: number,
    items: CartItem[],
}
