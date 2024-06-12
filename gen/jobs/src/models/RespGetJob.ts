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
    Job,
    JobFromJSON,
    JobFromJSONTyped,
    JobToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespGetJob
 */
export interface RespGetJob {
    /**
     * 
     * @type {string}
     * @memberof RespGetJob
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespGetJob
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespGetJob
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof RespGetJob
     */
    commit?: string;
    /**
     * 
     * @type {string}
     * @memberof RespGetJob
     */
    build?: string;
    /**
     * 
     * @type {object}
     * @memberof RespGetJob
     */
    metadata?: object;
    /**
     * 
     * @type {Job}
     * @memberof RespGetJob
     */
    result?: Job;
}

export function RespGetJobFromJSON(json: any): RespGetJob {
    return RespGetJobFromJSONTyped(json, false);
}

export function RespGetJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespGetJob {
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
        'result': !exists(json, 'result') ? undefined : JobFromJSON(json['result']),
    };
}

export function RespGetJobToJSON(value?: RespGetJob | null): any {
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
        'result': JobToJSON(value.result),
    };
}

