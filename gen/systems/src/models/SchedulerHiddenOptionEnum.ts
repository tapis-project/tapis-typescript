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
export enum SchedulerHiddenOptionEnum {
    Mem = 'MEM'
}

export function SchedulerHiddenOptionEnumFromJSON(json: any): SchedulerHiddenOptionEnum {
    return SchedulerHiddenOptionEnumFromJSONTyped(json, false);
}

export function SchedulerHiddenOptionEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchedulerHiddenOptionEnum {
    return json as SchedulerHiddenOptionEnum;
}

export function SchedulerHiddenOptionEnumToJSON(value?: SchedulerHiddenOptionEnum | null): any {
    return value as any;
}

