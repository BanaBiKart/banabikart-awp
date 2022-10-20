// @format

import { AxiosResponse } from "axios";
import { plainToClass } from "class-transformer";
import { HttpBase } from "./http-base.client"
import { Resource } from "../enums";
import { Order } from "../models";

export class OrderClient extends HttpBase {
    constructor(httpClient?: any) {
        super(httpClient);
    }

    async get(orderId?: number): Promise<Order | Order[]> {
        const response: AxiosResponse = await super.fetch(`${Resource.Order}/${orderId}`);
        return plainToClass(Order, response.data);
    }
}