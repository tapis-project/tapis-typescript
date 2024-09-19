/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions, credentials and Scheduler Profiles.
 *
 * The version of the OpenAPI document: 1.6.3
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ReqPostSchedulerProfile,
    ReqPostSchedulerProfileFromJSON,
    ReqPostSchedulerProfileToJSON,
    RespBasic,
    RespBasicFromJSON,
    RespBasicToJSON,
    RespChangeCount,
    RespChangeCountFromJSON,
    RespChangeCountToJSON,
    RespResourceUrl,
    RespResourceUrlFromJSON,
    RespResourceUrlToJSON,
    RespSchedulerProfile,
    RespSchedulerProfileFromJSON,
    RespSchedulerProfileToJSON,
    RespSchedulerProfiles,
    RespSchedulerProfilesFromJSON,
    RespSchedulerProfilesToJSON,
} from '../models';

export interface CreateSchedulerProfileRequest {
    reqPostSchedulerProfile: ReqPostSchedulerProfile;
}

export interface DeleteSchedulerProfileRequest {
    name: string;
}

export interface GetSchedulerProfileRequest {
    name: string;
}

/**
 * 
 */
export class SchedulerProfilesApi extends runtime.BaseAPI {

    /**
     * Create a scheduler profile using a request body. Name must be unique within a tenant and can be composed of alphanumeric characters and the following special characters [-._~]. Name must begin with an alphabetic character and can be no more than 80 characters in length. Description is optional with a maximum length of 2048 characters.  Note that certain attributes (such as *tenant*) are allowed but ignored so that the JSON result returned by a GET may be modified and used when making a POST request to create a profile. The attributes that are allowed but ignored are    - tenant   - uuid   - created   - updated 
     */
    async createSchedulerProfileRaw(requestParameters: CreateSchedulerProfileRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespResourceUrl>> {
        if (requestParameters.reqPostSchedulerProfile === null || requestParameters.reqPostSchedulerProfile === undefined) {
            throw new runtime.RequiredError('reqPostSchedulerProfile','Required parameter requestParameters.reqPostSchedulerProfile was null or undefined when calling createSchedulerProfile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/schedulerProfile`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqPostSchedulerProfileToJSON(requestParameters.reqPostSchedulerProfile),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespResourceUrlFromJSON(jsonValue));
    }

    /**
     * Create a scheduler profile using a request body. Name must be unique within a tenant and can be composed of alphanumeric characters and the following special characters [-._~]. Name must begin with an alphabetic character and can be no more than 80 characters in length. Description is optional with a maximum length of 2048 characters.  Note that certain attributes (such as *tenant*) are allowed but ignored so that the JSON result returned by a GET may be modified and used when making a POST request to create a profile. The attributes that are allowed but ignored are    - tenant   - uuid   - created   - updated 
     */
    async createSchedulerProfile(requestParameters: CreateSchedulerProfileRequest, initOverrides?: RequestInit): Promise<RespResourceUrl> {
        const response = await this.createSchedulerProfileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove a scheduler profile given the profile name. Requester must be owner of the profile. 
     */
    async deleteSchedulerProfileRaw(requestParameters: DeleteSchedulerProfileRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespChangeCount>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteSchedulerProfile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/schedulerProfile/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespChangeCountFromJSON(jsonValue));
    }

    /**
     * Remove a scheduler profile given the profile name. Requester must be owner of the profile. 
     */
    async deleteSchedulerProfile(requestParameters: DeleteSchedulerProfileRequest, initOverrides?: RequestInit): Promise<RespChangeCount> {
        const response = await this.deleteSchedulerProfileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve information for a scheduler profile given the profile name. 
     */
    async getSchedulerProfileRaw(requestParameters: GetSchedulerProfileRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespSchedulerProfile>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getSchedulerProfile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/schedulerProfile/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespSchedulerProfileFromJSON(jsonValue));
    }

    /**
     * Retrieve information for a scheduler profile given the profile name. 
     */
    async getSchedulerProfile(requestParameters: GetSchedulerProfileRequest, initOverrides?: RequestInit): Promise<RespSchedulerProfile> {
        const response = await this.getSchedulerProfileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve list of scheduler profiles.
     */
    async getSchedulerProfilesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespSchedulerProfiles>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/schedulerProfile`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespSchedulerProfilesFromJSON(jsonValue));
    }

    /**
     * Retrieve list of scheduler profiles.
     */
    async getSchedulerProfiles(initOverrides?: RequestInit): Promise<RespSchedulerProfiles> {
        const response = await this.getSchedulerProfilesRaw(initOverrides);
        return await response.value();
    }

}
