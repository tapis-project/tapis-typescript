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
    TransferTask,
    TransferTaskFromJSON,
    TransferTaskFromJSONTyped,
    TransferTaskToJSON,
} from './';

/**
 * 
 * @export
 * @interface TransferTaskListResponse
 */
export interface TransferTaskListResponse {
    /**
     * 
     * @type {string}
     * @memberof TransferTaskListResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferTaskListResponse
     */
    message?: string;
    /**
     * 
     * @type {Array<TransferTask>}
     * @memberof TransferTaskListResponse
     */
    result?: Array<TransferTask>;
    /**
     * 
     * @type {string}
     * @memberof TransferTaskListResponse
     */
    version?: string;
    /**
     * 
     * @type {object}
     * @memberof TransferTaskListResponse
     */
    metadata?: object;
}

export function TransferTaskListResponseFromJSON(json: any): TransferTaskListResponse {
    return TransferTaskListResponseFromJSONTyped(json, false);
}

export function TransferTaskListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferTaskListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(TransferTaskFromJSON)),
        'version': !exists(json, 'version') ? undefined : json['version'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function TransferTaskListResponseToJSON(value?: TransferTaskListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(TransferTaskToJSON)),
        'version': value.version,
        'metadata': value.metadata,
    };
}

