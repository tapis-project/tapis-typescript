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
    ActorPermission,
    ActorPermissionFromJSON,
    ActorPermissionToJSON,
    RespListPermissions,
    RespListPermissionsFromJSON,
    RespListPermissionsToJSON,
    RespUpdatePermissions,
    RespUpdatePermissionsFromJSON,
    RespUpdatePermissionsToJSON,
} from '../models';

export interface ListPermissionsRequest {
    actorId: string;
}

export interface UpdatePermissionsRequest {
    actorId: string;
    actorPermission: ActorPermission;
}

/**
 * 
 */
export class PermissionsApi extends runtime.BaseAPI {

    /**
     * List permissions for an actor.
     * listPermissions
     */
    async listPermissionsRaw(requestParameters: ListPermissionsRequest): Promise<runtime.ApiResponse<RespListPermissions>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling listPermissions.');
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
            path: `/v3/actors/{actor_id}/permissions`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespListPermissionsFromJSON(jsonValue));
    }

    /**
     * List permissions for an actor.
     * listPermissions
     */
    async listPermissions(requestParameters: ListPermissionsRequest): Promise<RespListPermissions> {
        const response = await this.listPermissionsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Add or update permissions for an actor.
     * updatePermissions
     */
    async updatePermissionsRaw(requestParameters: UpdatePermissionsRequest): Promise<runtime.ApiResponse<RespUpdatePermissions>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling updatePermissions.');
        }

        if (requestParameters.actorPermission === null || requestParameters.actorPermission === undefined) {
            throw new runtime.RequiredError('actorPermission','Required parameter requestParameters.actorPermission was null or undefined when calling updatePermissions.');
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
            path: `/v3/actors/{actor_id}/permissions`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ActorPermissionToJSON(requestParameters.actorPermission),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespUpdatePermissionsFromJSON(jsonValue));
    }

    /**
     * Add or update permissions for an actor.
     * updatePermissions
     */
    async updatePermissions(requestParameters: UpdatePermissionsRequest): Promise<RespUpdatePermissions> {
        const response = await this.updatePermissionsRaw(requestParameters);
        return await response.value();
    }

}
