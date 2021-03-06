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
 * @interface NewAccessTokenResponse
 */
export interface NewAccessTokenResponse {
    /**
     * The generated access token.
     * @type {string}
     * @memberof NewAccessTokenResponse
     */
    access_token?: string;
    /**
     * The date-time string when the generated access token expires.
     * @type {string}
     * @memberof NewAccessTokenResponse
     */
    expires_at?: string;
    /**
     * The time, in seconds, when the generated access token expires.
     * @type {number}
     * @memberof NewAccessTokenResponse
     */
    expires_in?: number;
}

export function NewAccessTokenResponseFromJSON(json: any): NewAccessTokenResponse {
    return NewAccessTokenResponseFromJSONTyped(json, false);
}

export function NewAccessTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewAccessTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'access_token': !exists(json, 'access_token') ? undefined : json['access_token'],
        'expires_at': !exists(json, 'expires_at') ? undefined : json['expires_at'],
        'expires_in': !exists(json, 'expires_in') ? undefined : json['expires_in'],
    };
}

export function NewAccessTokenResponseToJSON(value?: NewAccessTokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access_token': value.access_token,
        'expires_at': value.expires_at,
        'expires_in': value.expires_in,
    };
}

