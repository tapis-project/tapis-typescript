/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 1.6.2
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ReqPerms,
    ReqPermsFromJSON,
    ReqPermsToJSON,
    RespBasic,
    RespBasicFromJSON,
    RespBasicToJSON,
    RespNameArray,
    RespNameArrayFromJSON,
    RespNameArrayToJSON,
} from '../models';

export interface GetUserPermsRequest {
    appId: string;
    userName: string;
}

export interface GrantUserPermsRequest {
    appId: string;
    userName: string;
    reqPerms: ReqPerms;
}

export interface RevokeUserPermRequest {
    appId: string;
    userName: string;
    permission: string;
}

export interface RevokeUserPermsRequest {
    appId: string;
    userName: string;
    reqPerms: ReqPerms;
}

/**
 * 
 */
export class PermissionsApi extends runtime.BaseAPI {

    /**
     * Retrieve all application related permissions for a given application and user. 
     */
    async getUserPermsRaw(requestParameters: GetUserPermsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespNameArray>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling getUserPerms.');
        }

        if (requestParameters.userName === null || requestParameters.userName === undefined) {
            throw new runtime.RequiredError('userName','Required parameter requestParameters.userName was null or undefined when calling getUserPerms.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/apps/perms/{appId}/user/{userName}`.replace(`{${"appId"}}`, encodeURIComponent(String(requestParameters.appId))).replace(`{${"userName"}}`, encodeURIComponent(String(requestParameters.userName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespNameArrayFromJSON(jsonValue));
    }

    /**
     * Retrieve all application related permissions for a given application and user. 
     */
    async getUserPerms(requestParameters: GetUserPermsRequest, initOverrides?: RequestInit): Promise<RespNameArray> {
        const response = await this.getUserPermsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create permissions in the Security Kernel for a user. Requester must be owner. Permissions are READ, MODIFY, EXECUTE. 
     */
    async grantUserPermsRaw(requestParameters: GrantUserPermsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespBasic>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling grantUserPerms.');
        }

        if (requestParameters.userName === null || requestParameters.userName === undefined) {
            throw new runtime.RequiredError('userName','Required parameter requestParameters.userName was null or undefined when calling grantUserPerms.');
        }

        if (requestParameters.reqPerms === null || requestParameters.reqPerms === undefined) {
            throw new runtime.RequiredError('reqPerms','Required parameter requestParameters.reqPerms was null or undefined when calling grantUserPerms.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/apps/perms/{appId}/user/{userName}`.replace(`{${"appId"}}`, encodeURIComponent(String(requestParameters.appId))).replace(`{${"userName"}}`, encodeURIComponent(String(requestParameters.userName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqPermsToJSON(requestParameters.reqPerms),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Create permissions in the Security Kernel for a user. Requester must be owner. Permissions are READ, MODIFY, EXECUTE. 
     */
    async grantUserPerms(requestParameters: GrantUserPermsRequest, initOverrides?: RequestInit): Promise<RespBasic> {
        const response = await this.grantUserPermsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove user permission from the Security Kernel. Requester must be owner. Permissions are READ, MODIFY, EXECUTE. 
     */
    async revokeUserPermRaw(requestParameters: RevokeUserPermRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespBasic>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling revokeUserPerm.');
        }

        if (requestParameters.userName === null || requestParameters.userName === undefined) {
            throw new runtime.RequiredError('userName','Required parameter requestParameters.userName was null or undefined when calling revokeUserPerm.');
        }

        if (requestParameters.permission === null || requestParameters.permission === undefined) {
            throw new runtime.RequiredError('permission','Required parameter requestParameters.permission was null or undefined when calling revokeUserPerm.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/apps/perms/{appId}/user/{userName}/{permission}`.replace(`{${"appId"}}`, encodeURIComponent(String(requestParameters.appId))).replace(`{${"userName"}}`, encodeURIComponent(String(requestParameters.userName))).replace(`{${"permission"}}`, encodeURIComponent(String(requestParameters.permission))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Remove user permission from the Security Kernel. Requester must be owner. Permissions are READ, MODIFY, EXECUTE. 
     */
    async revokeUserPerm(requestParameters: RevokeUserPermRequest, initOverrides?: RequestInit): Promise<RespBasic> {
        const response = await this.revokeUserPermRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove permissions from the Security Kernel for a user. Requester must be owner. Permissions are READ, MODIFY, EXECUTE. 
     */
    async revokeUserPermsRaw(requestParameters: RevokeUserPermsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespBasic>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling revokeUserPerms.');
        }

        if (requestParameters.userName === null || requestParameters.userName === undefined) {
            throw new runtime.RequiredError('userName','Required parameter requestParameters.userName was null or undefined when calling revokeUserPerms.');
        }

        if (requestParameters.reqPerms === null || requestParameters.reqPerms === undefined) {
            throw new runtime.RequiredError('reqPerms','Required parameter requestParameters.reqPerms was null or undefined when calling revokeUserPerms.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/apps/perms/{appId}/user/{userName}/revoke`.replace(`{${"appId"}}`, encodeURIComponent(String(requestParameters.appId))).replace(`{${"userName"}}`, encodeURIComponent(String(requestParameters.userName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqPermsToJSON(requestParameters.reqPerms),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Remove permissions from the Security Kernel for a user. Requester must be owner. Permissions are READ, MODIFY, EXECUTE. 
     */
    async revokeUserPerms(requestParameters: RevokeUserPermsRequest, initOverrides?: RequestInit): Promise<RespBasic> {
        const response = await this.revokeUserPermsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
