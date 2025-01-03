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
 * @interface RespSubmitJob
 */
export interface RespSubmitJob {
    /**
     * 
     * @type {string}
     * @memberof RespSubmitJob
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespSubmitJob
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespSubmitJob
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof RespSubmitJob
     */
    commit?: string;
    /**
     * 
     * @type {string}
     * @memberof RespSubmitJob
     */
    build?: string;
    /**
     * 
     * @type {object}
     * @memberof RespSubmitJob
     */
    metadata?: object;
    /**
     * 
     * @type {Job}
     * @memberof RespSubmitJob
     */
    result?: Job;
}

export function RespSubmitJobFromJSON(json: any): RespSubmitJob {
    return RespSubmitJobFromJSONTyped(json, false);
}

export function RespSubmitJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespSubmitJob {
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

export function RespSubmitJobToJSON(value?: RespSubmitJob | null): any {
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

