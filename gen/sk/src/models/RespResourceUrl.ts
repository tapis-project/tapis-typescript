/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Security API
 * The Tapis Security API provides access to the Tapis Security Kernel authorization and secrets facilities.
 *
 * The version of the OpenAPI document: 0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ResultResourceUrl,
    ResultResourceUrlFromJSON,
    ResultResourceUrlFromJSONTyped,
    ResultResourceUrlToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespResourceUrl
 */
export interface RespResourceUrl {
    /**
     * 
     * @type {string}
     * @memberof RespResourceUrl
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespResourceUrl
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespResourceUrl
     */
    version?: string;
    /**
     * 
     * @type {ResultResourceUrl}
     * @memberof RespResourceUrl
     */
    result?: ResultResourceUrl;
}

export function RespResourceUrlFromJSON(json: any): RespResourceUrl {
    return RespResourceUrlFromJSONTyped(json, false);
}

export function RespResourceUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespResourceUrl {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'result': !exists(json, 'result') ? undefined : ResultResourceUrlFromJSON(json['result']),
    };
}

export function RespResourceUrlToJSON(value?: RespResourceUrl | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'version': value.version,
        'result': ResultResourceUrlToJSON(value.result),
    };
}

