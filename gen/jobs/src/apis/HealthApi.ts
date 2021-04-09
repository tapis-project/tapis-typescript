/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Jobs API
 * The Tapis Jobs API executes jobs on Tapis systems.
 *
 * The version of the OpenAPI document: 0.1
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
    RespProbe,
    RespProbeFromJSON,
    RespProbeToJSON,
} from '../models';

export interface SayHelloRequest {
    pretty?: boolean;
}

/**
 * 
 */
export class HealthApi extends runtime.BaseAPI {

    /**
     * Lightwieght health check for liveness. No authorization required.
     */
    async checkHealthRaw(): Promise<runtime.ApiResponse<RespProbe>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/jobs/healthcheck`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespProbeFromJSON(jsonValue));
    }

    /**
     * Lightwieght health check for liveness. No authorization required.
     */
    async checkHealth(): Promise<RespProbe> {
        const response = await this.checkHealthRaw();
        return await response.value();
    }

    /**
     * Lightwieght readiness check. No authorization required.
     */
    async readyRaw(): Promise<runtime.ApiResponse<RespProbe>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/jobs/ready`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespProbeFromJSON(jsonValue));
    }

    /**
     * Lightwieght readiness check. No authorization required.
     */
    async ready(): Promise<RespProbe> {
        const response = await this.readyRaw();
        return await response.value();
    }

    /**
     * Logged connectivity test. No authorization required.
     */
    async sayHelloRaw(requestParameters: SayHelloRequest): Promise<runtime.ApiResponse<RespBasic>> {
        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/jobs/hello`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Logged connectivity test. No authorization required.
     */
    async sayHello(requestParameters: SayHelloRequest): Promise<RespBasic> {
        const response = await this.sayHelloRaw(requestParameters);
        return await response.value();
    }

}