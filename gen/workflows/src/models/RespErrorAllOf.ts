/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.2.0
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
 * @interface RespErrorAllOf
 */
export interface RespErrorAllOf {
    /**
     * 
     * @type {string}
     * @memberof RespErrorAllOf
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespErrorAllOf
     */
    message?: string;
}

export function RespErrorAllOfFromJSON(json: any): RespErrorAllOf {
    return RespErrorAllOfFromJSONTyped(json, false);
}

export function RespErrorAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespErrorAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function RespErrorAllOfToJSON(value?: RespErrorAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
    };
}

