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
    ReqCIPipeline,
    ReqCIPipelineFromJSON,
    ReqCIPipelineToJSON,
    RespError,
    RespErrorFromJSON,
    RespErrorToJSON,
    RespResourceURL,
    RespResourceURLFromJSON,
    RespResourceURLToJSON,
} from '../models';

export interface CreateCIPipelineRequest {
    groupId: string;
    reqCIPipeline: ReqCIPipeline;
}

/**
 * 
 */
export class CICDApi extends runtime.BaseAPI {

    /**
     * Create a CI/CD pipeline using a request body. Pipeline id must be unique within a group and can be composed of alphanumeric characters and the following special characters [-_.].  Note: When creating pipelines for the CI/CD use case(primarily building images), use this endpoint. It offers a simplified interface for those who want to avoid the complexities of creating a standard workflow. This pipeline\'s tasks may be modified later. 
     * Create a CI/CD pipeline
     */
    async createCIPipelineRaw(requestParameters: CreateCIPipelineRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespResourceURL>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling createCIPipeline.');
        }

        if (requestParameters.reqCIPipeline === null || requestParameters.reqCIPipeline === undefined) {
            throw new runtime.RequiredError('reqCIPipeline','Required parameter requestParameters.reqCIPipeline was null or undefined when calling createCIPipeline.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/groups/{group_id}/ci`.replace(`{${"group_id"}}`, encodeURIComponent(String(requestParameters.groupId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCIPipelineToJSON(requestParameters.reqCIPipeline),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespResourceURLFromJSON(jsonValue));
    }

    /**
     * Create a CI/CD pipeline using a request body. Pipeline id must be unique within a group and can be composed of alphanumeric characters and the following special characters [-_.].  Note: When creating pipelines for the CI/CD use case(primarily building images), use this endpoint. It offers a simplified interface for those who want to avoid the complexities of creating a standard workflow. This pipeline\'s tasks may be modified later. 
     * Create a CI/CD pipeline
     */
    async createCIPipeline(requestParameters: CreateCIPipelineRequest, initOverrides?: RequestInit): Promise<RespResourceURL> {
        const response = await this.createCIPipelineRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
