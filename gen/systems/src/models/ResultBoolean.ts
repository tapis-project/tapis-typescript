/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions, credentials and Scheduler Profiles.
 *
 * The version of the OpenAPI document: 1.7.0
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
 * @interface ResultBoolean
 */
export interface ResultBoolean {
    /**
     * 
     * @type {boolean}
     * @memberof ResultBoolean
     */
    aBool?: boolean;
}

export function ResultBooleanFromJSON(json: any): ResultBoolean {
    return ResultBooleanFromJSONTyped(json, false);
}

export function ResultBooleanFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResultBoolean {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aBool': !exists(json, 'aBool') ? undefined : json['aBool'],
    };
}

export function ResultBooleanToJSON(value?: ResultBoolean | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aBool': value.aBool,
    };
}

