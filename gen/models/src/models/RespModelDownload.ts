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
    ModelDownloadInfo,
    ModelDownloadInfoFromJSON,
    ModelDownloadInfoFromJSONTyped,
    ModelDownloadInfoToJSON,
    RespBasic,
    RespBasicFromJSON,
    RespBasicFromJSONTyped,
    RespBasicToJSON,
    RespModelDownloadAllOf,
    RespModelDownloadAllOfFromJSON,
    RespModelDownloadAllOfFromJSONTyped,
    RespModelDownloadAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespModelDownload
 */
export interface RespModelDownload {
    /**
     * 
     * @type {string}
     * @memberof RespModelDownload
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespModelDownload
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespModelDownload
     */
    version?: string;
    /**
     * 
     * @type {ModelDownloadInfo}
     * @memberof RespModelDownload
     */
    result?: ModelDownloadInfo;
    /**
     * 
     * @type {object}
     * @memberof RespModelDownload
     */
    metadata?: object;
}

export function RespModelDownloadFromJSON(json: any): RespModelDownload {
    return RespModelDownloadFromJSONTyped(json, false);
}

export function RespModelDownloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespModelDownload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'result': !exists(json, 'result') ? undefined : ModelDownloadInfoFromJSON(json['result']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function RespModelDownloadToJSON(value?: RespModelDownload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'version': value.version,
        'result': ModelDownloadInfoToJSON(value.result),
        'metadata': value.metadata,
    };
}

