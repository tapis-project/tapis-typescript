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

/**
 * 
 * @export
 * @enum {string}
 */
export enum EnumRunStatus {
    Staging = 'staging',
    Submitted = 'submitted',
    Active = 'active',
    Pending = 'pending',
    Backoff = 'backoff',
    Completed = 'completed',
    Failed = 'failed',
    Suspended = 'suspended',
    Archiving = 'archiving',
    Terminated = 'terminated',
    Terminating = 'terminating',
    Skipped = 'skipped'
}

export function EnumRunStatusFromJSON(json: any): EnumRunStatus {
    return EnumRunStatusFromJSONTyped(json, false);
}

export function EnumRunStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnumRunStatus {
    return json as EnumRunStatus;
}

export function EnumRunStatusToJSON(value?: EnumRunStatus | null): any {
    return value as any;
}
