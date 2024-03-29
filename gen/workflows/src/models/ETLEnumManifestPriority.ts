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
export enum ETLEnumManifestPriority {
    Oldest = 'oldest',
    Newest = 'newest',
    Any = 'any'
}

export function ETLEnumManifestPriorityFromJSON(json: any): ETLEnumManifestPriority {
    return ETLEnumManifestPriorityFromJSONTyped(json, false);
}

export function ETLEnumManifestPriorityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ETLEnumManifestPriority {
    return json as ETLEnumManifestPriority;
}

export function ETLEnumManifestPriorityToJSON(value?: ETLEnumManifestPriority | null): any {
    return value as any;
}

