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
export enum EnumComparisonOperator {
    Eq = 'eq',
    Ne = 'ne',
    Gt = 'gt',
    Lt = 'lt',
    Ge = 'ge',
    Le = 'le'
}

export function EnumComparisonOperatorFromJSON(json: any): EnumComparisonOperator {
    return EnumComparisonOperatorFromJSONTyped(json, false);
}

export function EnumComparisonOperatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnumComparisonOperator {
    return json as EnumComparisonOperator;
}

export function EnumComparisonOperatorToJSON(value?: EnumComparisonOperator | null): any {
    return value as any;
}
