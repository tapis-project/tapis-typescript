/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.6.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    RespBase,
    RespBaseFromJSON,
    RespBaseFromJSONTyped,
    RespBaseToJSON,
    RespErrorAllOf,
    RespErrorAllOfFromJSON,
    RespErrorAllOfFromJSONTyped,
    RespErrorAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespError
 */
export interface RespError {
    /**
     * 
     * @type {string}
     * @memberof RespError
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof RespError
     */
    message: string;
    /**
     * 
     * @type {object}
     * @memberof RespError
     */
    result: object;
    /**
     * 
     * @type {string}
     * @memberof RespError
     */
    version: string;
    /**
     * 
     * @type {object}
     * @memberof RespError
     */
    metadata: object;
}

export function RespErrorFromJSON(json: any): RespError {
    return RespErrorFromJSONTyped(json, false);
}

export function RespErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
        'result': json['result'],
        'version': json['version'],
        'metadata': json['metadata'],
    };
}

export function RespErrorToJSON(value?: RespError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'result': value.result,
        'version': value.version,
        'metadata': value.metadata,
    };
}

