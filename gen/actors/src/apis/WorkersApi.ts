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
    ActorWorkerResponse,
    ActorWorkerResponseFromJSON,
    ActorWorkerResponseToJSON,
    InlineObject,
    InlineObjectFromJSON,
    InlineObjectToJSON,
    RespManageWorkerPoolSize,
    RespManageWorkerPoolSizeFromJSON,
    RespManageWorkerPoolSizeToJSON,
} from '../models';

export interface ListWorkersRequest {
    actorId: string;
}

export interface ManageWorkerPoolSizeRequest {
    actorId: string;
    inlineObject: InlineObject;
}

/**
 * 
 */
export class WorkersApi extends runtime.BaseAPI {

    /**
     * List workers for an actor.
     * list_workers
     */
    async listWorkersRaw(requestParameters: ListWorkersRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ActorWorkerResponse>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling listWorkers.');
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
            path: `/v3/actors/{actor_id}/workers`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ActorWorkerResponseFromJSON(jsonValue));
    }

    /**
     * List workers for an actor.
     * list_workers
     */
    async listWorkers(requestParameters: ListWorkersRequest, initOverrides?: RequestInit): Promise<ActorWorkerResponse> {
        const response = await this.listWorkersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Manage number of workers in actor\'s worker pool. Pool size will not decrease as a result of this action.
     * manage_worker_pool_size
     */
    async manageWorkerPoolSizeRaw(requestParameters: ManageWorkerPoolSizeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespManageWorkerPoolSize>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling manageWorkerPoolSize.');
        }

        if (requestParameters.inlineObject === null || requestParameters.inlineObject === undefined) {
            throw new runtime.RequiredError('inlineObject','Required parameter requestParameters.inlineObject was null or undefined when calling manageWorkerPoolSize.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x-nonce"] = this.configuration.apiKey("x-nonce"); // nonce authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-JWT-Assertion-DEV"] = this.configuration.apiKey("X-JWT-Assertion-DEV"); // wso2jwtDevAuth authentication
        }

        const response = await this.request({
            path: `/v3/actors/{actor_id}/workers`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObjectToJSON(requestParameters.inlineObject),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespManageWorkerPoolSizeFromJSON(jsonValue));
    }

    /**
     * Manage number of workers in actor\'s worker pool. Pool size will not decrease as a result of this action.
     * manage_worker_pool_size
     */
    async manageWorkerPoolSize(requestParameters: ManageWorkerPoolSizeRequest, initOverrides?: RequestInit): Promise<RespManageWorkerPoolSize> {
        const response = await this.manageWorkerPoolSizeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
