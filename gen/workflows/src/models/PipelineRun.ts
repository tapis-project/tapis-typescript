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
import {
    EnumRunStatus,
    EnumRunStatusFromJSON,
    EnumRunStatusFromJSONTyped,
    EnumRunStatusToJSON,
} from './';

/**
 * 
 * @export
 * @interface PipelineRun
 */
export interface PipelineRun {
    /**
     * 
     * @type {string}
     * @memberof PipelineRun
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof PipelineRun
     */
    pipeline?: string;
    /**
     * 
     * @type {EnumRunStatus}
     * @memberof PipelineRun
     */
    status?: EnumRunStatus;
    /**
     * 
     * @type {string}
     * @memberof PipelineRun
     */
    started_at?: string;
    /**
     * 
     * @type {string}
     * @memberof PipelineRun
     */
    last_modified?: string;
    /**
     * 
     * @type {string}
     * @memberof PipelineRun
     */
    logs?: string;
}

export function PipelineRunFromJSON(json: any): PipelineRun {
    return PipelineRunFromJSONTyped(json, false);
}

export function PipelineRunFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineRun {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'pipeline': !exists(json, 'pipeline') ? undefined : json['pipeline'],
        'status': !exists(json, 'status') ? undefined : EnumRunStatusFromJSON(json['status']),
        'started_at': !exists(json, 'started_at') ? undefined : json['started_at'],
        'last_modified': !exists(json, 'last_modified') ? undefined : json['last_modified'],
        'logs': !exists(json, 'logs') ? undefined : json['logs'],
    };
}

export function PipelineRunToJSON(value?: PipelineRun | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'pipeline': value.pipeline,
        'status': EnumRunStatusToJSON(value.status),
        'started_at': value.started_at,
        'last_modified': value.last_modified,
        'logs': value.logs,
    };
}
