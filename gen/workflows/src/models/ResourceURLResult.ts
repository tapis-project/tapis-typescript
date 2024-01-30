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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ResourceURLResult
 */
export interface ResourceURLResult {
    /**
     * 
     * @type {string}
     * @memberof ResourceURLResult
     */
    url?: string;
}

export function ResourceURLResultFromJSON(json: any): ResourceURLResult {
    return ResourceURLResultFromJSONTyped(json, false);
}

export function ResourceURLResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceURLResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function ResourceURLResultToJSON(value?: ResourceURLResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
    };
}

