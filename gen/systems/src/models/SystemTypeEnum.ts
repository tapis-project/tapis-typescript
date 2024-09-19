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
 * Type of system
 * @export
 * @enum {string}
 */
export enum SystemTypeEnum {
    Linux = 'LINUX',
    S3 = 'S3',
    Irods = 'IRODS',
    Globus = 'GLOBUS'
}

export function SystemTypeEnumFromJSON(json: any): SystemTypeEnum {
    return SystemTypeEnumFromJSONTyped(json, false);
}

export function SystemTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemTypeEnum {
    return json as SystemTypeEnum;
}

export function SystemTypeEnumToJSON(value?: SystemTypeEnum | null): any {
    return value as any;
}

