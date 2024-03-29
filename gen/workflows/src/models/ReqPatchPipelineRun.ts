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
/**
 * 
 * @export
 * @interface ReqPatchPipelineRun
 */
export interface ReqPatchPipelineRun {
    /**
     * 
     * @type {string}
     * @memberof ReqPatchPipelineRun
     */
    logs?: string;
}

export function ReqPatchPipelineRunFromJSON(json: any): ReqPatchPipelineRun {
    return ReqPatchPipelineRunFromJSONTyped(json, false);
}

export function ReqPatchPipelineRunFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqPatchPipelineRun {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'logs': !exists(json, 'logs') ? undefined : json['logs'],
    };
}

export function ReqPatchPipelineRunToJSON(value?: ReqPatchPipelineRun | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'logs': value.logs,
    };
}

