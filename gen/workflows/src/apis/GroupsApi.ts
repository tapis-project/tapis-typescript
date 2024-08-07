/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.6.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ReqGroup,
    ReqGroupFromJSON,
    ReqGroupToJSON,
    RespError,
    RespErrorFromJSON,
    RespErrorToJSON,
    RespGroupDetail,
    RespGroupDetailFromJSON,
    RespGroupDetailToJSON,
    RespGroupList,
    RespGroupListFromJSON,
    RespGroupListToJSON,
    RespResourceURL,
    RespResourceURLFromJSON,
    RespResourceURLToJSON,
    RespString,
    RespStringFromJSON,
    RespStringToJSON,
} from '../models';

export interface CreateGroupRequest {
    reqGroup: ReqGroup;
}

export interface DeleteGroupRequest {
    groupId: string;
}

export interface GetGroupRequest {
    groupId: string;
}

/**
 * 
 */
export class GroupsApi extends runtime.BaseAPI {

    /**
     * Create a group that perform CRUD operations on workflow resources.  The owner of the group will be made an admin by default. If you want to set other users as admins, you must use the \'\' endpoint. 
     * Create a group
     */
    async createGroupRaw(requestParameters: CreateGroupRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespResourceURL>> {
        if (requestParameters.reqGroup === null || requestParameters.reqGroup === undefined) {
            throw new runtime.RequiredError('reqGroup','Required parameter requestParameters.reqGroup was null or undefined when calling createGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/groups`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqGroupToJSON(requestParameters.reqGroup),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespResourceURLFromJSON(jsonValue));
    }

    /**
     * Create a group that perform CRUD operations on workflow resources.  The owner of the group will be made an admin by default. If you want to set other users as admins, you must use the \'\' endpoint. 
     * Create a group
     */
    async createGroup(requestParameters: CreateGroupRequest, initOverrides?: RequestInit): Promise<RespResourceURL> {
        const response = await this.createGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a group and all of the objects that belong to them
     * Delete a group
     */
    async deleteGroupRaw(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespString>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling deleteGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/groups/{group_id}`.replace(`{${"group_id"}}`, encodeURIComponent(String(requestParameters.groupId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespStringFromJSON(jsonValue));
    }

    /**
     * Delete a group and all of the objects that belong to them
     * Delete a group
     */
    async deleteGroup(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit): Promise<RespString> {
        const response = await this.deleteGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve details for a given group id 
     * Retrieve group details
     */
    async getGroupRaw(requestParameters: GetGroupRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespGroupDetail>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling getGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/groups/{group_id}`.replace(`{${"group_id"}}`, encodeURIComponent(String(requestParameters.groupId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespGroupDetailFromJSON(jsonValue));
    }

    /**
     * Retrieve details for a given group id 
     * Retrieve group details
     */
    async getGroup(requestParameters: GetGroupRequest, initOverrides?: RequestInit): Promise<RespGroupDetail> {
        const response = await this.getGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve all groups to which the user belongs 
     * Retrieve groups
     */
    async listGroupsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespGroupList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/groups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespGroupListFromJSON(jsonValue));
    }

    /**
     * Retrieve all groups to which the user belongs 
     * Retrieve groups
     */
    async listGroups(initOverrides?: RequestInit): Promise<RespGroupList> {
        const response = await this.listGroupsRaw(initOverrides);
        return await response.value();
    }

}
