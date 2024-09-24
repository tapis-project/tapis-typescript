/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions, credentials and Scheduler Profiles.
 *
 * The version of the OpenAPI document: 1.7.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    TapisSystem,
    TapisSystemFromJSON,
    TapisSystemFromJSONTyped,
    TapisSystemToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespSystem
 */
export interface RespSystem {
    /**
     * 
     * @type {string}
     * @memberof RespSystem
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespSystem
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespSystem
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof RespSystem
     */
    commit?: string;
    /**
     * 
     * @type {string}
     * @memberof RespSystem
     */
    build?: string;
    /**
     * 
     * @type {TapisSystem}
     * @memberof RespSystem
     */
    result?: TapisSystem;
    /**
     * 
     * @type {object}
     * @memberof RespSystem
     */
    metadata?: object;
}

export function RespSystemFromJSON(json: any): RespSystem {
    return RespSystemFromJSONTyped(json, false);
}

export function RespSystemFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespSystem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'commit': !exists(json, 'commit') ? undefined : json['commit'],
        'build': !exists(json, 'build') ? undefined : json['build'],
        'result': !exists(json, 'result') ? undefined : TapisSystemFromJSON(json['result']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function RespSystemToJSON(value?: RespSystem | null): any {
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
        'result': TapisSystemToJSON(value.result),
        'metadata': value.metadata,
    };
}

