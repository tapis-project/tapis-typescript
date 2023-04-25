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
    EnumTaskFlavor,
    EnumTaskFlavorFromJSON,
    EnumTaskFlavorFromJSONTyped,
    EnumTaskFlavorToJSON,
} from './';

/**
 * 
 * @export
 * @interface ExecutionProfile
 */
export interface ExecutionProfile {
    /**
     * 
     * @type {EnumDuplicateSubmissionPolicy}
     * @memberof ExecutionProfile
     */
    duplicate_submission_policy?: EnumDuplicateSubmissionPolicy;
    /**
     * 
     * @type {EnumTaskFlavor}
     * @memberof ExecutionProfile
     */
    flavor?: EnumTaskFlavor;
    /**
     * 
     * @type {EnumInvocationMode}
     * @memberof ExecutionProfile
     */
    invocation_mode?: EnumInvocationMode;
    /**
     * 
     * @type {number}
     * @memberof ExecutionProfile
     */
    max_retries?: number;
    /**
     * 
     * @type {number}
     * @memberof ExecutionProfile
     */
    max_exec_time?: number;
    /**
     * 
     * @type {EnumRetryPolicy}
     * @memberof ExecutionProfile
     */
    retry_policy?: EnumRetryPolicy;
}

export function ExecutionProfileFromJSON(json: any): ExecutionProfile {
    return ExecutionProfileFromJSONTyped(json, false);
}

export function ExecutionProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExecutionProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duplicate_submission_policy': !exists(json, 'duplicate_submission_policy') ? undefined : EnumDuplicateSubmissionPolicyFromJSON(json['duplicate_submission_policy']),
        'flavor': !exists(json, 'flavor') ? undefined : EnumTaskFlavorFromJSON(json['flavor']),
        'invocation_mode': !exists(json, 'invocation_mode') ? undefined : EnumInvocationModeFromJSON(json['invocation_mode']),
        'max_retries': !exists(json, 'max_retries') ? undefined : json['max_retries'],
        'max_exec_time': !exists(json, 'max_exec_time') ? undefined : json['max_exec_time'],
        'retry_policy': !exists(json, 'retry_policy') ? undefined : EnumRetryPolicyFromJSON(json['retry_policy']),
    };
}

export function ExecutionProfileToJSON(value?: ExecutionProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duplicate_submission_policy': EnumDuplicateSubmissionPolicyToJSON(value.duplicate_submission_policy),
        'flavor': EnumTaskFlavorToJSON(value.flavor),
        'invocation_mode': EnumInvocationModeToJSON(value.invocation_mode),
        'max_retries': value.max_retries,
        'max_exec_time': value.max_exec_time,
        'retry_policy': EnumRetryPolicyToJSON(value.retry_policy),
    };
}

