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
    SkSecretList,
    SkSecretListFromJSON,
    SkSecretListFromJSONTyped,
    SkSecretListToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespSecretList
 */
export interface RespSecretList {
    /**
     * 
     * @type {string}
     * @memberof RespSecretList
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespSecretList
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespSecretList
     */
    version?: string;
    /**
     * 
     * @type {SkSecretList}
     * @memberof RespSecretList
     */
    result?: SkSecretList;
}

export function RespSecretListFromJSON(json: any): RespSecretList {
    return RespSecretListFromJSONTyped(json, false);
}

export function RespSecretListFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespSecretList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'result': !exists(json, 'result') ? undefined : SkSecretListFromJSON(json['result']),
    };
}

export function RespSecretListToJSON(value?: RespSecretList | null): any {
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
        'result': SkSecretListToJSON(value.result),
    };
}

