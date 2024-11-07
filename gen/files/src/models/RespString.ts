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
 * @interface RespString
 */
export interface RespString {
    /**
     * 
     * @type {string}
     * @memberof RespString
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespString
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespString
     */
    result?: string;
    /**
     * 
     * @type {string}
     * @memberof RespString
     */
    version?: string;
    /**
     * 
     * @type {object}
     * @memberof RespString
     */
    metadata?: object;
}

export function RespStringFromJSON(json: any): RespString {
    return RespStringFromJSONTyped(json, false);
}

export function RespStringFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespString {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'result': !exists(json, 'result') ? undefined : json['result'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function RespStringToJSON(value?: RespString | null): any {
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
