/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    TaskExecution,
    TaskExecutionFromJSON,
    TaskExecutionFromJSONTyped,
    TaskExecutionToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespTaskExecutionListAllOf
 */
export interface RespTaskExecutionListAllOf {
    /**
     * 
     * @type {Array<TaskExecution>}
     * @memberof RespTaskExecutionListAllOf
     */
    result?: Array<TaskExecution>;
}

export function RespTaskExecutionListAllOfFromJSON(json: any): RespTaskExecutionListAllOf {
    return RespTaskExecutionListAllOfFromJSONTyped(json, false);
}

export function RespTaskExecutionListAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespTaskExecutionListAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(TaskExecutionFromJSON)),
    };
}

export function RespTaskExecutionListAllOfToJSON(value?: RespTaskExecutionListAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(TaskExecutionToJSON)),
    };
}

