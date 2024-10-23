/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Jobs API
 * The Tapis Jobs API executes jobs on Tapis systems.
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
    ResultName,
    ResultNameFromJSON,
    ResultNameFromJSONTyped,
    ResultNameToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespName
 */
export interface RespName {
    /**
     * 
     * @type {string}
     * @memberof RespName
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespName
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespName
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof RespName
     */
    commit?: string;
    /**
     * 
     * @type {string}
     * @memberof RespName
     */
    build?: string;
    /**
     * 
     * @type {object}
     * @memberof RespName
     */
    metadata?: object;
    /**
     * 
     * @type {ResultName}
     * @memberof RespName
     */
    result?: ResultName;
}

export function RespNameFromJSON(json: any): RespName {
    return RespNameFromJSONTyped(json, false);
}

export function RespNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespName {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'commit': !exists(json, 'commit') ? undefined : json['commit'],
        'build': !exists(json, 'build') ? undefined : json['build'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'result': !exists(json, 'result') ? undefined : ResultNameFromJSON(json['result']),
    };
}

export function RespNameToJSON(value?: RespName | null): any {
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
        'metadata': value.metadata,
        'result': ResultNameToJSON(value.result),
    };
}

