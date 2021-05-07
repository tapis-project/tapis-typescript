/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Pgrest API
 * The Tapis Pgrest API provides a RESTful interface to a manged SQL-db-as-a-service.
 *
 * The version of the OpenAPI document: 0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ReqCreateInCollection,
    ReqCreateInCollectionFromJSON,
    ReqCreateInCollectionToJSON,
    RespCreateInCollection,
    RespCreateInCollectionFromJSON,
    RespCreateInCollectionToJSON,
    RespDeleteInCollection,
    RespDeleteInCollectionFromJSON,
    RespDeleteInCollectionToJSON,
    RespGetInCollection,
    RespGetInCollectionFromJSON,
    RespGetInCollectionToJSON,
    RespListInCollection,
    RespListInCollectionFromJSON,
    RespListInCollectionToJSON,
    RespUpdateInCollection,
    RespUpdateInCollectionFromJSON,
    RespUpdateInCollectionToJSON,
    RespUpdateMultipleInCollection,
    RespUpdateMultipleInCollectionFromJSON,
    RespUpdateMultipleInCollectionToJSON,
} from '../models';

export interface CreateInCollectionRequest {
    collection: string;
    reqCreateInCollection: ReqCreateInCollection;
}

export interface DeleteInCollectionRequest {
    collection: string;
    item: string;
}

export interface GetInCollectionRequest {
    collection: string;
    item: string;
}

export interface ListInCollectionRequest {
    collection: string;
}

export interface UpdateInCollectionRequest {
    collection: string;
    item: string;
    body: object;
}

export interface UpdateMultipleInCollectionRequest {
    collection: string;
    requestBody: { [key: string]: object; };
}

/**
 * 
 */
export class DataApi extends runtime.BaseAPI {

    /**
     * Create a new object in the table with root_url {collection}
     */
    async createInCollectionRaw(requestParameters: CreateInCollectionRequest): Promise<runtime.ApiResponse<RespCreateInCollection>> {
        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling createInCollection.');
        }

        if (requestParameters.reqCreateInCollection === null || requestParameters.reqCreateInCollection === undefined) {
            throw new runtime.RequiredError('reqCreateInCollection','Required parameter requestParameters.reqCreateInCollection was null or undefined when calling createInCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/pgrest/data/{collection}`.replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateInCollectionToJSON(requestParameters.reqCreateInCollection),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespCreateInCollectionFromJSON(jsonValue));
    }

    /**
     * Create a new object in the table with root_url {collection}
     */
    async createInCollection(requestParameters: CreateInCollectionRequest): Promise<RespCreateInCollection> {
        const response = await this.createInCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete a specific object with id {item} from the table with root_url {collection}.
     */
    async deleteInCollectionRaw(requestParameters: DeleteInCollectionRequest): Promise<runtime.ApiResponse<RespDeleteInCollection>> {
        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling deleteInCollection.');
        }

        if (requestParameters.item === null || requestParameters.item === undefined) {
            throw new runtime.RequiredError('item','Required parameter requestParameters.item was null or undefined when calling deleteInCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/pgrest/data/{collection}/{item}`.replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))).replace(`{${"item"}}`, encodeURIComponent(String(requestParameters.item))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespDeleteInCollectionFromJSON(jsonValue));
    }

    /**
     * Delete a specific object with id {item} from the table with root_url {collection}.
     */
    async deleteInCollection(requestParameters: DeleteInCollectionRequest): Promise<RespDeleteInCollection> {
        const response = await this.deleteInCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details about the specific object with id {item} on the table with root_url {collection}.
     */
    async getInCollectionRaw(requestParameters: GetInCollectionRequest): Promise<runtime.ApiResponse<RespGetInCollection>> {
        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling getInCollection.');
        }

        if (requestParameters.item === null || requestParameters.item === undefined) {
            throw new runtime.RequiredError('item','Required parameter requestParameters.item was null or undefined when calling getInCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/pgrest/data/{collection}/{item}`.replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))).replace(`{${"item"}}`, encodeURIComponent(String(requestParameters.item))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespGetInCollectionFromJSON(jsonValue));
    }

    /**
     * Get details about the specific object with id {item} on the table with root_url {collection}.
     */
    async getInCollection(requestParameters: GetInCollectionRequest): Promise<RespGetInCollection> {
        const response = await this.getInCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * List objects in the table with root_url {collection}.
     */
    async listInCollectionRaw(requestParameters: ListInCollectionRequest): Promise<runtime.ApiResponse<RespListInCollection>> {
        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling listInCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/pgrest/data/{collection}`.replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespListInCollectionFromJSON(jsonValue));
    }

    /**
     * List objects in the table with root_url {collection}.
     */
    async listInCollection(requestParameters: ListInCollectionRequest): Promise<RespListInCollection> {
        const response = await this.listInCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update a specific object with id {item} from the table with root_url {collection}.
     */
    async updateInCollectionRaw(requestParameters: UpdateInCollectionRequest): Promise<runtime.ApiResponse<RespUpdateInCollection>> {
        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling updateInCollection.');
        }

        if (requestParameters.item === null || requestParameters.item === undefined) {
            throw new runtime.RequiredError('item','Required parameter requestParameters.item was null or undefined when calling updateInCollection.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateInCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/pgrest/data/{collection}/{item}`.replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))).replace(`{${"item"}}`, encodeURIComponent(String(requestParameters.item))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespUpdateInCollectionFromJSON(jsonValue));
    }

    /**
     * Update a specific object with id {item} from the table with root_url {collection}.
     */
    async updateInCollection(requestParameters: UpdateInCollectionRequest): Promise<RespUpdateInCollection> {
        const response = await this.updateInCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update multiple rows in a table atomically.
     */
    async updateMultipleInCollectionRaw(requestParameters: UpdateMultipleInCollectionRequest): Promise<runtime.ApiResponse<RespUpdateMultipleInCollection>> {
        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling updateMultipleInCollection.');
        }

        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling updateMultipleInCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/pgrest/data/{collection}`.replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespUpdateMultipleInCollectionFromJSON(jsonValue));
    }

    /**
     * Update multiple rows in a table atomically.
     */
    async updateMultipleInCollection(requestParameters: UpdateMultipleInCollectionRequest): Promise<RespUpdateMultipleInCollection> {
        const response = await this.updateMultipleInCollectionRaw(requestParameters);
        return await response.value();
    }

}
