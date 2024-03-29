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
export enum EnumTaskType {
    ImageBuild = 'image_build',
    Application = 'application',
    Request = 'request',
    TapisJob = 'tapis_job',
    TapisActor = 'tapis_actor',
    Function = 'function',
    Template = 'template'
}

export function EnumTaskTypeFromJSON(json: any): EnumTaskType {
    return EnumTaskTypeFromJSONTyped(json, false);
}

export function EnumTaskTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnumTaskType {
    return json as EnumTaskType;
}

export function EnumTaskTypeToJSON(value?: EnumTaskType | null): any {
    return value as any;
}

