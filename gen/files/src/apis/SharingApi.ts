/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Files API
 * The Tapis Files API provides for management of file resources on Tapis systems
 *
 * The version of the OpenAPI document: 1.3.6
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ReqShareUpdate,
    ReqShareUpdateFromJSON,
    ReqShareUpdateToJSON,
    RespBasic,
    RespBasicFromJSON,
    RespBasicToJSON,
    RespShareInfo,
    RespShareInfoFromJSON,
    RespShareInfoToJSON,
} from '../models';

export interface GetShareInfoRequest {
    systemId: string;
    path: string;
}

export interface SharePathRequest {
    systemId: string;
    path: string;
    reqShareUpdate: ReqShareUpdate;
}

export interface SharePathPublicRequest {
    systemId: string;
    path: string;
}

export interface UnSharePathRequest {
    systemId: string;
    path: string;
    reqShareUpdate: ReqShareUpdate;
}

export interface UnSharePathAllRequest {
    systemId: string;
    path: string;
    recurse?: boolean;
}

export interface UnSharePathPublicRequest {
    systemId: string;
    path: string;
}

/**
 * 
 */
export class SharingApi extends runtime.BaseAPI {

    /**
     * Retrieve all sharing information for a path on a system. This includes all users with whom the path has been shared and whether or not the path has been made publicly available. 
     * Retrieve all sharing information for a path on a system
     */
    async getShareInfoRaw(requestParameters: GetShareInfoRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespShareInfo>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling getShareInfo.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling getShareInfo.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/files/share/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespShareInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve all sharing information for a path on a system. This includes all users with whom the path has been shared and whether or not the path has been made publicly available. 
     * Retrieve all sharing information for a path on a system
     */
    async getShareInfo(requestParameters: GetShareInfoRequest, initOverrides?: RequestInit): Promise<RespShareInfo> {
        const response = await this.getShareInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create or update sharing information for a path on a system. The path will be shared with the list of users provided in the request body. Requester must be owner of the system. For LINUX systems path sharing is hierarchical. 
     * Share a path on a system with one or more users.
     */
    async sharePathRaw(requestParameters: SharePathRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespBasic>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling sharePath.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling sharePath.');
        }

        if (requestParameters.reqShareUpdate === null || requestParameters.reqShareUpdate === undefined) {
            throw new runtime.RequiredError('reqShareUpdate','Required parameter requestParameters.reqShareUpdate was null or undefined when calling sharePath.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/files/share/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqShareUpdateToJSON(requestParameters.reqShareUpdate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Create or update sharing information for a path on a system. The path will be shared with the list of users provided in the request body. Requester must be owner of the system. For LINUX systems path sharing is hierarchical. 
     * Share a path on a system with one or more users.
     */
    async sharePath(requestParameters: SharePathRequest, initOverrides?: RequestInit): Promise<RespBasic> {
        const response = await this.sharePathRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Share a path on a system with all users in the tenant. Requester must be owner of the system. 
     * Share a path on a system publicly with all users in the tenant.
     */
    async sharePathPublicRaw(requestParameters: SharePathPublicRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespBasic>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling sharePathPublic.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling sharePathPublic.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/files/share_public/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Share a path on a system with all users in the tenant. Requester must be owner of the system. 
     * Share a path on a system publicly with all users in the tenant.
     */
    async sharePathPublic(requestParameters: SharePathPublicRequest, initOverrides?: RequestInit): Promise<RespBasic> {
        const response = await this.sharePathPublicRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create or update sharing information for a path on a system. The path will be unshared with the list of users provided in the request body. Requester must be owner of the system. 
     * Unshare a path on a system with one or more users.
     */
    async unSharePathRaw(requestParameters: UnSharePathRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespBasic>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling unSharePath.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling unSharePath.');
        }

        if (requestParameters.reqShareUpdate === null || requestParameters.reqShareUpdate === undefined) {
            throw new runtime.RequiredError('reqShareUpdate','Required parameter requestParameters.reqShareUpdate was null or undefined when calling unSharePath.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/files/unshare/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqShareUpdateToJSON(requestParameters.reqShareUpdate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Create or update sharing information for a path on a system. The path will be unshared with the list of users provided in the request body. Requester must be owner of the system. 
     * Unshare a path on a system with one or more users.
     */
    async unSharePath(requestParameters: UnSharePathRequest, initOverrides?: RequestInit): Promise<RespBasic> {
        const response = await this.unSharePathRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove all shares for a path on a system including public access. This will also be done for all sub-paths. 
     * Remove all shares for a path on a system including public access.
     */
    async unSharePathAllRaw(requestParameters: UnSharePathAllRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespBasic>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling unSharePathAll.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling unSharePathAll.');
        }

        const queryParameters: any = {};

        if (requestParameters.recurse !== undefined) {
            queryParameters['recurse'] = requestParameters.recurse;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/files/unshare_all/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Remove all shares for a path on a system including public access. This will also be done for all sub-paths. 
     * Remove all shares for a path on a system including public access.
     */
    async unSharePathAll(requestParameters: UnSharePathAllRequest, initOverrides?: RequestInit): Promise<RespBasic> {
        const response = await this.unSharePathAllRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove public sharing for a path on a system. Requester must be owner of the system. 
     * Remove public access for a path on a system.
     */
    async unSharePathPublicRaw(requestParameters: UnSharePathPublicRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespBasic>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling unSharePathPublic.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling unSharePathPublic.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/files/unshare_public/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Remove public sharing for a path on a system. Requester must be owner of the system. 
     * Remove public access for a path on a system.
     */
    async unSharePathPublic(requestParameters: UnSharePathPublicRequest, initOverrides?: RequestInit): Promise<RespBasic> {
        const response = await this.unSharePathPublicRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
