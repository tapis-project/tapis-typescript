/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions, credentials and Scheduler Profiles.
 *
 * The version of the OpenAPI document: 1.7.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ReqUpdateCredential,
    ReqUpdateCredentialFromJSON,
    ReqUpdateCredentialToJSON,
    RespBasic,
    RespBasicFromJSON,
    RespBasicToJSON,
    RespCredential,
    RespCredentialFromJSON,
    RespCredentialToJSON,
    RespGlobusAuthUrl,
    RespGlobusAuthUrlFromJSON,
    RespGlobusAuthUrlToJSON,
} from '../models';

export interface CheckUserCredentialRequest {
    systemId: string;
    userName: string;
    authnMethod?: string;
}

export interface CreateUserCredentialRequest {
    systemId: string;
    userName: string;
    reqUpdateCredential: ReqUpdateCredential;
    skipCredentialCheck?: boolean;
}

export interface GenerateGlobusTokensRequest {
    systemId: string;
    userName: string;
    authCode: string;
    sessionId: string;
}

export interface GetGlobusAuthUrlRequest {
    systemId: string;
}

export interface GetUserCredentialRequest {
    systemId: string;
    userName: string;
    authnMethod?: string;
}

export interface RemoveUserCredentialRequest {
    systemId: string;
    userName: string;
}

/**
 * 
 */
export class CredentialsApi extends runtime.BaseAPI {

    /**
     * Check user credentials by connecting to the system host. Not supported for all system types. Currently supported for LINUX and S3 type systems.  If the *effectiveUserId* for the system is dynamic (i.e. equal to *${apiUserId}*) then *{userName}* is interpreted as a Tapis user and a search is made for credentials associated with *{userName}*.  If the *effectiveUserId* for the system is static (i.e. not *${apiUserId}*) then *{userName}* is interpreted as the login user to be used when accessing the host. Note that this would typically be the current *effectiveUserId* defined for the system, but that is not a requirement. This allows for registering and checking credentials for a login user prior to updating the system definition.  Operation is allowed if requester is the system owner or a tenant administrator. If the *effectiveUserId* for the system is dynamic (i.e. equal to *${apiUserId}*) then the operation is allowed if *{userName}* is the Tapis user making the request.  Desired authentication method may be specified using query parameter *authnMethod*. If not specified, then credentials for the system\'s default authentication method are verified. 
     */
    async checkUserCredentialRaw(requestParameters: CheckUserCredentialRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespBasic>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling checkUserCredential.');
        }

        if (requestParameters.userName === null || requestParameters.userName === undefined) {
            throw new runtime.RequiredError('userName','Required parameter requestParameters.userName was null or undefined when calling checkUserCredential.');
        }

        const queryParameters: any = {};

        if (requestParameters.authnMethod !== undefined) {
            queryParameters['authnMethod'] = requestParameters.authnMethod;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/credential/{systemId}/user/{userName}/check`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"userName"}}`, encodeURIComponent(String(requestParameters.userName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Check user credentials by connecting to the system host. Not supported for all system types. Currently supported for LINUX and S3 type systems.  If the *effectiveUserId* for the system is dynamic (i.e. equal to *${apiUserId}*) then *{userName}* is interpreted as a Tapis user and a search is made for credentials associated with *{userName}*.  If the *effectiveUserId* for the system is static (i.e. not *${apiUserId}*) then *{userName}* is interpreted as the login user to be used when accessing the host. Note that this would typically be the current *effectiveUserId* defined for the system, but that is not a requirement. This allows for registering and checking credentials for a login user prior to updating the system definition.  Operation is allowed if requester is the system owner or a tenant administrator. If the *effectiveUserId* for the system is dynamic (i.e. equal to *${apiUserId}*) then the operation is allowed if *{userName}* is the Tapis user making the request.  Desired authentication method may be specified using query parameter *authnMethod*. If not specified, then credentials for the system\'s default authentication method are verified. 
     */
    async checkUserCredential(requestParameters: CheckUserCredentialRequest, initOverrides?: RequestInit): Promise<RespBasic> {
        const response = await this.checkUserCredentialRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create or update credentials in the Security Kernel for given system and target *userName* using a request body. Credentials for multiple authentication methods may be provided. Note that there is support for only one set of credentials per user per system. Updating credentials overwrites previously registered data.  The Systems service does not store the secrets in its database, they are persisted in the Security Kernel.  If the *effectiveUserId* for the system is dynamic (i.e. equal to *${apiUserId}*) then *{userName}* is interpreted as a Tapis user and the request body may contain the optional attribute *loginUser* which will be used to map the Tapis user to a username to be used when accessing the system. If the login user is not provided then there is no mapping and the Tapis user is always used when accessing the system.  If the *effectiveUserId* for the system is static (i.e. not *${apiUserId}*) then *{userName}* is interpreted as the login user to be used when accessing the host.  Operation is allowed if requester is the system owner or a tenant administrator. If the *effectiveUserId* for the system is dynamic (i.e. equal to *${apiUserId}*) then the operation is allowed if *{userName}* is the Tapis user making the request.  By default credentials for LINUX and S3 type systems are verified. Use query parameter *skipCredentialCheck=true* to bypass initial credential validation. 
     */
    async createUserCredentialRaw(requestParameters: CreateUserCredentialRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespBasic>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling createUserCredential.');
        }

        if (requestParameters.userName === null || requestParameters.userName === undefined) {
            throw new runtime.RequiredError('userName','Required parameter requestParameters.userName was null or undefined when calling createUserCredential.');
        }

        if (requestParameters.reqUpdateCredential === null || requestParameters.reqUpdateCredential === undefined) {
            throw new runtime.RequiredError('reqUpdateCredential','Required parameter requestParameters.reqUpdateCredential was null or undefined when calling createUserCredential.');
        }

        const queryParameters: any = {};

        if (requestParameters.skipCredentialCheck !== undefined) {
            queryParameters['skipCredentialCheck'] = requestParameters.skipCredentialCheck;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/credential/{systemId}/user/{userName}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"userName"}}`, encodeURIComponent(String(requestParameters.userName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqUpdateCredentialToJSON(requestParameters.reqUpdateCredential),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Create or update credentials in the Security Kernel for given system and target *userName* using a request body. Credentials for multiple authentication methods may be provided. Note that there is support for only one set of credentials per user per system. Updating credentials overwrites previously registered data.  The Systems service does not store the secrets in its database, they are persisted in the Security Kernel.  If the *effectiveUserId* for the system is dynamic (i.e. equal to *${apiUserId}*) then *{userName}* is interpreted as a Tapis user and the request body may contain the optional attribute *loginUser* which will be used to map the Tapis user to a username to be used when accessing the system. If the login user is not provided then there is no mapping and the Tapis user is always used when accessing the system.  If the *effectiveUserId* for the system is static (i.e. not *${apiUserId}*) then *{userName}* is interpreted as the login user to be used when accessing the host.  Operation is allowed if requester is the system owner or a tenant administrator. If the *effectiveUserId* for the system is dynamic (i.e. equal to *${apiUserId}*) then the operation is allowed if *{userName}* is the Tapis user making the request.  By default credentials for LINUX and S3 type systems are verified. Use query parameter *skipCredentialCheck=true* to bypass initial credential validation. 
     */
    async createUserCredential(requestParameters: CreateUserCredentialRequest, initOverrides?: RequestInit): Promise<RespBasic> {
        const response = await this.createUserCredentialRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use a Globus *Native App Authorization Code* and a Tapis session Id to generate a pair of access and refresh tokens. The Systems service will use the Tapis Security Kernel to store the tokens for the given system and user. The session Id is a Tapis Id that is used to track the oauth2 flow that is started when a call to the getGlobusAuthUrl endpoint is made. The authorization code, as per Globus documentation, is valid for 10 minutes. Please note that the Tapis installation for your site must be configured by the site administrator to support systems of type GLOBUS. 
     * Use a Globus authorization code + Tapis session Id to generate tokens
     */
    async generateGlobusTokensRaw(requestParameters: GenerateGlobusTokensRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespBasic>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling generateGlobusTokens.');
        }

        if (requestParameters.userName === null || requestParameters.userName === undefined) {
            throw new runtime.RequiredError('userName','Required parameter requestParameters.userName was null or undefined when calling generateGlobusTokens.');
        }

        if (requestParameters.authCode === null || requestParameters.authCode === undefined) {
            throw new runtime.RequiredError('authCode','Required parameter requestParameters.authCode was null or undefined when calling generateGlobusTokens.');
        }

        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling generateGlobusTokens.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/credential/{systemId}/user/{userName}/globus/tokens/{authCode}/{sessionId}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"userName"}}`, encodeURIComponent(String(requestParameters.userName))).replace(`{${"authCode"}}`, encodeURIComponent(String(requestParameters.authCode))).replace(`{${"sessionId"}}`, encodeURIComponent(String(requestParameters.sessionId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Use a Globus *Native App Authorization Code* and a Tapis session Id to generate a pair of access and refresh tokens. The Systems service will use the Tapis Security Kernel to store the tokens for the given system and user. The session Id is a Tapis Id that is used to track the oauth2 flow that is started when a call to the getGlobusAuthUrl endpoint is made. The authorization code, as per Globus documentation, is valid for 10 minutes. Please note that the Tapis installation for your site must be configured by the site administrator to support systems of type GLOBUS. 
     * Use a Globus authorization code + Tapis session Id to generate tokens
     */
    async generateGlobusTokens(requestParameters: GenerateGlobusTokensRequest, initOverrides?: RequestInit): Promise<RespBasic> {
        const response = await this.generateGlobusTokensRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a Globus URL + Session Id that can be used to generate an oauth2 authorization code associated with the given system. In Globus, the code is referred to as a *Native App Authorization Code*. The host property of the system is used as the Globus Endpoint Id or Globus Collection Id. Once a user has obtained an authorization code, the corresponding Systems endpoint for generating Globus tokens should be called to exchange the code + sessionId for a pair of access and refresh tokens. The session Id is a Tapis Id that is used to track the oauth2 flow that is started when this call is made. The authorization code, as per Globus documentation, is valid for 10 minutes. Please note that the Tapis installation for your site must be configured by the site administrator to support systems of type GLOBUS. 
     * Retrieve a Globus URL that can be used to generate an authorization code for an OAuth2 flow.
     */
    async getGlobusAuthUrlRaw(requestParameters: GetGlobusAuthUrlRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespGlobusAuthUrl>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling getGlobusAuthUrl.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/credential/{systemId}/globus/authUrl`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespGlobusAuthUrlFromJSON(jsonValue));
    }

    /**
     * Retrieve a Globus URL + Session Id that can be used to generate an oauth2 authorization code associated with the given system. In Globus, the code is referred to as a *Native App Authorization Code*. The host property of the system is used as the Globus Endpoint Id or Globus Collection Id. Once a user has obtained an authorization code, the corresponding Systems endpoint for generating Globus tokens should be called to exchange the code + sessionId for a pair of access and refresh tokens. The session Id is a Tapis Id that is used to track the oauth2 flow that is started when this call is made. The authorization code, as per Globus documentation, is valid for 10 minutes. Please note that the Tapis installation for your site must be configured by the site administrator to support systems of type GLOBUS. 
     * Retrieve a Globus URL that can be used to generate an authorization code for an OAuth2 flow.
     */
    async getGlobusAuthUrl(requestParameters: GetGlobusAuthUrlRequest, initOverrides?: RequestInit): Promise<RespGlobusAuthUrl> {
        const response = await this.getGlobusAuthUrlRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Restricted. Only certain Tapis services authorized.  Retrieve credentials for given system, target *userName* and authentication method.  If the *effectiveUserId* for the system is dynamic (i.e. equal to *${apiUserId}*) then *{userName}* is interpreted as a Tapis user. Note that there may me a mapping of the Tapis user to a host *loginUser*.  If the *effectiveUserId* for the system is static (i.e. not *${apiUserId}*) then *{userName}* is interpreted as the host *loginUser* that is used when accessing the host.  Desired authentication method may be specified using query parameter *authnMethod*. If desired authentication method not specified then credentials for the system\'s default authentication method are returned.  The result includes the attribute *authnMethod* indicating the authentication method associated with the returned credentials. 
     */
    async getUserCredentialRaw(requestParameters: GetUserCredentialRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespCredential>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling getUserCredential.');
        }

        if (requestParameters.userName === null || requestParameters.userName === undefined) {
            throw new runtime.RequiredError('userName','Required parameter requestParameters.userName was null or undefined when calling getUserCredential.');
        }

        const queryParameters: any = {};

        if (requestParameters.authnMethod !== undefined) {
            queryParameters['authnMethod'] = requestParameters.authnMethod;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/credential/{systemId}/user/{userName}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"userName"}}`, encodeURIComponent(String(requestParameters.userName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespCredentialFromJSON(jsonValue));
    }

    /**
     * Restricted. Only certain Tapis services authorized.  Retrieve credentials for given system, target *userName* and authentication method.  If the *effectiveUserId* for the system is dynamic (i.e. equal to *${apiUserId}*) then *{userName}* is interpreted as a Tapis user. Note that there may me a mapping of the Tapis user to a host *loginUser*.  If the *effectiveUserId* for the system is static (i.e. not *${apiUserId}*) then *{userName}* is interpreted as the host *loginUser* that is used when accessing the host.  Desired authentication method may be specified using query parameter *authnMethod*. If desired authentication method not specified then credentials for the system\'s default authentication method are returned.  The result includes the attribute *authnMethod* indicating the authentication method associated with the returned credentials. 
     */
    async getUserCredential(requestParameters: GetUserCredentialRequest, initOverrides?: RequestInit): Promise<RespCredential> {
        const response = await this.getUserCredentialRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove credentials from the Security Kernel for given system and *target user*. Requester must be owner of the system.  Operation is allowed if requester is the system owner or a tenant administrator. If the *effectiveUserId* for the system is dynamic (i.e. equal to *${apiUserId}*) then the operation is allowed if *{userName}* is the Tapis user making the request. 
     */
    async removeUserCredentialRaw(requestParameters: RemoveUserCredentialRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespBasic>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling removeUserCredential.');
        }

        if (requestParameters.userName === null || requestParameters.userName === undefined) {
            throw new runtime.RequiredError('userName','Required parameter requestParameters.userName was null or undefined when calling removeUserCredential.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/credential/{systemId}/user/{userName}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"userName"}}`, encodeURIComponent(String(requestParameters.userName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Remove credentials from the Security Kernel for given system and *target user*. Requester must be owner of the system.  Operation is allowed if requester is the system owner or a tenant administrator. If the *effectiveUserId* for the system is dynamic (i.e. equal to *${apiUserId}*) then the operation is allowed if *{userName}* is the Tapis user making the request. 
     */
    async removeUserCredential(requestParameters: RemoveUserCredentialRequest, initOverrides?: RequestInit): Promise<RespBasic> {
        const response = await this.removeUserCredentialRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
