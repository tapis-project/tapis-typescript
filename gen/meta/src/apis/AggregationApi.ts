/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Meta V3 API
 * The Tapis Meta API provides access to a MongoDB database. A standalone service which connects to a MongoDB database and immediately exposes all of MongoDB’s capabilities through a complete REST API, which allows the user to read and write JSON messages and binary data via HTTP.
 *
 * The version of the OpenAPI document: 0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface AddAggregationRequest {
    db: string;
    collection: string;
    aggregation: string;
    body?: object;
}

export interface DeleteAggregationRequest {
    db: string;
    collection: string;
    aggregation: string;
}

export interface SubmitLargeAggregationRequest {
    db: string;
    collection: string;
    aggregation: string;
    page?: number;
    pagesize?: number;
    keys?: Array<string>;
    body?: object;
}

export interface UseAggregationRequest {
    db: string;
    collection: string;
    aggregation: string;
}

/**
 * 
 */
export class AggregationApi extends runtime.BaseAPI {

    /**
     * Create an aggregation that can be executed by users.
     * addAggregation
     */
    async addAggregationRaw(requestParameters: AddAggregationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.db === null || requestParameters.db === undefined) {
            throw new runtime.RequiredError('db','Required parameter requestParameters.db was null or undefined when calling addAggregation.');
        }

        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling addAggregation.');
        }

        if (requestParameters.aggregation === null || requestParameters.aggregation === undefined) {
            throw new runtime.RequiredError('aggregation','Required parameter requestParameters.aggregation was null or undefined when calling addAggregation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/meta/{db}/{collection}/_aggr/{aggregation}`.replace(`{${"db"}}`, encodeURIComponent(String(requestParameters.db))).replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))).replace(`{${"aggregation"}}`, encodeURIComponent(String(requestParameters.aggregation))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create an aggregation that can be executed by users.
     * addAggregation
     */
    async addAggregation(requestParameters: AddAggregationRequest, initOverrides?: RequestInit): Promise<void> {
        await this.addAggregationRaw(requestParameters, initOverrides);
    }

    /**
     * Delete an aggregation defined for a collection.
     * deleteAggregation
     */
    async deleteAggregationRaw(requestParameters: DeleteAggregationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.db === null || requestParameters.db === undefined) {
            throw new runtime.RequiredError('db','Required parameter requestParameters.db was null or undefined when calling deleteAggregation.');
        }

        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling deleteAggregation.');
        }

        if (requestParameters.aggregation === null || requestParameters.aggregation === undefined) {
            throw new runtime.RequiredError('aggregation','Required parameter requestParameters.aggregation was null or undefined when calling deleteAggregation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/meta/{db}/{collection}/_aggr/{aggregation}`.replace(`{${"db"}}`, encodeURIComponent(String(requestParameters.db))).replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))).replace(`{${"aggregation"}}`, encodeURIComponent(String(requestParameters.aggregation))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an aggregation defined for a collection.
     * deleteAggregation
     */
    async deleteAggregation(requestParameters: DeleteAggregationRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteAggregationRaw(requestParameters, initOverrides);
    }

    /**
     *  This is a POST version of useAggregation on a collection with a avars value to large to submit in a query parameter. If the avars parameter is to large, it may exceed the HTTP header character limit. The HTTP server will throw a query header to large error.
     * submitLargeAggregation
     */
    async submitLargeAggregationRaw(requestParameters: SubmitLargeAggregationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.db === null || requestParameters.db === undefined) {
            throw new runtime.RequiredError('db','Required parameter requestParameters.db was null or undefined when calling submitLargeAggregation.');
        }

        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling submitLargeAggregation.');
        }

        if (requestParameters.aggregation === null || requestParameters.aggregation === undefined) {
            throw new runtime.RequiredError('aggregation','Required parameter requestParameters.aggregation was null or undefined when calling submitLargeAggregation.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pagesize !== undefined) {
            queryParameters['pagesize'] = requestParameters.pagesize;
        }

        if (requestParameters.keys) {
            queryParameters['keys'] = requestParameters.keys;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/meta/{db}/{collection}/_aggr/{aggregation}`.replace(`{${"db"}}`, encodeURIComponent(String(requestParameters.db))).replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))).replace(`{${"aggregation"}}`, encodeURIComponent(String(requestParameters.aggregation))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     *  This is a POST version of useAggregation on a collection with a avars value to large to submit in a query parameter. If the avars parameter is to large, it may exceed the HTTP header character limit. The HTTP server will throw a query header to large error.
     * submitLargeAggregation
     */
    async submitLargeAggregation(requestParameters: SubmitLargeAggregationRequest, initOverrides?: RequestInit): Promise<object> {
        const response = await this.submitLargeAggregationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use an aggregation defined for a collection.
     * useAggregation
     */
    async useAggregationRaw(requestParameters: UseAggregationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.db === null || requestParameters.db === undefined) {
            throw new runtime.RequiredError('db','Required parameter requestParameters.db was null or undefined when calling useAggregation.');
        }

        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling useAggregation.');
        }

        if (requestParameters.aggregation === null || requestParameters.aggregation === undefined) {
            throw new runtime.RequiredError('aggregation','Required parameter requestParameters.aggregation was null or undefined when calling useAggregation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/meta/{db}/{collection}/_aggr/{aggregation}`.replace(`{${"db"}}`, encodeURIComponent(String(requestParameters.db))).replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))).replace(`{${"aggregation"}}`, encodeURIComponent(String(requestParameters.aggregation))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Use an aggregation defined for a collection.
     * useAggregation
     */
    async useAggregation(requestParameters: UseAggregationRequest, initOverrides?: RequestInit): Promise<void> {
        await this.useAggregationRaw(requestParameters, initOverrides);
    }

}
