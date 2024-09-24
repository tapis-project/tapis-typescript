/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions, credentials and Scheduler Profiles.
 *
 * The version of the OpenAPI document: 1.7.0
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
export enum ListTypeEnum {
    Owned = 'OWNED',
    SharedPublic = 'SHARED_PUBLIC',
    All = 'ALL'
}

export function ListTypeEnumFromJSON(json: any): ListTypeEnum {
    return ListTypeEnumFromJSONTyped(json, false);
}

export function ListTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListTypeEnum {
    return json as ListTypeEnum;
}

export function ListTypeEnumToJSON(value?: ListTypeEnum | null): any {
    return value as any;
}

