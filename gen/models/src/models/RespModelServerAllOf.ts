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
    ModelServerInfo,
    ModelServerInfoFromJSON,
    ModelServerInfoFromJSONTyped,
    ModelServerInfoToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespModelServerAllOf
 */
export interface RespModelServerAllOf {
    /**
     * 
     * @type {ModelServerInfo}
     * @memberof RespModelServerAllOf
     */
    result?: ModelServerInfo;
}

export function RespModelServerAllOfFromJSON(json: any): RespModelServerAllOf {
    return RespModelServerAllOfFromJSONTyped(json, false);
}

export function RespModelServerAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespModelServerAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : ModelServerInfoFromJSON(json['result']),
    };
}

export function RespModelServerAllOfToJSON(value?: RespModelServerAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': ModelServerInfoToJSON(value.result),
    };
}

