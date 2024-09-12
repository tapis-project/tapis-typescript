/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Machine Learning Hub - Datasets API
 * The Tapis Machine Learning Hub - Datasets API provides users access to datasets from HuggingFace within the Tapis framework.
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
    DatasetDownloadInfo,
    DatasetDownloadInfoFromJSON,
    DatasetDownloadInfoFromJSONTyped,
    DatasetDownloadInfoToJSON,
    RespBasic,
    RespBasicFromJSON,
    RespBasicFromJSONTyped,
    RespBasicToJSON,
    RespDatasetDownloadAllOf,
    RespDatasetDownloadAllOfFromJSON,
    RespDatasetDownloadAllOfFromJSONTyped,
    RespDatasetDownloadAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespDatasetDownload
 */
export interface RespDatasetDownload {
    /**
     * 
     * @type {string}
     * @memberof RespDatasetDownload
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespDatasetDownload
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespDatasetDownload
     */
    version?: string;
    /**
     * 
     * @type {DatasetDownloadInfo}
     * @memberof RespDatasetDownload
     */
    result?: DatasetDownloadInfo;
    /**
     * 
     * @type {object}
     * @memberof RespDatasetDownload
     */
    metadata?: object;
}

export function RespDatasetDownloadFromJSON(json: any): RespDatasetDownload {
    return RespDatasetDownloadFromJSONTyped(json, false);
}

export function RespDatasetDownloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespDatasetDownload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'result': !exists(json, 'result') ? undefined : DatasetDownloadInfoFromJSON(json['result']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function RespDatasetDownloadToJSON(value?: RespDatasetDownload | null): any {
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
        'result': DatasetDownloadInfoToJSON(value.result),
        'metadata': value.metadata,
    };
}
