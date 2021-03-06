/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ResultNameArray,
    ResultNameArrayFromJSON,
    ResultNameArrayFromJSONTyped,
    ResultNameArrayToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespNameArray
 */
export interface RespNameArray {
    /**
     * 
     * @type {string}
     * @memberof RespNameArray
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespNameArray
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespNameArray
     */
    version?: string;
    /**
     * 
     * @type {ResultNameArray}
     * @memberof RespNameArray
     */
    result?: ResultNameArray;
    /**
     * 
     * @type {object}
     * @memberof RespNameArray
     */
    metadata?: object;
}

export function RespNameArrayFromJSON(json: any): RespNameArray {
    return RespNameArrayFromJSONTyped(json, false);
}

export function RespNameArrayFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespNameArray {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'result': !exists(json, 'result') ? undefined : ResultNameArrayFromJSON(json['result']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function RespNameArrayToJSON(value?: RespNameArray | null): any {
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
        'result': ResultNameArrayToJSON(value.result),
        'metadata': value.metadata,
    };
}

