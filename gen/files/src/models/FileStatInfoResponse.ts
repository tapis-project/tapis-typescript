/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Files API
 * The Tapis Files API provides for management of file resources on Tapis systems
 *
 * The version of the OpenAPI document: 1.3.6
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    FileStatInfo,
    FileStatInfoFromJSON,
    FileStatInfoFromJSONTyped,
    FileStatInfoToJSON,
} from './';

/**
 * 
 * @export
 * @interface FileStatInfoResponse
 */
export interface FileStatInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof FileStatInfoResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof FileStatInfoResponse
     */
    message?: string;
    /**
     * 
     * @type {FileStatInfo}
     * @memberof FileStatInfoResponse
     */
    result?: FileStatInfo;
    /**
     * 
     * @type {string}
     * @memberof FileStatInfoResponse
     */
    version?: string;
    /**
     * 
     * @type {object}
     * @memberof FileStatInfoResponse
     */
    metadata?: object;
}

export function FileStatInfoResponseFromJSON(json: any): FileStatInfoResponse {
    return FileStatInfoResponseFromJSONTyped(json, false);
}

export function FileStatInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileStatInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'result': !exists(json, 'result') ? undefined : FileStatInfoFromJSON(json['result']),
        'version': !exists(json, 'version') ? undefined : json['version'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function FileStatInfoResponseToJSON(value?: FileStatInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'result': FileStatInfoToJSON(value.result),
        'version': value.version,
        'metadata': value.metadata,
    };
}

