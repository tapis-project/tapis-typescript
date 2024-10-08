/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Files API
 * The Tapis Files API provides for management of file resources on Tapis systems
 *
 * The version of the OpenAPI document: 1.3.6
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
export enum FileTypeEnum {
    File = 'file',
    Dir = 'dir',
    SymbolicLink = 'symbolic_link',
    Other = 'other',
    Unknown = 'unknown'
}

export function FileTypeEnumFromJSON(json: any): FileTypeEnum {
    return FileTypeEnumFromJSONTyped(json, false);
}

export function FileTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileTypeEnum {
    return json as FileTypeEnum;
}

export function FileTypeEnumToJSON(value?: FileTypeEnum | null): any {
    return value as any;
}

