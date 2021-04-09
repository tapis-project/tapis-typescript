/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
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
    ReqCreateApp,
    ReqCreateAppFromJSON,
    ReqCreateAppToJSON,
    ReqSearchApps,
    ReqSearchAppsFromJSON,
    ReqSearchAppsToJSON,
    ReqUpdateApp,
    ReqUpdateAppFromJSON,
    ReqUpdateAppToJSON,
    RespApp,
    RespAppFromJSON,
    RespAppToJSON,
    RespAppArray,
    RespAppArrayFromJSON,
    RespAppArrayToJSON,
    RespBasic,
    RespBasicFromJSON,
    RespBasicToJSON,
    RespChangeCount,
    RespChangeCountFromJSON,
    RespChangeCountToJSON,
    RespResourceUrl,
    RespResourceUrlFromJSON,
    RespResourceUrlToJSON,
} from '../models';

export interface ChangeAppOwnerRequest {
    appId: string;
    userName: string;
    pretty?: boolean;
}

export interface CreateAppVersionRequest {
    reqCreateApp: ReqCreateApp;
    pretty?: boolean;
}

export interface DeleteAppRequest {
    appId: string;
    pretty?: boolean;
}

export interface GetAppRequest {
    appId: string;
    appVersion: string;
    pretty?: boolean;
    requireExecPerm?: boolean;
}

export interface GetAppLatestVersionRequest {
    appId: string;
    pretty?: boolean;
    requireExecPerm?: boolean;
}

export interface GetAppsRequest {
    pretty?: boolean;
    search?: string;
}

export interface SearchAppsQueryParametersRequest {
    pretty?: boolean;
}

export interface SearchAppsRequestBodyRequest {
    reqSearchApps: ReqSearchApps;
    pretty?: boolean;
}

export interface UpdateAppRequest {
    appId: string;
    appVersion: string;
    reqUpdateApp: ReqUpdateApp;
    pretty?: boolean;
}

/**
 * 
 */
export class ApplicationsApi extends runtime.BaseAPI {

    /**
     * Change owner of an application. Applies to all versions.
     * Change application owner
     */
    async changeAppOwnerRaw(requestParameters: ChangeAppOwnerRequest): Promise<runtime.ApiResponse<RespChangeCount>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling changeAppOwner.');
        }

        if (requestParameters.userName === null || requestParameters.userName === undefined) {
            throw new runtime.RequiredError('userName','Required parameter requestParameters.userName was null or undefined when calling changeAppOwner.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/apps/{appId}/changeOwner/{userName}`.replace(`{${"appId"}}`, encodeURIComponent(String(requestParameters.appId))).replace(`{${"userName"}}`, encodeURIComponent(String(requestParameters.userName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespChangeCountFromJSON(jsonValue));
    }

    /**
     * Change owner of an application. Applies to all versions.
     * Change application owner
     */
    async changeAppOwner(requestParameters: ChangeAppOwnerRequest): Promise<RespChangeCount> {
        const response = await this.changeAppOwnerRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create an application using a request body. App id+version must be unique within tenant and can be composed of alphanumeric characters and the following special characters [-._~]. Id must begin with an alphabetic character and can be no more than 256 characters in length.\'
     * Create a new version of an application
     */
    async createAppVersionRaw(requestParameters: CreateAppVersionRequest): Promise<runtime.ApiResponse<RespResourceUrl>> {
        if (requestParameters.reqCreateApp === null || requestParameters.reqCreateApp === undefined) {
            throw new runtime.RequiredError('reqCreateApp','Required parameter requestParameters.reqCreateApp was null or undefined when calling createAppVersion.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/apps`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateAppToJSON(requestParameters.reqCreateApp),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespResourceUrlFromJSON(jsonValue));
    }

    /**
     * Create an application using a request body. App id+version must be unique within tenant and can be composed of alphanumeric characters and the following special characters [-._~]. Id must begin with an alphabetic character and can be no more than 256 characters in length.\'
     * Create a new version of an application
     */
    async createAppVersion(requestParameters: CreateAppVersionRequest): Promise<RespResourceUrl> {
        const response = await this.createAppVersionRaw(requestParameters);
        return await response.value();
    }

    /**
     * Soft delete an application given the app name.
     * Soft delete all versions of an application
     */
    async deleteAppRaw(requestParameters: DeleteAppRequest): Promise<runtime.ApiResponse<RespChangeCount>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling deleteApp.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/apps/{appId}`.replace(`{${"appId"}}`, encodeURIComponent(String(requestParameters.appId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespChangeCountFromJSON(jsonValue));
    }

    /**
     * Soft delete an application given the app name.
     * Soft delete all versions of an application
     */
    async deleteApp(requestParameters: DeleteAppRequest): Promise<RespChangeCount> {
        const response = await this.deleteAppRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve information for an application given the app Id and version.
     * Retrieve details for specific version of an application
     */
    async getAppRaw(requestParameters: GetAppRequest): Promise<runtime.ApiResponse<RespApp>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling getApp.');
        }

        if (requestParameters.appVersion === null || requestParameters.appVersion === undefined) {
            throw new runtime.RequiredError('appVersion','Required parameter requestParameters.appVersion was null or undefined when calling getApp.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.requireExecPerm !== undefined) {
            queryParameters['requireExecPerm'] = requestParameters.requireExecPerm;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/apps/{appId}/{appVersion}`.replace(`{${"appId"}}`, encodeURIComponent(String(requestParameters.appId))).replace(`{${"appVersion"}}`, encodeURIComponent(String(requestParameters.appVersion))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespAppFromJSON(jsonValue));
    }

    /**
     * Retrieve information for an application given the app Id and version.
     * Retrieve details for specific version of an application
     */
    async getApp(requestParameters: GetAppRequest): Promise<RespApp> {
        const response = await this.getAppRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve latest version of an application.
     * Retrieve latest version of an application
     */
    async getAppLatestVersionRaw(requestParameters: GetAppLatestVersionRequest): Promise<runtime.ApiResponse<RespApp>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling getAppLatestVersion.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.requireExecPerm !== undefined) {
            queryParameters['requireExecPerm'] = requestParameters.requireExecPerm;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/apps/{appId}`.replace(`{${"appId"}}`, encodeURIComponent(String(requestParameters.appId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespAppFromJSON(jsonValue));
    }

    /**
     * Retrieve latest version of an application.
     * Retrieve latest version of an application
     */
    async getAppLatestVersion(requestParameters: GetAppLatestVersionRequest): Promise<RespApp> {
        const response = await this.getAppLatestVersionRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve applications. Use search and select query parameters to limit results.
     * Retrieve applications.
     */
    async getAppsRaw(requestParameters: GetAppsRequest): Promise<runtime.ApiResponse<RespAppArray>> {
        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/apps`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespAppArrayFromJSON(jsonValue));
    }

    /**
     * Retrieve applications. Use search and select query parameters to limit results.
     * Retrieve applications.
     */
    async getApps(requestParameters: GetAppsRequest): Promise<RespAppArray> {
        const response = await this.getAppsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve details for applications. Use query parameters to specify search conditions. For example ?owner.eq=jdoe&port.gt=1024
     * Retrieve applications matching search conditions specified as query parameters.
     */
    async searchAppsQueryParametersRaw(requestParameters: SearchAppsQueryParametersRequest): Promise<runtime.ApiResponse<RespAppArray>> {
        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/apps/search/apps`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespAppArrayFromJSON(jsonValue));
    }

    /**
     * Retrieve details for applications. Use query parameters to specify search conditions. For example ?owner.eq=jdoe&port.gt=1024
     * Retrieve applications matching search conditions specified as query parameters.
     */
    async searchAppsQueryParameters(requestParameters: SearchAppsQueryParametersRequest): Promise<RespAppArray> {
        const response = await this.searchAppsQueryParametersRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve details for applications. Use request body to specify SQL-like search conditions.
     * Retrieve applications matching search conditions.
     */
    async searchAppsRequestBodyRaw(requestParameters: SearchAppsRequestBodyRequest): Promise<runtime.ApiResponse<RespAppArray>> {
        if (requestParameters.reqSearchApps === null || requestParameters.reqSearchApps === undefined) {
            throw new runtime.RequiredError('reqSearchApps','Required parameter requestParameters.reqSearchApps was null or undefined when calling searchAppsRequestBody.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/apps/search/apps`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqSearchAppsToJSON(requestParameters.reqSearchApps),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespAppArrayFromJSON(jsonValue));
    }

    /**
     * Retrieve details for applications. Use request body to specify SQL-like search conditions.
     * Retrieve applications matching search conditions.
     */
    async searchAppsRequestBody(requestParameters: SearchAppsRequestBodyRequest): Promise<RespAppArray> {
        const response = await this.searchAppsRequestBodyRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update existing version of an application. Attributes that may be updated are description, enabled, TBD, tags, notes.
     * Update an existing version of an application
     */
    async updateAppRaw(requestParameters: UpdateAppRequest): Promise<runtime.ApiResponse<RespResourceUrl>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling updateApp.');
        }

        if (requestParameters.appVersion === null || requestParameters.appVersion === undefined) {
            throw new runtime.RequiredError('appVersion','Required parameter requestParameters.appVersion was null or undefined when calling updateApp.');
        }

        if (requestParameters.reqUpdateApp === null || requestParameters.reqUpdateApp === undefined) {
            throw new runtime.RequiredError('reqUpdateApp','Required parameter requestParameters.reqUpdateApp was null or undefined when calling updateApp.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/apps/{appId}/{appVersion}`.replace(`{${"appId"}}`, encodeURIComponent(String(requestParameters.appId))).replace(`{${"appVersion"}}`, encodeURIComponent(String(requestParameters.appVersion))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ReqUpdateAppToJSON(requestParameters.reqUpdateApp),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespResourceUrlFromJSON(jsonValue));
    }

    /**
     * Update existing version of an application. Attributes that may be updated are description, enabled, TBD, tags, notes.
     * Update an existing version of an application
     */
    async updateApp(requestParameters: UpdateAppRequest): Promise<RespResourceUrl> {
        const response = await this.updateAppRaw(requestParameters);
        return await response.value();
    }

}