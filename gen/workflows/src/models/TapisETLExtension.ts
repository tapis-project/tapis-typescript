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
 * @interface TapisETLExtension
 */
export interface TapisETLExtension {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof TapisETLExtension
     */
    env_mappings?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof TapisETLExtension
     */
    last_status?: string;
}

export function TapisETLExtensionFromJSON(json: any): TapisETLExtension {
    return TapisETLExtensionFromJSONTyped(json, false);
}

export function TapisETLExtensionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TapisETLExtension {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'env_mappings': !exists(json, 'env_mappings') ? undefined : json['env_mappings'],
        'last_status': !exists(json, 'last_status') ? undefined : json['last_status'],
    };
}

export function TapisETLExtensionToJSON(value?: TapisETLExtension | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'env_mappings': value.env_mappings,
        'last_status': value.last_status,
    };
}
