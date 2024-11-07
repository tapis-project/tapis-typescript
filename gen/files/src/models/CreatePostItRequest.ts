/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Files API
 * The Tapis Files API provides for management of file resources on Tapis systems
 *
 * The version of the OpenAPI document: 1.3.6
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
 * @interface CreatePostItRequest
 */
export interface CreatePostItRequest {
    /**
     * Number of times that the new PostIt can be redeemed. The
     * default is one use.  Setting the value to -1 (negative one)
     * will allow the PostIt to be redeemed an unlimited number of
     * times.
     * @type {number}
     * @memberof CreatePostItRequest
     */
    allowedUses?: number;
    /**
     * Number of seconds until the PostIt expires.  
     * Default is 30 days.
     * @type {number}
     * @memberof CreatePostItRequest
     */
    validSeconds?: number;
}

export function CreatePostItRequestFromJSON(json: any): CreatePostItRequest {
    return CreatePostItRequestFromJSONTyped(json, false);
}

export function CreatePostItRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePostItRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowedUses': !exists(json, 'allowedUses') ? undefined : json['allowedUses'],
        'validSeconds': !exists(json, 'validSeconds') ? undefined : json['validSeconds'],
    };
}

export function CreatePostItRequestToJSON(value?: CreatePostItRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowedUses': value.allowedUses,
        'validSeconds': value.validSeconds,
    };
}
