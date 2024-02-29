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
/**
 * 
 * @export
 * @interface RespBase
 */
export interface RespBase {
    /**
     * 
     * @type {string}
     * @memberof RespBase
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof RespBase
     */
    message: string;
    /**
     * 
     * @type {object}
     * @memberof RespBase
     */
    result: object;
    /**
     * 
     * @type {string}
     * @memberof RespBase
     */
    version: string;
    /**
     * 
     * @type {object}
     * @memberof RespBase
     */
    metadata: object;
}

export function RespBaseFromJSON(json: any): RespBase {
    return RespBaseFromJSONTyped(json, false);
}

export function RespBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespBase {
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

export function RespBaseToJSON(value?: RespBase | null): any {
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
