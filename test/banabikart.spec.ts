// @format

import "reflect-metadata";
import axios from "axios"
import { BanaBiKart } from "../src/index";
import { Resource } from "../src/enums";

describe("BanaBiKart", () => {
    let classUnderTest: BanaBiKart;

    let validateConfig = expect.objectContaining({
        baseURL: jasmine.any(String),
        headers: jasmine.any(Object)
    });

    beforeEach(() => (classUnderTest = new BanaBiKart(axios)));

    it("should initalize", () => {
        expect(classUnderTest).toBeDefined();
    });

    it("should default to axios as HttpClient", () => {
        const banabikart = new BanaBiKart();
        expect(banabikart["httpClient"]).toEqual(axios);
    });

    it("should use injected HttpClient", () => {
        const someHttpClient = {};
        const banabikart = new BanaBiKart(someHttpClient);
        expect(banabikart["httpClient"]).toEqual(someHttpClient);
    })

    describe("getOrder", () => {
        beforeEach(() => jest.spyOn(axios, "get").mockReturnValueOnce(Promise.resolve({data: {}})));
    
        it("should GET resource with client", (done: any) => {
            classUnderTest.getOrder().then(() => {
                expect(axios.get).toHaveBeenCalledWith(
                    Resource.Order,
                    validateConfig
                );
                done();
            })
        })
    })
});