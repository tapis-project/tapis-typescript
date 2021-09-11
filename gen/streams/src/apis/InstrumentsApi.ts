/* tslint:disable */
/* eslint-disable */
/**
 * Streams API
 * Manage Tapis Streams API.
 *
 * The version of the OpenAPI document: 1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ReqCreateInstrument,
    ReqCreateInstrumentFromJSON,
    ReqCreateInstrumentToJSON,
    RespCreateInstrument,
    RespCreateInstrumentFromJSON,
    RespCreateInstrumentToJSON,
    RespDeleteInstrument,
    RespDeleteInstrumentFromJSON,
    RespDeleteInstrumentToJSON,
    RespGetInstrument,
    RespGetInstrumentFromJSON,
    RespGetInstrumentToJSON,
    RespListInstruments,
    RespListInstrumentsFromJSON,
    RespListInstrumentsToJSON,
    RespUpdateInstrument,
    RespUpdateInstrumentFromJSON,
    RespUpdateInstrumentToJSON,
} from '../models';

export interface CreateInstrumentRequest {
    projectId: string;
    siteId: string;
    reqCreateInstrument: Array<ReqCreateInstrument>;
}

export interface DeleteInstrumentRequest {
    projectId: string;
    siteId: string;
    instId: string;
}

export interface GetInstrumentRequest {
    projectId: string;
    siteId: string;
    instId: string;
}

export interface ListInstrumentsRequest {
    projectId: string;
    siteId: string;
    query?: string;
    limit?: number;
    offset?: number;
}

export interface UpdateInstrumentRequest {
    projectId: string;
    siteId: string;
    instId: string;
    reqCreateInstrument: ReqCreateInstrument;
}

/**
 * 
 */
export class InstrumentsApi extends runtime.BaseAPI {

    /**
     * Create instruments (single or bulk)
     * Create instruments (single or bulk)
     */
    async createInstrumentRaw(requestParameters: CreateInstrumentRequest): Promise<runtime.ApiResponse<RespCreateInstrument>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling createInstrument.');
        }

        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling createInstrument.');
        }

        if (requestParameters.reqCreateInstrument === null || requestParameters.reqCreateInstrument === undefined) {
            throw new runtime.RequiredError('reqCreateInstrument','Required parameter requestParameters.reqCreateInstrument was null or undefined when calling createInstrument.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/streams/projects/{project_id}/sites/{site_id}/instruments`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.reqCreateInstrument.map(ReqCreateInstrumentToJSON),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespCreateInstrumentFromJSON(jsonValue));
    }

    /**
     * Create instruments (single or bulk)
     * Create instruments (single or bulk)
     */
    async createInstrument(requestParameters: CreateInstrumentRequest): Promise<RespCreateInstrument> {
        const response = await this.createInstrumentRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an instrument
     * Delete an instrument
     */
    async deleteInstrumentRaw(requestParameters: DeleteInstrumentRequest): Promise<runtime.ApiResponse<RespDeleteInstrument>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling deleteInstrument.');
        }

        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling deleteInstrument.');
        }

        if (requestParameters.instId === null || requestParameters.instId === undefined) {
            throw new runtime.RequiredError('instId','Required parameter requestParameters.instId was null or undefined when calling deleteInstrument.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/streams/projects/{project_id}/sites/{site_id}/instruments/{inst_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))).replace(`{${"inst_id"}}`, encodeURIComponent(String(requestParameters.instId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespDeleteInstrumentFromJSON(jsonValue));
    }

    /**
     * Delete an instrument
     * Delete an instrument
     */
    async deleteInstrument(requestParameters: DeleteInstrumentRequest): Promise<RespDeleteInstrument> {
        const response = await this.deleteInstrumentRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get instrument details
     * Get instrument details
     */
    async getInstrumentRaw(requestParameters: GetInstrumentRequest): Promise<runtime.ApiResponse<RespGetInstrument>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getInstrument.');
        }

        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling getInstrument.');
        }

        if (requestParameters.instId === null || requestParameters.instId === undefined) {
            throw new runtime.RequiredError('instId','Required parameter requestParameters.instId was null or undefined when calling getInstrument.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/streams/projects/{project_id}/sites/{site_id}/instruments/{inst_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))).replace(`{${"inst_id"}}`, encodeURIComponent(String(requestParameters.instId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespGetInstrumentFromJSON(jsonValue));
    }

    /**
     * Get instrument details
     * Get instrument details
     */
    async getInstrument(requestParameters: GetInstrumentRequest): Promise<RespGetInstrument> {
        const response = await this.getInstrumentRaw(requestParameters);
        return await response.value();
    }

    /**
     * List instruments
     * List instruments
     */
    async listInstrumentsRaw(requestParameters: ListInstrumentsRequest): Promise<runtime.ApiResponse<RespListInstruments>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling listInstruments.');
        }

        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling listInstruments.');
        }

        const queryParameters: any = {};

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/streams/projects/{project_id}/sites/{site_id}/instruments`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespListInstrumentsFromJSON(jsonValue));
    }

    /**
     * List instruments
     * List instruments
     */
    async listInstruments(requestParameters: ListInstrumentsRequest): Promise<RespListInstruments> {
        const response = await this.listInstrumentsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an instrument
     * Update an instrument
     */
    async updateInstrumentRaw(requestParameters: UpdateInstrumentRequest): Promise<runtime.ApiResponse<RespUpdateInstrument>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling updateInstrument.');
        }

        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling updateInstrument.');
        }

        if (requestParameters.instId === null || requestParameters.instId === undefined) {
            throw new runtime.RequiredError('instId','Required parameter requestParameters.instId was null or undefined when calling updateInstrument.');
        }

        if (requestParameters.reqCreateInstrument === null || requestParameters.reqCreateInstrument === undefined) {
            throw new runtime.RequiredError('reqCreateInstrument','Required parameter requestParameters.reqCreateInstrument was null or undefined when calling updateInstrument.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/streams/projects/{project_id}/sites/{site_id}/instruments/{inst_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))).replace(`{${"inst_id"}}`, encodeURIComponent(String(requestParameters.instId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateInstrumentToJSON(requestParameters.reqCreateInstrument),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespUpdateInstrumentFromJSON(jsonValue));
    }

    /**
     * Update an instrument
     * Update an instrument
     */
    async updateInstrument(requestParameters: UpdateInstrumentRequest): Promise<RespUpdateInstrument> {
        const response = await this.updateInstrumentRaw(requestParameters);
        return await response.value();
    }

}
