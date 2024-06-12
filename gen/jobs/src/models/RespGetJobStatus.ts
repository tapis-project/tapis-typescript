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
    JobStatusDisplay,
    JobStatusDisplayFromJSON,
    JobStatusDisplayFromJSONTyped,
    JobStatusDisplayToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespGetJobStatus
 */
export interface RespGetJobStatus {
    /**
     * 
     * @type {string}
     * @memberof RespGetJobStatus
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespGetJobStatus
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespGetJobStatus
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof RespGetJobStatus
     */
    commit?: string;
    /**
     * 
     * @type {string}
     * @memberof RespGetJobStatus
     */
    build?: string;
    /**
     * 
     * @type {object}
     * @memberof RespGetJobStatus
     */
    metadata?: object;
    /**
     * 
     * @type {JobStatusDisplay}
     * @memberof RespGetJobStatus
     */
    result?: JobStatusDisplay;
}

export function RespGetJobStatusFromJSON(json: any): RespGetJobStatus {
    return RespGetJobStatusFromJSONTyped(json, false);
}

export function RespGetJobStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespGetJobStatus {
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
        'result': !exists(json, 'result') ? undefined : JobStatusDisplayFromJSON(json['result']),
    };
}

export function RespGetJobStatusToJSON(value?: RespGetJobStatus | null): any {
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
        'result': JobStatusDisplayToJSON(value.result),
    };
}

