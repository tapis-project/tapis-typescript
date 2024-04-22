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
import {
    ModelDownloadInfo,
    ModelDownloadInfoFromJSON,
    ModelDownloadInfoFromJSONTyped,
    ModelDownloadInfoToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespModelDownloadAllOf
 */
export interface RespModelDownloadAllOf {
    /**
     * 
     * @type {ModelDownloadInfo}
     * @memberof RespModelDownloadAllOf
     */
    result?: ModelDownloadInfo;
}

export function RespModelDownloadAllOfFromJSON(json: any): RespModelDownloadAllOf {
    return RespModelDownloadAllOfFromJSONTyped(json, false);
}

export function RespModelDownloadAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespModelDownloadAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : ModelDownloadInfoFromJSON(json['result']),
    };
}

export function RespModelDownloadAllOfToJSON(value?: RespModelDownloadAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': ModelDownloadInfoToJSON(value.result),
    };
}
