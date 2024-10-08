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
    ReqCreateSecret,
    ReqCreateSecretFromJSON,
    ReqCreateSecretToJSON,
    RespError,
    RespErrorFromJSON,
    RespErrorToJSON,
    RespSecret,
    RespSecretFromJSON,
    RespSecretToJSON,
    RespSecretList,
    RespSecretListFromJSON,
    RespSecretListToJSON,
    RespString,
    RespStringFromJSON,
    RespStringToJSON,
} from '../models';

export interface CreateSecretRequest {
    reqCreateSecret: ReqCreateSecret;
}

export interface DeleteSecretRequest {
    secretId: string;
}

export interface GetSecretRequest {
    secretId: string;
}

/**
 * 
 */
export class SecretsApi extends runtime.BaseAPI {

    /**
     * Create a secret. 
     * Create a secret
     */
    async createSecretRaw(requestParameters: CreateSecretRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespSecret>> {
        if (requestParameters.reqCreateSecret === null || requestParameters.reqCreateSecret === undefined) {
            throw new runtime.RequiredError('reqCreateSecret','Required parameter requestParameters.reqCreateSecret was null or undefined when calling createSecret.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/secrets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateSecretToJSON(requestParameters.reqCreateSecret),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespSecretFromJSON(jsonValue));
    }

    /**
     * Create a secret. 
     * Create a secret
     */
    async createSecret(requestParameters: CreateSecretRequest, initOverrides?: RequestInit): Promise<RespSecret> {
        const response = await this.createSecretRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a secret and all of the objects that belong to them
     * Delete a secret
     */
    async deleteSecretRaw(requestParameters: DeleteSecretRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespString>> {
        if (requestParameters.secretId === null || requestParameters.secretId === undefined) {
            throw new runtime.RequiredError('secretId','Required parameter requestParameters.secretId was null or undefined when calling deleteSecret.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/secrets/{secret_id}`.replace(`{${"secret_id"}}`, encodeURIComponent(String(requestParameters.secretId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespStringFromJSON(jsonValue));
    }

    /**
     * Delete a secret and all of the objects that belong to them
     * Delete a secret
     */
    async deleteSecret(requestParameters: DeleteSecretRequest, initOverrides?: RequestInit): Promise<RespString> {
        const response = await this.deleteSecretRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a secret 
     * Retrieve a secret
     */
    async getSecretRaw(requestParameters: GetSecretRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespSecret>> {
        if (requestParameters.secretId === null || requestParameters.secretId === undefined) {
            throw new runtime.RequiredError('secretId','Required parameter requestParameters.secretId was null or undefined when calling getSecret.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/secrets/{secret_id}`.replace(`{${"secret_id"}}`, encodeURIComponent(String(requestParameters.secretId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespSecretFromJSON(jsonValue));
    }

    /**
     * Retrieve a secret 
     * Retrieve a secret
     */
    async getSecret(requestParameters: GetSecretRequest, initOverrides?: RequestInit): Promise<RespSecret> {
        const response = await this.getSecretRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve all secrets for a user 
     * Retrieve secrets
     */
    async listSecretsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespSecretList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/secrets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespSecretListFromJSON(jsonValue));
    }

    /**
     * Retrieve all secrets for a user 
     * Retrieve secrets
     */
    async listSecrets(initOverrides?: RequestInit): Promise<RespSecretList> {
        const response = await this.listSecretsRaw(initOverrides);
        return await response.value();
    }

}
