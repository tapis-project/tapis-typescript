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
    Pipeline,
    PipelineFromJSON,
    PipelineFromJSONTyped,
    PipelineToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespPipelineAllOf
 */
export interface RespPipelineAllOf {
    /**
     * 
     * @type {Pipeline}
     * @memberof RespPipelineAllOf
     */
    result?: Pipeline;
}

export function RespPipelineAllOfFromJSON(json: any): RespPipelineAllOf {
    return RespPipelineAllOfFromJSONTyped(json, false);
}

export function RespPipelineAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespPipelineAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : PipelineFromJSON(json['result']),
    };
}

export function RespPipelineAllOfToJSON(value?: RespPipelineAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': PipelineToJSON(value.result),
    };
}

