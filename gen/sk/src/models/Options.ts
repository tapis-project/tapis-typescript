/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Security API
 * The Tapis Security API provides access to the Tapis Security Kernel authorization and secrets facilities.
 *
 * The version of the OpenAPI document: 0.1
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
 * @interface Options
 */
export interface Options {
    /**
     * 
     * @type {number}
     * @memberof Options
     */
    cas?: number;
}

export function OptionsFromJSON(json: any): Options {
    return OptionsFromJSONTyped(json, false);
}

export function OptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Options {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cas': !exists(json, 'cas') ? undefined : json['cas'],
    };
}

export function OptionsToJSON(value?: Options | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cas': value.cas,
    };
}

