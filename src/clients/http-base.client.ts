// @format

import { AxiosResponse } from "axios";
import { ClientType } from "../enums/client-type.enum";
import { Domain } from "../enums";

const BANABIKART_API_KEY = process.env["BANABIKART_API_KEY"] || "";

export abstract class HttpBase {
    private _baseConfig = {
        headers: {
            AccessKey: BANABIKART_API_KEY
        },
        baseURL: Domain.API
    };

    constructor(private httpClient: any, private clientType: ClientType = ClientType.CUSTOMER,) {}

    fetch(url: string, config?: object): Promise<AxiosResponse> {
        return this.httpClient.get(url, { ...this._baseConfig, ...config });
    }

}