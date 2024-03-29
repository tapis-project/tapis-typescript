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
    EnumDuplicateSubmissionPolicy,
    EnumDuplicateSubmissionPolicyFromJSON,
    EnumDuplicateSubmissionPolicyFromJSONTyped,
    EnumDuplicateSubmissionPolicyToJSON,
    EnumInvocationMode,
    EnumInvocationModeFromJSON,
    EnumInvocationModeFromJSONTyped,
    EnumInvocationModeToJSON,
    EnumRetryPolicy,
    EnumRetryPolicyFromJSON,
    EnumRetryPolicyFromJSONTyped,
    EnumRetryPolicyToJSON,
    ExecutionProfile,
    ExecutionProfileFromJSON,
    ExecutionProfileFromJSONTyped,
    ExecutionProfileToJSON,
    PipelineExecutionProfileAllOf,
    PipelineExecutionProfileAllOfFromJSON,
    PipelineExecutionProfileAllOfFromJSONTyped,
    PipelineExecutionProfileAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface PipelineExecutionProfile
 */
export interface PipelineExecutionProfile {
    /**
     * 
     * @type {EnumInvocationMode}
     * @memberof PipelineExecutionProfile
     */
    invocation_mode?: EnumInvocationMode;
    /**
     * 
     * @type {number}
     * @memberof PipelineExecutionProfile
     */
    max_retries?: number;
    /**
     * 
     * @type {number}
     * @memberof PipelineExecutionProfile
     */
    max_exec_time?: number;
    /**
     * 
     * @type {EnumRetryPolicy}
     * @memberof PipelineExecutionProfile
     */
    retry_policy?: EnumRetryPolicy;
    /**
     * 
     * @type {EnumDuplicateSubmissionPolicy}
     * @memberof PipelineExecutionProfile
     */
    duplicate_submission_policy?: EnumDuplicateSubmissionPolicy;
}

export function PipelineExecutionProfileFromJSON(json: any): PipelineExecutionProfile {
    return PipelineExecutionProfileFromJSONTyped(json, false);
}

export function PipelineExecutionProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineExecutionProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invocation_mode': !exists(json, 'invocation_mode') ? undefined : EnumInvocationModeFromJSON(json['invocation_mode']),
        'max_retries': !exists(json, 'max_retries') ? undefined : json['max_retries'],
        'max_exec_time': !exists(json, 'max_exec_time') ? undefined : json['max_exec_time'],
        'retry_policy': !exists(json, 'retry_policy') ? undefined : EnumRetryPolicyFromJSON(json['retry_policy']),
        'duplicate_submission_policy': !exists(json, 'duplicate_submission_policy') ? undefined : EnumDuplicateSubmissionPolicyFromJSON(json['duplicate_submission_policy']),
    };
}

export function PipelineExecutionProfileToJSON(value?: PipelineExecutionProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invocation_mode': EnumInvocationModeToJSON(value.invocation_mode),
        'max_retries': value.max_retries,
        'max_exec_time': value.max_exec_time,
        'retry_policy': EnumRetryPolicyToJSON(value.retry_policy),
        'duplicate_submission_policy': EnumDuplicateSubmissionPolicyToJSON(value.duplicate_submission_policy),
    };
}

