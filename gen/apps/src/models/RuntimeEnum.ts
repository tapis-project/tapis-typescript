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
export enum RuntimeEnum {
    Singularity = 'SINGULARITY',
    Docker = 'DOCKER',
    Zip = 'ZIP'
}

export function RuntimeEnumFromJSON(json: any): RuntimeEnum {
    return RuntimeEnumFromJSONTyped(json, false);
}

export function RuntimeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeEnum {
    return json as RuntimeEnum;
}

export function RuntimeEnumToJSON(value?: RuntimeEnum | null): any {
    return value as any;
}

