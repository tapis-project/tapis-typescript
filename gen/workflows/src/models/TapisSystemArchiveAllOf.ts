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
 * @interface TapisSystemArchiveAllOf
 */
export interface TapisSystemArchiveAllOf {
    /**
     * 
     * @type {string}
     * @memberof TapisSystemArchiveAllOf
     */
    system_id: string;
}

export function TapisSystemArchiveAllOfFromJSON(json: any): TapisSystemArchiveAllOf {
    return TapisSystemArchiveAllOfFromJSONTyped(json, false);
}

export function TapisSystemArchiveAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): TapisSystemArchiveAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'system_id': json['system_id'],
    };
}

export function TapisSystemArchiveAllOfToJSON(value?: TapisSystemArchiveAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'system_id': value.system_id,
    };
}
