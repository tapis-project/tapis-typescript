/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Machine Learning Hub API
 * The Tapis Machine Learning Hub API provides users access to machine learning models from HuggingFace within the Tapis framework.
 *
 * The version of the OpenAPI document: 0.0.1
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
 * @interface RespDictAllOf
 */
export interface RespDictAllOf {
    /**
     * 
     * @type {object}
     * @memberof RespDictAllOf
     */
    result?: object;
}

export function RespDictAllOfFromJSON(json: any): RespDictAllOf {
    return RespDictAllOfFromJSONTyped(json, false);
}

export function RespDictAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespDictAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function RespDictAllOfToJSON(value?: RespDictAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result,
    };
}
