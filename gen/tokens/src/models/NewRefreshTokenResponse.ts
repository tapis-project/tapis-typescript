/* tslint:disable */
/* eslint-disable */
/**
 * Tokens API
 * Manage Tapis Tokens.
 *
 * The version of the OpenAPI document: 1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NewRefreshTokenResponse
 */
export interface NewRefreshTokenResponse {
    /**
     * The generated refresh token.
     * @type {string}
     * @memberof NewRefreshTokenResponse
     */
    refresh_token?: string;
    /**
     * The date-time string when the generated refresh token expires.
     * @type {string}
     * @memberof NewRefreshTokenResponse
     */
    expires_at?: string;
    /**
     * The time, in seconds, when the generated refresh token expires.
     * @type {number}
     * @memberof NewRefreshTokenResponse
     */
    expires_in?: number;
}

export function NewRefreshTokenResponseFromJSON(json: any): NewRefreshTokenResponse {
    return NewRefreshTokenResponseFromJSONTyped(json, false);
}

export function NewRefreshTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewRefreshTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'refresh_token': !exists(json, 'refresh_token') ? undefined : json['refresh_token'],
        'expires_at': !exists(json, 'expires_at') ? undefined : json['expires_at'],
        'expires_in': !exists(json, 'expires_in') ? undefined : json['expires_in'],
    };
}

export function NewRefreshTokenResponseToJSON(value?: NewRefreshTokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'refresh_token': value.refresh_token,
        'expires_at': value.expires_at,
        'expires_in': value.expires_in,
    };
}

