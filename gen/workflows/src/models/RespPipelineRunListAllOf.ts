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
    PipelineRun,
    PipelineRunFromJSON,
    PipelineRunFromJSONTyped,
    PipelineRunToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespPipelineRunListAllOf
 */
export interface RespPipelineRunListAllOf {
    /**
     * 
     * @type {Array<PipelineRun>}
     * @memberof RespPipelineRunListAllOf
     */
    result?: Array<PipelineRun>;
}

export function RespPipelineRunListAllOfFromJSON(json: any): RespPipelineRunListAllOf {
    return RespPipelineRunListAllOfFromJSONTyped(json, false);
}

export function RespPipelineRunListAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespPipelineRunListAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(PipelineRunFromJSON)),
    };
}

export function RespPipelineRunListAllOfToJSON(value?: RespPipelineRunListAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(PipelineRunToJSON)),
    };
}

