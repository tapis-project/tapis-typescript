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
    JobShareDisplay,
    JobShareDisplayFromJSON,
    JobShareDisplayFromJSONTyped,
    JobShareDisplayToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespShareJob
 */
export interface RespShareJob {
    /**
     * 
     * @type {string}
     * @memberof RespShareJob
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespShareJob
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespShareJob
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof RespShareJob
     */
    commit?: string;
    /**
     * 
     * @type {string}
     * @memberof RespShareJob
     */
    build?: string;
    /**
     * 
     * @type {object}
     * @memberof RespShareJob
     */
    metadata?: object;
    /**
     * 
     * @type {JobShareDisplay}
     * @memberof RespShareJob
     */
    result?: JobShareDisplay;
}

export function RespShareJobFromJSON(json: any): RespShareJob {
    return RespShareJobFromJSONTyped(json, false);
}

export function RespShareJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespShareJob {
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
        'result': !exists(json, 'result') ? undefined : JobShareDisplayFromJSON(json['result']),
    };
}

export function RespShareJobToJSON(value?: RespShareJob | null): any {
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
        'result': JobShareDisplayToJSON(value.result),
    };
}

