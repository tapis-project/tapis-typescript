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
/**
 * 
 * @export
 * @interface DownloadInfo
 */
export interface DownloadInfo {
    /**
     * 
     * @type {string}
     * @memberof DownloadInfo
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof DownloadInfo
     */
    last_modified?: string;
    /**
     * 
     * @type {string}
     * @memberof DownloadInfo
     */
    sha?: string;
    /**
     * 
     * @type {object}
     * @memberof DownloadInfo
     */
    download_links?: object;
}

export function DownloadInfoFromJSON(json: any): DownloadInfo {
    return DownloadInfoFromJSONTyped(json, false);
}

export function DownloadInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DownloadInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_at': !exists(json, 'created_at') ? undefined : json['created_at'],
        'last_modified': !exists(json, 'last_modified') ? undefined : json['last_modified'],
        'sha': !exists(json, 'sha') ? undefined : json['sha'],
        'download_links': !exists(json, 'download_links') ? undefined : json['download_links'],
    };
}

export function DownloadInfoToJSON(value?: DownloadInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': value.created_at,
        'last_modified': value.last_modified,
        'sha': value.sha,
        'download_links': value.download_links,
    };
}

