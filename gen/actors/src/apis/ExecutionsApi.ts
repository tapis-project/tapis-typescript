/* tslint:disable */
/* eslint-disable */
/**
 * Abaco API
 * Abaco (Actor Based Containers) is an API and distributed computing platform funded by the National Science Foundation to provide Functions-as-a-service to the research computing community. Abaco leverages Docker containers and the Actor Model of Concurrent Computation to provide generic function primitives that are portable, composable and scalable.
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
    RespGetExecution,
    RespGetExecutionFromJSON,
    RespGetExecutionToJSON,
    RespGetExecutionLogs,
    RespGetExecutionLogsFromJSON,
    RespGetExecutionLogsToJSON,
    RespListExecutions,
    RespListExecutionsFromJSON,
    RespListExecutionsToJSON,
} from '../models';

export interface GetExecutionRequest {
    actorId: string;
    executionId: string;
}

export interface GetExecutionLogsRequest {
    actorId: string;
    executionId: string;
}

export interface GetExecutionResultRequest {
    actorId: string;
    executionId: string;
}

export interface ListExecutionsRequest {
    actorId: string;
}

/**
 * 
 */
export class ExecutionsApi extends runtime.BaseAPI {

    /**
     * Get details about an execution.
     * getExecution
     */
    async getExecutionRaw(requestParameters: GetExecutionRequest): Promise<runtime.ApiResponse<RespGetExecution>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling getExecution.');
        }

        if (requestParameters.executionId === null || requestParameters.executionId === undefined) {
            throw new runtime.RequiredError('executionId','Required parameter requestParameters.executionId was null or undefined when calling getExecution.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x-nonce"] = this.configuration.apiKey("x-nonce"); // nonce authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-JWT-Assertion-DEV"] = this.configuration.apiKey("X-JWT-Assertion-DEV"); // wso2jwtDevAuth authentication
        }

        const response = await this.request({
            path: `/v3/actors/{actor_id}/executions/{execution_id}`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))).replace(`{${"execution_id"}}`, encodeURIComponent(String(requestParameters.executionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespGetExecutionFromJSON(jsonValue));
    }

    /**
     * Get details about an execution.
     * getExecution
     */
    async getExecution(requestParameters: GetExecutionRequest): Promise<RespGetExecution> {
        const response = await this.getExecutionRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get an execution\'s logs.
     * getExecutionLogs
     */
    async getExecutionLogsRaw(requestParameters: GetExecutionLogsRequest): Promise<runtime.ApiResponse<RespGetExecutionLogs>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling getExecutionLogs.');
        }

        if (requestParameters.executionId === null || requestParameters.executionId === undefined) {
            throw new runtime.RequiredError('executionId','Required parameter requestParameters.executionId was null or undefined when calling getExecutionLogs.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x-nonce"] = this.configuration.apiKey("x-nonce"); // nonce authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-JWT-Assertion-DEV"] = this.configuration.apiKey("X-JWT-Assertion-DEV"); // wso2jwtDevAuth authentication
        }

        const response = await this.request({
            path: `/v3/actors/{actor_id}/executions/{execution_id}/logs`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))).replace(`{${"execution_id"}}`, encodeURIComponent(String(requestParameters.executionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespGetExecutionLogsFromJSON(jsonValue));
    }

    /**
     * Get an execution\'s logs.
     * getExecutionLogs
     */
    async getExecutionLogs(requestParameters: GetExecutionLogsRequest): Promise<RespGetExecutionLogs> {
        const response = await this.getExecutionLogsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get an execution\'s result.
     * Get an execution\'s result.
     */
    async getExecutionResultRaw(requestParameters: GetExecutionResultRequest): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling getExecutionResult.');
        }

        if (requestParameters.executionId === null || requestParameters.executionId === undefined) {
            throw new runtime.RequiredError('executionId','Required parameter requestParameters.executionId was null or undefined when calling getExecutionResult.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x-nonce"] = this.configuration.apiKey("x-nonce"); // nonce authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-JWT-Assertion-DEV"] = this.configuration.apiKey("X-JWT-Assertion-DEV"); // wso2jwtDevAuth authentication
        }

        const response = await this.request({
            path: `/v3/actors/{actor_id}/executions/{execution_id}/results`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))).replace(`{${"execution_id"}}`, encodeURIComponent(String(requestParameters.executionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Get an execution\'s result.
     * Get an execution\'s result.
     */
    async getExecutionResult(requestParameters: GetExecutionResultRequest): Promise<Blob> {
        const response = await this.getExecutionResultRaw(requestParameters);
        return await response.value();
    }

    /**
     * List executions for an actor.
     * listExecutions
     */
    async listExecutionsRaw(requestParameters: ListExecutionsRequest): Promise<runtime.ApiResponse<RespListExecutions>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling listExecutions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x-nonce"] = this.configuration.apiKey("x-nonce"); // nonce authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-JWT-Assertion-DEV"] = this.configuration.apiKey("X-JWT-Assertion-DEV"); // wso2jwtDevAuth authentication
        }

        const response = await this.request({
            path: `/v3/actors/{actor_id}/executions`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespListExecutionsFromJSON(jsonValue));
    }

    /**
     * List executions for an actor.
     * listExecutions
     */
    async listExecutions(requestParameters: ListExecutionsRequest): Promise<RespListExecutions> {
        const response = await this.listExecutionsRaw(requestParameters);
        return await response.value();
    }

}
