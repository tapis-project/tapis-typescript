/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Machine Learning Hub - Models API
 * The Tapis Machine Learning Hub - Models API provides users access to machine learning models from HuggingFace within the Tapis framework.
 *
 * The version of the OpenAPI document: 0.0.2
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ModelCard,
    ModelCardFromJSON,
    ModelCardFromJSONTyped,
    ModelCardToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespModelCardAllOf
 */
export interface RespModelCardAllOf {
    /**
     * 
     * @type {ModelCard}
     * @memberof RespModelCardAllOf
     */
    result?: ModelCard;
}

export function RespModelCardAllOfFromJSON(json: any): RespModelCardAllOf {
    return RespModelCardAllOfFromJSONTyped(json, false);
}

export function RespModelCardAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespModelCardAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : ModelCardFromJSON(json['result']),
    };
}

export function RespModelCardAllOfToJSON(value?: RespModelCardAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': ModelCardToJSON(value.result),
    };
}
