/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions, credentials and Scheduler Profiles.
 *
 * The version of the OpenAPI document: 1.6.3
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
export enum SchedulerTypeEnum {
    Slurm = 'SLURM',
    Condor = 'CONDOR',
    Pbs = 'PBS',
    Sge = 'SGE',
    Uge = 'UGE',
    Torque = 'TORQUE'
}

export function SchedulerTypeEnumFromJSON(json: any): SchedulerTypeEnum {
    return SchedulerTypeEnumFromJSONTyped(json, false);
}

export function SchedulerTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchedulerTypeEnum {
    return json as SchedulerTypeEnum;
}

export function SchedulerTypeEnumToJSON(value?: SchedulerTypeEnum | null): any {
    return value as any;
}

