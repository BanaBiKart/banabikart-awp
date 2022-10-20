// @format

export class Order {
    orderId: number = -1;
    productId: number = -1;
    price: number = -1;
    cargoCarrier: number = -1;
    cargoTrack?: string = "";
    updatedAt: string = "";
    createdAt: string = "";
}