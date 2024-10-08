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
    FilePermission,
    FilePermissionFromJSON,
    FilePermissionFromJSONTyped,
    FilePermissionToJSON,
} from './';

/**
 * 
 * @export
 * @interface FilePermissionResponse
 */
export interface FilePermissionResponse {
    /**
     * 
     * @type {string}
     * @memberof FilePermissionResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof FilePermissionResponse
     */
    message?: string;
    /**
     * 
     * @type {FilePermission}
     * @memberof FilePermissionResponse
     */
    result?: FilePermission;
    /**
     * 
     * @type {string}
     * @memberof FilePermissionResponse
     */
    version?: string;
    /**
     * 
     * @type {object}
     * @memberof FilePermissionResponse
     */
    metadata?: object;
}

export function FilePermissionResponseFromJSON(json: any): FilePermissionResponse {
    return FilePermissionResponseFromJSONTyped(json, false);
}

export function FilePermissionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilePermissionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'result': !exists(json, 'result') ? undefined : FilePermissionFromJSON(json['result']),
        'version': !exists(json, 'version') ? undefined : json['version'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function FilePermissionResponseToJSON(value?: FilePermissionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'result': FilePermissionToJSON(value.result),
        'version': value.version,
        'metadata': value.metadata,
    };
}

