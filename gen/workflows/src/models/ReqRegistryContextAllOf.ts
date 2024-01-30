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
 * @interface ReqRegistryContextAllOf
 */
export interface ReqRegistryContextAllOf {
    /**
     * 
     * @type {string}
     * @memberof ReqRegistryContextAllOf
     */
    tag?: string;
}

export function ReqRegistryContextAllOfFromJSON(json: any): ReqRegistryContextAllOf {
    return ReqRegistryContextAllOfFromJSONTyped(json, false);
}

export function ReqRegistryContextAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqRegistryContextAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
    };
}

export function ReqRegistryContextAllOfToJSON(value?: ReqRegistryContextAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tag': value.tag,
    };
}

