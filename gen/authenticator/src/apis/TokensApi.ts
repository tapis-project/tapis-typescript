/* tslint:disable */
/* eslint-disable */
/**
 * Authenticator
 * REST API and web server providing authentication for a Tapis v3 instance.
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
    NewDeviceCode,
    NewDeviceCodeFromJSON,
    NewDeviceCodeToJSON,
    ReqCreateToken,
    ReqCreateTokenFromJSON,
    ReqCreateTokenToJSON,
    RespCreateToken,
    RespCreateTokenFromJSON,
    RespCreateTokenToJSON,
    RespCreateV2Token,
    RespCreateV2TokenFromJSON,
    RespCreateV2TokenToJSON,
    RespGenerateDeviceCode,
    RespGenerateDeviceCodeFromJSON,
    RespGenerateDeviceCodeToJSON,
    RespRevokeToken,
    RespRevokeTokenFromJSON,
    RespRevokeTokenToJSON,
    RevokeTokenRequest,
    RevokeTokenRequestFromJSON,
    RevokeTokenRequestToJSON,
    V2Token,
    V2TokenFromJSON,
    V2TokenToJSON,
} from '../models';

export interface CreateTokenRequest {
    reqCreateToken: ReqCreateToken;
}

export interface CreateV2TokenRequest {
    v2Token: V2Token;
}

export interface GenerateDeviceCodeRequest {
    newDeviceCode: NewDeviceCode;
}

export interface RevokeTokenOperationRequest {
    revokeTokenRequest: RevokeTokenRequest;
}

/**
 * 
 */
export class TokensApi extends runtime.BaseAPI {

    /**
     * Generate a Tapis JWT using some OAuth2 grant type. Typically, a request to this endpoint is the last step in the token generation process. The fields required in the request payload depend on the grant type being used (see details below).
     * Generate a Tapis JWT
     */
    async createTokenRaw(requestParameters: CreateTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespCreateToken>> {
        if (requestParameters.reqCreateToken === null || requestParameters.reqCreateToken === undefined) {
            throw new runtime.RequiredError('reqCreateToken','Required parameter requestParameters.reqCreateToken was null or undefined when calling createToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/oauth2/tokens`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateTokenToJSON(requestParameters.reqCreateToken),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespCreateTokenFromJSON(jsonValue));
    }

    /**
     * Generate a Tapis JWT using some OAuth2 grant type. Typically, a request to this endpoint is the last step in the token generation process. The fields required in the request payload depend on the grant type being used (see details below).
     * Generate a Tapis JWT
     */
    async createToken(requestParameters: CreateTokenRequest, initOverrides?: RequestInit): Promise<RespCreateToken> {
        const response = await this.createTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a v2 token from a Tapis v3 JWT. Note that only some tenants for both v2 and v3 are supported.
     * Create a v2 bearer token from a Tapis v3 JWT.
     */
    async createV2TokenRaw(requestParameters: CreateV2TokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespCreateV2Token>> {
        if (requestParameters.v2Token === null || requestParameters.v2Token === undefined) {
            throw new runtime.RequiredError('v2Token','Required parameter requestParameters.v2Token was null or undefined when calling createV2Token.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/oauth2/v2/token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V2TokenToJSON(requestParameters.v2Token),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespCreateV2TokenFromJSON(jsonValue));
    }

    /**
     * Create a v2 token from a Tapis v3 JWT. Note that only some tenants for both v2 and v3 are supported.
     * Create a v2 bearer token from a Tapis v3 JWT.
     */
    async createV2Token(requestParameters: CreateV2TokenRequest, initOverrides?: RequestInit): Promise<RespCreateV2Token> {
        const response = await this.createV2TokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Generate a device code; this is the first step in the device_code grant type. See the OAuth2 documentation for details.
     * Generate a device code.
     */
    async generateDeviceCodeRaw(requestParameters: GenerateDeviceCodeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespGenerateDeviceCode>> {
        if (requestParameters.newDeviceCode === null || requestParameters.newDeviceCode === undefined) {
            throw new runtime.RequiredError('newDeviceCode','Required parameter requestParameters.newDeviceCode was null or undefined when calling generateDeviceCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/oauth2/device/code`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewDeviceCodeToJSON(requestParameters.newDeviceCode),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespGenerateDeviceCodeFromJSON(jsonValue));
    }

    /**
     * Generate a device code; this is the first step in the device_code grant type. See the OAuth2 documentation for details.
     * Generate a device code.
     */
    async generateDeviceCode(requestParameters: GenerateDeviceCodeRequest, initOverrides?: RequestInit): Promise<RespGenerateDeviceCode> {
        const response = await this.generateDeviceCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Revoke a Tapis JWT. Pass the token to revoke in the body of the request. Once revoked, a token cannot be unrevoked. Only user tokens generated by this Authenticator can be revoked with this endpoint.
     * Revoke a token.
     */
    async revokeTokenRaw(requestParameters: RevokeTokenOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespRevokeToken>> {
        if (requestParameters.revokeTokenRequest === null || requestParameters.revokeTokenRequest === undefined) {
            throw new runtime.RequiredError('revokeTokenRequest','Required parameter requestParameters.revokeTokenRequest was null or undefined when calling revokeToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/oauth2/tokens/revoke`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RevokeTokenRequestToJSON(requestParameters.revokeTokenRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespRevokeTokenFromJSON(jsonValue));
    }

    /**
     * Revoke a Tapis JWT. Pass the token to revoke in the body of the request. Once revoked, a token cannot be unrevoked. Only user tokens generated by this Authenticator can be revoked with this endpoint.
     * Revoke a token.
     */
    async revokeToken(requestParameters: RevokeTokenOperationRequest, initOverrides?: RequestInit): Promise<RespRevokeToken> {
        const response = await this.revokeTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
