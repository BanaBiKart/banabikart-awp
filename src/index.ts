// @format

import "reflect-metadata";
import { plainToClass } from "class-transformer";
import axios, { AxiosResponse } from "axios"
import { HttpBase, OrderClient } from "./clients"
import { Order } from "./models"
import { Resource } from "./enums"

export class BanaBiKart extends HttpBase {
    private _orderClient: OrderClient;
    public get order(): OrderClient {
        return this._orderClient;
    }

    constructor(httpClient?: any) {
        super(httpClient || axios);
        this._orderClient = new OrderClient(httpClient || axios);
    }

    async getOrder(): Promise<Order> {
        const response: AxiosResponse = await super.fetch(Resource.Order);
        return plainToClass(Order, response.data);
    }
}