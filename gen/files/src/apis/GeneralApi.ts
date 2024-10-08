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
    RespBasic,
    RespBasicFromJSON,
    RespBasicToJSON,
} from '../models';

/**
 * 
 */
export class GeneralApi extends runtime.BaseAPI {

    /**
     * Health check
     */
    async healthCheckRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespBasic>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/files/healthcheck`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Health check
     */
    async healthCheck(initOverrides?: RequestInit): Promise<RespBasic> {
        const response = await this.healthCheckRaw(initOverrides);
        return await response.value();
    }

    /**
     * Ready check
     */
    async readyCheckRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespBasic>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/files/readycheck`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Ready check
     */
    async readyCheck(initOverrides?: RequestInit): Promise<RespBasic> {
        const response = await this.readyCheckRaw(initOverrides);
        return await response.value();
    }

}
