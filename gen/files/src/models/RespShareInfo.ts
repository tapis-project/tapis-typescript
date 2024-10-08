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
import {
    ResultShareInfo,
    ResultShareInfoFromJSON,
    ResultShareInfoFromJSONTyped,
    ResultShareInfoToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespShareInfo
 */
export interface RespShareInfo {
    /**
     * 
     * @type {string}
     * @memberof RespShareInfo
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespShareInfo
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespShareInfo
     */
    version?: string;
    /**
     * 
     * @type {ResultShareInfo}
     * @memberof RespShareInfo
     */
    result?: ResultShareInfo;
    /**
     * 
     * @type {object}
     * @memberof RespShareInfo
     */
    metadata?: object;
}

export function RespShareInfoFromJSON(json: any): RespShareInfo {
    return RespShareInfoFromJSONTyped(json, false);
}

export function RespShareInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespShareInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'result': !exists(json, 'result') ? undefined : ResultShareInfoFromJSON(json['result']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function RespShareInfoToJSON(value?: RespShareInfo | null): any {
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
        'result': ResultShareInfoToJSON(value.result),
        'metadata': value.metadata,
    };
}

