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

export interface CreateCollectionRequest {
    db: string;
    collection: string;
}

export interface DeleteCollectionRequest {
    ifMatch: string;
    db: string;
    collection: string;
}

export interface GetCollectionMetadataRequest {
    db: string;
    collection: string;
}

export interface GetCollectionSizeRequest {
    db: string;
    collection: string;
}

export interface ListDocumentsRequest {
    db: string;
    collection: string;
    page?: number;
    pagesize?: number;
    filter?: object;
    sort?: object;
    keys?: Array<string>;
}

export interface SubmitLargeQueryRequest {
    db: string;
    collection: string;
    page?: string;
    pagesize?: string;
    sort?: object;
    keys?: Array<string>;
    body?: object;
}

/**
 * 
 */
export class CollectionApi extends runtime.BaseAPI {

    /**
     * Create a new collection in the database.
     * createCollection
     */
    async createCollectionRaw(requestParameters: CreateCollectionRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.db === null || requestParameters.db === undefined) {
            throw new runtime.RequiredError('db','Required parameter requestParameters.db was null or undefined when calling createCollection.');
        }

        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling createCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/meta/{db}/{collection}`.replace(`{${"db"}}`, encodeURIComponent(String(requestParameters.db))).replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create a new collection in the database.
     * createCollection
     */
    async createCollection(requestParameters: CreateCollectionRequest): Promise<void> {
        await this.createCollectionRaw(requestParameters);
    }

    /**
     *  Delete a collection in the database. This operation is limit by default to tenant administrators.  An (If-Match) header parameter with the value of the collections etag must be supplied in order for this operations to succeed.
     * deleteCollection
     */
    async deleteCollectionRaw(requestParameters: DeleteCollectionRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.ifMatch === null || requestParameters.ifMatch === undefined) {
            throw new runtime.RequiredError('ifMatch','Required parameter requestParameters.ifMatch was null or undefined when calling deleteCollection.');
        }

        if (requestParameters.db === null || requestParameters.db === undefined) {
            throw new runtime.RequiredError('db','Required parameter requestParameters.db was null or undefined when calling deleteCollection.');
        }

        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling deleteCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/meta/{db}/{collection}`.replace(`{${"db"}}`, encodeURIComponent(String(requestParameters.db))).replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     *  Delete a collection in the database. This operation is limit by default to tenant administrators.  An (If-Match) header parameter with the value of the collections etag must be supplied in order for this operations to succeed.
     * deleteCollection
     */
    async deleteCollection(requestParameters: DeleteCollectionRequest): Promise<void> {
        await this.deleteCollectionRaw(requestParameters);
    }

    /**
     * Get the Metadata for the collection.
     * getCollectionMetadata
     */
    async getCollectionMetadataRaw(requestParameters: GetCollectionMetadataRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.db === null || requestParameters.db === undefined) {
            throw new runtime.RequiredError('db','Required parameter requestParameters.db was null or undefined when calling getCollectionMetadata.');
        }

        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling getCollectionMetadata.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/meta/{db}/{collection}/_meta`.replace(`{${"db"}}`, encodeURIComponent(String(requestParameters.db))).replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get the Metadata for the collection.
     * getCollectionMetadata
     */
    async getCollectionMetadata(requestParameters: GetCollectionMetadataRequest): Promise<object> {
        const response = await this.getCollectionMetadataRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get the size of the collection.  The response will contain the number of documents found in the collection.
     * getCollectionSize
     */
    async getCollectionSizeRaw(requestParameters: GetCollectionSizeRequest): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.db === null || requestParameters.db === undefined) {
            throw new runtime.RequiredError('db','Required parameter requestParameters.db was null or undefined when calling getCollectionSize.');
        }

        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling getCollectionSize.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/meta/{db}/{collection}/_size`.replace(`{${"db"}}`, encodeURIComponent(String(requestParameters.db))).replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get the size of the collection.  The response will contain the number of documents found in the collection.
     * getCollectionSize
     */
    async getCollectionSize(requestParameters: GetCollectionSizeRequest): Promise<Array<string>> {
        const response = await this.getCollectionSizeRaw(requestParameters);
        return await response.value();
    }

    /**
     * List of documents in the collection.  If no query parameters are submitted a default number of documents <pagesize> is returned in default sort order (sort)  as the first page <page> of a document result set. The default sort order is based on the \"_id\" of the document.  A (filter) query parameter value is represented by a valid MongoDb query document. This will allow retrieving documents that meet a desired criteria. When coupled with the (keys) query parameter a projection will limit the fields to return for all matching documents.
     * listDocuments
     */
    async listDocumentsRaw(requestParameters: ListDocumentsRequest): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.db === null || requestParameters.db === undefined) {
            throw new runtime.RequiredError('db','Required parameter requestParameters.db was null or undefined when calling listDocuments.');
        }

        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling listDocuments.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pagesize !== undefined) {
            queryParameters['pagesize'] = requestParameters.pagesize;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.keys) {
            queryParameters['keys'] = requestParameters.keys;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/meta/{db}/{collection}`.replace(`{${"db"}}`, encodeURIComponent(String(requestParameters.db))).replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * List of documents in the collection.  If no query parameters are submitted a default number of documents <pagesize> is returned in default sort order (sort)  as the first page <page> of a document result set. The default sort order is based on the \"_id\" of the document.  A (filter) query parameter value is represented by a valid MongoDb query document. This will allow retrieving documents that meet a desired criteria. When coupled with the (keys) query parameter a projection will limit the fields to return for all matching documents.
     * listDocuments
     */
    async listDocuments(requestParameters: ListDocumentsRequest): Promise<Array<object>> {
        const response = await this.listDocumentsRaw(requestParameters);
        return await response.value();
    }

    /**
     *  This is a POST version of filter on a collection with a filter value to large to submit in a query parameter. If the filter parameter is to large, it may exceed the HTTP header character limit. The HTTP server will throw a query header to large error.
     * submitLargeQuery
     */
    async submitLargeQueryRaw(requestParameters: SubmitLargeQueryRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.db === null || requestParameters.db === undefined) {
            throw new runtime.RequiredError('db','Required parameter requestParameters.db was null or undefined when calling submitLargeQuery.');
        }

        if (requestParameters.collection === null || requestParameters.collection === undefined) {
            throw new runtime.RequiredError('collection','Required parameter requestParameters.collection was null or undefined when calling submitLargeQuery.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pagesize !== undefined) {
            queryParameters['pagesize'] = requestParameters.pagesize;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
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
            path: `/v3/meta/{db}/{collection}/_filter`.replace(`{${"db"}}`, encodeURIComponent(String(requestParameters.db))).replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     *  This is a POST version of filter on a collection with a filter value to large to submit in a query parameter. If the filter parameter is to large, it may exceed the HTTP header character limit. The HTTP server will throw a query header to large error.
     * submitLargeQuery
     */
    async submitLargeQuery(requestParameters: SubmitLargeQueryRequest): Promise<object> {
        const response = await this.submitLargeQueryRaw(requestParameters);
        return await response.value();
    }

}