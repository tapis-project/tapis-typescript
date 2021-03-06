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
    ReqCreateVariable,
    ReqCreateVariableFromJSON,
    ReqCreateVariableToJSON,
    RespCreateVariable,
    RespCreateVariableFromJSON,
    RespCreateVariableToJSON,
    RespDeleteVariable,
    RespDeleteVariableFromJSON,
    RespDeleteVariableToJSON,
    RespGetVariable,
    RespGetVariableFromJSON,
    RespGetVariableToJSON,
    RespListVariables,
    RespListVariablesFromJSON,
    RespListVariablesToJSON,
    RespUpdateVariable,
    RespUpdateVariableFromJSON,
    RespUpdateVariableToJSON,
} from '../models';

export interface CreateVariableRequest {
    projectId: string;
    siteId: string;
    instId: string;
    reqCreateVariable: Array<ReqCreateVariable>;
}

export interface DeleteVariableRequest {
    projectId: string;
    siteId: string;
    instId: string;
    varId: string;
}

export interface GetVariableRequest {
    projectId: string;
    siteId: string;
    instId: string;
    varId: string;
}

export interface ListVariablesRequest {
    projectId: string;
    siteId: string;
    instId: string;
    query?: string;
    limit?: number;
    offset?: number;
}

export interface UpdateVariableRequest {
    projectId: string;
    siteId: string;
    instId: string;
    varId: string;
    reqCreateVariable: ReqCreateVariable;
}

/**
 * 
 */
export class VariablesApi extends runtime.BaseAPI {

    /**
     * Create variable (single or bulk).
     * Create variable (single or bulk).
     */
    async createVariableRaw(requestParameters: CreateVariableRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespCreateVariable>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling createVariable.');
        }

        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling createVariable.');
        }

        if (requestParameters.instId === null || requestParameters.instId === undefined) {
            throw new runtime.RequiredError('instId','Required parameter requestParameters.instId was null or undefined when calling createVariable.');
        }

        if (requestParameters.reqCreateVariable === null || requestParameters.reqCreateVariable === undefined) {
            throw new runtime.RequiredError('reqCreateVariable','Required parameter requestParameters.reqCreateVariable was null or undefined when calling createVariable.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/streams/projects/{project_id}/sites/{site_id}/instruments/{inst_id}/variables`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))).replace(`{${"inst_id"}}`, encodeURIComponent(String(requestParameters.instId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.reqCreateVariable.map(ReqCreateVariableToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespCreateVariableFromJSON(jsonValue));
    }

    /**
     * Create variable (single or bulk).
     * Create variable (single or bulk).
     */
    async createVariable(requestParameters: CreateVariableRequest, initOverrides?: RequestInit): Promise<RespCreateVariable> {
        const response = await this.createVariableRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a variable (single or bulk)
     * Delete a variable (single or bulk)
     */
    async deleteVariableRaw(requestParameters: DeleteVariableRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespDeleteVariable>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling deleteVariable.');
        }

        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling deleteVariable.');
        }

        if (requestParameters.instId === null || requestParameters.instId === undefined) {
            throw new runtime.RequiredError('instId','Required parameter requestParameters.instId was null or undefined when calling deleteVariable.');
        }

        if (requestParameters.varId === null || requestParameters.varId === undefined) {
            throw new runtime.RequiredError('varId','Required parameter requestParameters.varId was null or undefined when calling deleteVariable.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/streams/projects/{project_id}/sites/{site_id}/instruments/{inst_id}/variables/{var_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))).replace(`{${"inst_id"}}`, encodeURIComponent(String(requestParameters.instId))).replace(`{${"var_id"}}`, encodeURIComponent(String(requestParameters.varId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespDeleteVariableFromJSON(jsonValue));
    }

    /**
     * Delete a variable (single or bulk)
     * Delete a variable (single or bulk)
     */
    async deleteVariable(requestParameters: DeleteVariableRequest, initOverrides?: RequestInit): Promise<RespDeleteVariable> {
        const response = await this.deleteVariableRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get details of a specific variable by its id
     * Get variable details
     */
    async getVariableRaw(requestParameters: GetVariableRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespGetVariable>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getVariable.');
        }

        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling getVariable.');
        }

        if (requestParameters.instId === null || requestParameters.instId === undefined) {
            throw new runtime.RequiredError('instId','Required parameter requestParameters.instId was null or undefined when calling getVariable.');
        }

        if (requestParameters.varId === null || requestParameters.varId === undefined) {
            throw new runtime.RequiredError('varId','Required parameter requestParameters.varId was null or undefined when calling getVariable.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/streams/projects/{project_id}/sites/{site_id}/instruments/{inst_id}/variables/{var_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))).replace(`{${"inst_id"}}`, encodeURIComponent(String(requestParameters.instId))).replace(`{${"var_id"}}`, encodeURIComponent(String(requestParameters.varId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespGetVariableFromJSON(jsonValue));
    }

    /**
     * Get details of a specific variable by its id
     * Get variable details
     */
    async getVariable(requestParameters: GetVariableRequest, initOverrides?: RequestInit): Promise<RespGetVariable> {
        const response = await this.getVariableRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List variables.
     * List variables.
     */
    async listVariablesRaw(requestParameters: ListVariablesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespListVariables>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling listVariables.');
        }

        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling listVariables.');
        }

        if (requestParameters.instId === null || requestParameters.instId === undefined) {
            throw new runtime.RequiredError('instId','Required parameter requestParameters.instId was null or undefined when calling listVariables.');
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
            path: `/v3/streams/projects/{project_id}/sites/{site_id}/instruments/{inst_id}/variables`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))).replace(`{${"inst_id"}}`, encodeURIComponent(String(requestParameters.instId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespListVariablesFromJSON(jsonValue));
    }

    /**
     * List variables.
     * List variables.
     */
    async listVariables(requestParameters: ListVariablesRequest, initOverrides?: RequestInit): Promise<RespListVariables> {
        const response = await this.listVariablesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a variable
     * Update a variable
     */
    async updateVariableRaw(requestParameters: UpdateVariableRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespUpdateVariable>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling updateVariable.');
        }

        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling updateVariable.');
        }

        if (requestParameters.instId === null || requestParameters.instId === undefined) {
            throw new runtime.RequiredError('instId','Required parameter requestParameters.instId was null or undefined when calling updateVariable.');
        }

        if (requestParameters.varId === null || requestParameters.varId === undefined) {
            throw new runtime.RequiredError('varId','Required parameter requestParameters.varId was null or undefined when calling updateVariable.');
        }

        if (requestParameters.reqCreateVariable === null || requestParameters.reqCreateVariable === undefined) {
            throw new runtime.RequiredError('reqCreateVariable','Required parameter requestParameters.reqCreateVariable was null or undefined when calling updateVariable.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/streams/projects/{project_id}/sites/{site_id}/instruments/{inst_id}/variables/{var_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))).replace(`{${"inst_id"}}`, encodeURIComponent(String(requestParameters.instId))).replace(`{${"var_id"}}`, encodeURIComponent(String(requestParameters.varId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateVariableToJSON(requestParameters.reqCreateVariable),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespUpdateVariableFromJSON(jsonValue));
    }

    /**
     * Update a variable
     * Update a variable
     */
    async updateVariable(requestParameters: UpdateVariableRequest, initOverrides?: RequestInit): Promise<RespUpdateVariable> {
        const response = await this.updateVariableRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
