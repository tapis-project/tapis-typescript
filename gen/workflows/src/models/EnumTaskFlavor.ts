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
export enum EnumTaskFlavor {
    C1tiny = 'c1tiny',
    C1sml = 'c1sml',
    C1med = 'c1med',
    C1lrg = 'c1lrg',
    C1xlrg = 'c1xlrg',
    C1xxlrg = 'c1xxlrg',
    G1nvdsml = 'g1nvdsml',
    G1nvdmed = 'g1nvdmed',
    G1nvdlrg = 'g1nvdlrg'
}

export function EnumTaskFlavorFromJSON(json: any): EnumTaskFlavor {
    return EnumTaskFlavorFromJSONTyped(json, false);
}

export function EnumTaskFlavorFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnumTaskFlavor {
    return json as EnumTaskFlavor;
}

export function EnumTaskFlavorToJSON(value?: EnumTaskFlavor | null): any {
    return value as any;
}

