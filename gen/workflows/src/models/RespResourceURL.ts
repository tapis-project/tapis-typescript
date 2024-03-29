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
    ResourceURLResult,
    ResourceURLResultFromJSON,
    ResourceURLResultFromJSONTyped,
    ResourceURLResultToJSON,
    RespBase,
    RespBaseFromJSON,
    RespBaseFromJSONTyped,
    RespBaseToJSON,
    RespResourceURLAllOf,
    RespResourceURLAllOfFromJSON,
    RespResourceURLAllOfFromJSONTyped,
    RespResourceURLAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespResourceURL
 */
export interface RespResourceURL {
    /**
     * 
     * @type {string}
     * @memberof RespResourceURL
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof RespResourceURL
     */
    message: string;
    /**
     * 
     * @type {ResourceURLResult}
     * @memberof RespResourceURL
     */
    result: ResourceURLResult;
    /**
     * 
     * @type {string}
     * @memberof RespResourceURL
     */
    version: string;
    /**
     * 
     * @type {object}
     * @memberof RespResourceURL
     */
    metadata: object;
}

export function RespResourceURLFromJSON(json: any): RespResourceURL {
    return RespResourceURLFromJSONTyped(json, false);
}

export function RespResourceURLFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespResourceURL {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
        'result': ResourceURLResultFromJSON(json['result']),
        'version': json['version'],
        'metadata': json['metadata'],
    };
}

export function RespResourceURLToJSON(value?: RespResourceURL | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'result': ResourceURLResultToJSON(value.result),
        'version': value.version,
        'metadata': value.metadata,
    };
}

