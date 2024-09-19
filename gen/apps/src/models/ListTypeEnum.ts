/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 1.6.2
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
    SharedDirect = 'SHARED_DIRECT',
    ReadPerm = 'READ_PERM',
    Mine = 'MINE',
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

