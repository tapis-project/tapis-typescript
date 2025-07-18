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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface V2Token
 */
export interface V2Token {
    /**
     * The access token representing the user.
     * @type {string}
     * @memberof V2Token
     */
    access_token: string;
}

export function V2TokenFromJSON(json: any): V2Token {
    return V2TokenFromJSONTyped(json, false);
}

export function V2TokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2Token {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'access_token': json['access_token'],
    };
}

export function V2TokenToJSON(value?: V2Token | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access_token': value.access_token,
    };
}

