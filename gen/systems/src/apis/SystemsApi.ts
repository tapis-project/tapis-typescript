/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions and credentials.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ReqCreateSystem,
    ReqCreateSystemFromJSON,
    ReqCreateSystemToJSON,
    ReqMatchConstraints,
    ReqMatchConstraintsFromJSON,
    ReqMatchConstraintsToJSON,
    ReqSearchSystems,
    ReqSearchSystemsFromJSON,
    ReqSearchSystemsToJSON,
    ReqUpdateSystem,
    ReqUpdateSystemFromJSON,
    ReqUpdateSystemToJSON,
    RespBasic,
    RespBasicFromJSON,
    RespBasicToJSON,
    RespBoolean,
    RespBooleanFromJSON,
    RespBooleanToJSON,
    RespChangeCount,
    RespChangeCountFromJSON,
    RespChangeCountToJSON,
    RespResourceUrl,
    RespResourceUrlFromJSON,
    RespResourceUrlToJSON,
    RespSystem,
    RespSystemFromJSON,
    RespSystemToJSON,
    RespSystems,
    RespSystemsFromJSON,
    RespSystemsToJSON,
} from '../models';

export interface ChangeSystemOwnerRequest {
    systemId: string;
    userName: string;
}

export interface CreateSystemRequest {
    reqCreateSystem: ReqCreateSystem;
}

export interface DeleteSystemRequest {
    systemId: string;
    confirm?: boolean;
}

export interface DisableSystemRequest {
    systemId: string;
}

export interface EnableSystemRequest {
    systemId: string;
}

export interface GetSystemRequest {
    systemId: string;
    returnCredentials?: boolean;
    authnMethod?: string;
    requireExecPerm?: boolean;
    select?: string;
}

export interface GetSystemsRequest {
    search?: string;
    limit?: number;
    orderBy?: string;
    skip?: number;
    startAfter?: string;
    computeTotal?: boolean;
    select?: string;
}

export interface IsEnabledRequest {
    systemId: string;
}

export interface MatchConstraintsRequest {
    reqMatchConstraints: ReqMatchConstraints;
}

export interface SearchSystemsQueryParametersRequest {
    limit?: number;
    orderBy?: string;
    skip?: number;
    startAfter?: string;
    computeTotal?: boolean;
    select?: string;
}

export interface SearchSystemsRequestBodyRequest {
    reqSearchSystems: ReqSearchSystems;
    limit?: number;
    orderBy?: string;
    skip?: number;
    startAfter?: string;
    computeTotal?: boolean;
    select?: string;
}

export interface UpdateSystemRequest {
    systemId: string;
    reqUpdateSystem: ReqUpdateSystem;
}

/**
 * 
 */
export class SystemsApi extends runtime.BaseAPI {

    /**
     * Change owner of a system.
     * Change system owner
     */
    async changeSystemOwnerRaw(requestParameters: ChangeSystemOwnerRequest): Promise<runtime.ApiResponse<RespChangeCount>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling changeSystemOwner.');
        }

        if (requestParameters.userName === null || requestParameters.userName === undefined) {
            throw new runtime.RequiredError('userName','Required parameter requestParameters.userName was null or undefined when calling changeSystemOwner.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/{systemId}/changeOwner/{userName}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"userName"}}`, encodeURIComponent(String(requestParameters.userName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespChangeCountFromJSON(jsonValue));
    }

    /**
     * Change owner of a system.
     * Change system owner
     */
    async changeSystemOwner(requestParameters: ChangeSystemOwnerRequest): Promise<RespChangeCount> {
        const response = await this.changeSystemOwnerRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a system using a request body. System name must be unique within a tenant and can be composed of alphanumeric characters and the following special characters [-._~]. Name must begin with an alphabetic character and can be no more than 80 characters in length. Description is optional with a maximum length of 2048 characters.\'
     * Create a system
     */
    async createSystemRaw(requestParameters: CreateSystemRequest): Promise<runtime.ApiResponse<RespResourceUrl>> {
        if (requestParameters.reqCreateSystem === null || requestParameters.reqCreateSystem === undefined) {
            throw new runtime.RequiredError('reqCreateSystem','Required parameter requestParameters.reqCreateSystem was null or undefined when calling createSystem.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateSystemToJSON(requestParameters.reqCreateSystem),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespResourceUrlFromJSON(jsonValue));
    }

    /**
     * Create a system using a request body. System name must be unique within a tenant and can be composed of alphanumeric characters and the following special characters [-._~]. Name must begin with an alphabetic character and can be no more than 80 characters in length. Description is optional with a maximum length of 2048 characters.\'
     * Create a system
     */
    async createSystem(requestParameters: CreateSystemRequest): Promise<RespResourceUrl> {
        const response = await this.createSystemRaw(requestParameters);
        return await response.value();
    }

    /**
     * Soft delete a system given the system name. Must specify confirm=true to complete the action.
     * Soft delete a system
     */
    async deleteSystemRaw(requestParameters: DeleteSystemRequest): Promise<runtime.ApiResponse<RespChangeCount>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling deleteSystem.');
        }

        const queryParameters: any = {};

        if (requestParameters.confirm !== undefined) {
            queryParameters['confirm'] = requestParameters.confirm;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/{systemId}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespChangeCountFromJSON(jsonValue));
    }

    /**
     * Soft delete a system given the system name. Must specify confirm=true to complete the action.
     * Soft delete a system
     */
    async deleteSystem(requestParameters: DeleteSystemRequest): Promise<RespChangeCount> {
        const response = await this.deleteSystemRaw(requestParameters);
        return await response.value();
    }

    /**
     * Mark a system unavailable for use.
     * Mark a system unavailabe for use.
     */
    async disableSystemRaw(requestParameters: DisableSystemRequest): Promise<runtime.ApiResponse<RespChangeCount>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling disableSystem.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/{systemId}/disable`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespChangeCountFromJSON(jsonValue));
    }

    /**
     * Mark a system unavailable for use.
     * Mark a system unavailabe for use.
     */
    async disableSystem(requestParameters: DisableSystemRequest): Promise<RespChangeCount> {
        const response = await this.disableSystemRaw(requestParameters);
        return await response.value();
    }

    /**
     * Mark a system available for use.
     * Mark a system availabe for use.
     */
    async enableSystemRaw(requestParameters: EnableSystemRequest): Promise<runtime.ApiResponse<RespChangeCount>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling enableSystem.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/{systemId}/enable`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespChangeCountFromJSON(jsonValue));
    }

    /**
     * Mark a system available for use.
     * Mark a system availabe for use.
     */
    async enableSystem(requestParameters: EnableSystemRequest): Promise<RespChangeCount> {
        const response = await this.enableSystemRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve information for a system given the system name. Use query parameter returnCredentials=true to have effectiveUserId credentials included in the response. Use query parameter authnMethod=<method> to override default authn method.
     * Retrieve system details
     */
    async getSystemRaw(requestParameters: GetSystemRequest): Promise<runtime.ApiResponse<RespSystem>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling getSystem.');
        }

        const queryParameters: any = {};

        if (requestParameters.returnCredentials !== undefined) {
            queryParameters['returnCredentials'] = requestParameters.returnCredentials;
        }

        if (requestParameters.authnMethod !== undefined) {
            queryParameters['authnMethod'] = requestParameters.authnMethod;
        }

        if (requestParameters.requireExecPerm !== undefined) {
            queryParameters['requireExecPerm'] = requestParameters.requireExecPerm;
        }

        if (requestParameters.select !== undefined) {
            queryParameters['select'] = requestParameters.select;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/{systemId}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespSystemFromJSON(jsonValue));
    }

    /**
     * Retrieve information for a system given the system name. Use query parameter returnCredentials=true to have effectiveUserId credentials included in the response. Use query parameter authnMethod=<method> to override default authn method.
     * Retrieve system details
     */
    async getSystem(requestParameters: GetSystemRequest): Promise<RespSystem> {
        const response = await this.getSystemRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve list of systems. Use search and select query parameters to limit results.
     * Retrieve systems
     */
    async getSystemsRaw(requestParameters: GetSystemsRequest): Promise<runtime.ApiResponse<RespSystems>> {
        const queryParameters: any = {};

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.orderBy !== undefined) {
            queryParameters['orderBy'] = requestParameters.orderBy;
        }

        if (requestParameters.skip !== undefined) {
            queryParameters['skip'] = requestParameters.skip;
        }

        if (requestParameters.startAfter !== undefined) {
            queryParameters['startAfter'] = requestParameters.startAfter;
        }

        if (requestParameters.computeTotal !== undefined) {
            queryParameters['computeTotal'] = requestParameters.computeTotal;
        }

        if (requestParameters.select !== undefined) {
            queryParameters['select'] = requestParameters.select;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespSystemsFromJSON(jsonValue));
    }

    /**
     * Retrieve list of systems. Use search and select query parameters to limit results.
     * Retrieve systems
     */
    async getSystems(requestParameters: GetSystemsRequest): Promise<RespSystems> {
        const response = await this.getSystemsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Check if a system is currently enabled, i.e. available for use.
     * Check if system is currently enabled
     */
    async isEnabledRaw(requestParameters: IsEnabledRequest): Promise<runtime.ApiResponse<RespBoolean>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling isEnabled.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/{systemId}/isEnabled`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBooleanFromJSON(jsonValue));
    }

    /**
     * Check if a system is currently enabled, i.e. available for use.
     * Check if system is currently enabled
     */
    async isEnabled(requestParameters: IsEnabledRequest): Promise<RespBoolean> {
        const response = await this.isEnabledRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve details for systems. Use request body to specify constraint conditions as an SQL-like WHERE clause.
     * Retrieve systems satisfying specified constraint conditions
     */
    async matchConstraintsRaw(requestParameters: MatchConstraintsRequest): Promise<runtime.ApiResponse<RespSystems>> {
        if (requestParameters.reqMatchConstraints === null || requestParameters.reqMatchConstraints === undefined) {
            throw new runtime.RequiredError('reqMatchConstraints','Required parameter requestParameters.reqMatchConstraints was null or undefined when calling matchConstraints.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/match/constraints`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqMatchConstraintsToJSON(requestParameters.reqMatchConstraints),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespSystemsFromJSON(jsonValue));
    }

    /**
     * Retrieve details for systems. Use request body to specify constraint conditions as an SQL-like WHERE clause.
     * Retrieve systems satisfying specified constraint conditions
     */
    async matchConstraints(requestParameters: MatchConstraintsRequest): Promise<RespSystems> {
        const response = await this.matchConstraintsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve details for systems. Use query parameters to specify search conditions. For example owner.eq=jdoe&port.gt=1024
     * Retrieve list of systems matching search conditions specified as query parameters
     */
    async searchSystemsQueryParametersRaw(requestParameters: SearchSystemsQueryParametersRequest): Promise<runtime.ApiResponse<RespSystems>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.orderBy !== undefined) {
            queryParameters['orderBy'] = requestParameters.orderBy;
        }

        if (requestParameters.skip !== undefined) {
            queryParameters['skip'] = requestParameters.skip;
        }

        if (requestParameters.startAfter !== undefined) {
            queryParameters['startAfter'] = requestParameters.startAfter;
        }

        if (requestParameters.computeTotal !== undefined) {
            queryParameters['computeTotal'] = requestParameters.computeTotal;
        }

        if (requestParameters.select !== undefined) {
            queryParameters['select'] = requestParameters.select;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespSystemsFromJSON(jsonValue));
    }

    /**
     * Retrieve details for systems. Use query parameters to specify search conditions. For example owner.eq=jdoe&port.gt=1024
     * Retrieve list of systems matching search conditions specified as query parameters
     */
    async searchSystemsQueryParameters(requestParameters: SearchSystemsQueryParametersRequest): Promise<RespSystems> {
        const response = await this.searchSystemsQueryParametersRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve details for systems. Use request body to specify SQL-like search conditions.
     * Retrieve list of systems matching search conditions
     */
    async searchSystemsRequestBodyRaw(requestParameters: SearchSystemsRequestBodyRequest): Promise<runtime.ApiResponse<RespSystems>> {
        if (requestParameters.reqSearchSystems === null || requestParameters.reqSearchSystems === undefined) {
            throw new runtime.RequiredError('reqSearchSystems','Required parameter requestParameters.reqSearchSystems was null or undefined when calling searchSystemsRequestBody.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.orderBy !== undefined) {
            queryParameters['orderBy'] = requestParameters.orderBy;
        }

        if (requestParameters.skip !== undefined) {
            queryParameters['skip'] = requestParameters.skip;
        }

        if (requestParameters.startAfter !== undefined) {
            queryParameters['startAfter'] = requestParameters.startAfter;
        }

        if (requestParameters.computeTotal !== undefined) {
            queryParameters['computeTotal'] = requestParameters.computeTotal;
        }

        if (requestParameters.select !== undefined) {
            queryParameters['select'] = requestParameters.select;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/search`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqSearchSystemsToJSON(requestParameters.reqSearchSystems),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespSystemsFromJSON(jsonValue));
    }

    /**
     * Retrieve details for systems. Use request body to specify SQL-like search conditions.
     * Retrieve list of systems matching search conditions
     */
    async searchSystemsRequestBody(requestParameters: SearchSystemsRequestBodyRequest): Promise<RespSystems> {
        const response = await this.searchSystemsRequestBodyRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update attributes for a system. Attributes that may be updated are description, host, effectiveUserId, defaultAuthnMethod, port, useProxy, proxyHost, proxyPort, jobCapabilities, tags, notes.
     * Update a system
     */
    async updateSystemRaw(requestParameters: UpdateSystemRequest): Promise<runtime.ApiResponse<RespResourceUrl>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling updateSystem.');
        }

        if (requestParameters.reqUpdateSystem === null || requestParameters.reqUpdateSystem === undefined) {
            throw new runtime.RequiredError('reqUpdateSystem','Required parameter requestParameters.reqUpdateSystem was null or undefined when calling updateSystem.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/{systemId}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ReqUpdateSystemToJSON(requestParameters.reqUpdateSystem),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespResourceUrlFromJSON(jsonValue));
    }

    /**
     * Update attributes for a system. Attributes that may be updated are description, host, effectiveUserId, defaultAuthnMethod, port, useProxy, proxyHost, proxyPort, jobCapabilities, tags, notes.
     * Update a system
     */
    async updateSystem(requestParameters: UpdateSystemRequest): Promise<RespResourceUrl> {
        const response = await this.updateSystemRaw(requestParameters);
        return await response.value();
    }

}
