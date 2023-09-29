/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 1.4.2
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ResultChangeCount,
    ResultChangeCountFromJSON,
    ResultChangeCountFromJSONTyped,
    ResultChangeCountToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespChangeCount
 */
export interface RespChangeCount {
    /**
     * 
     * @type {string}
     * @memberof RespChangeCount
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespChangeCount
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespChangeCount
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof RespChangeCount
     */
    commit?: string;
    /**
     * 
     * @type {string}
     * @memberof RespChangeCount
     */
    build?: string;
    /**
     * 
     * @type {ResultChangeCount}
     * @memberof RespChangeCount
     */
    result?: ResultChangeCount;
    /**
     * 
     * @type {object}
     * @memberof RespChangeCount
     */
    metadata?: object;
}

export function RespChangeCountFromJSON(json: any): RespChangeCount {
    return RespChangeCountFromJSONTyped(json, false);
}

export function RespChangeCountFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespChangeCount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'commit': !exists(json, 'commit') ? undefined : json['commit'],
        'build': !exists(json, 'build') ? undefined : json['build'],
        'result': !exists(json, 'result') ? undefined : ResultChangeCountFromJSON(json['result']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function RespChangeCountToJSON(value?: RespChangeCount | null): any {
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
        'commit': value.commit,
        'build': value.build,
        'result': ResultChangeCountToJSON(value.result),
        'metadata': value.metadata,
    };
}

