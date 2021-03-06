/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Files API
 * My API
 *
 * The version of the OpenAPI document: 0.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    TransferTaskChild,
    TransferTaskChildFromJSON,
    TransferTaskChildFromJSONTyped,
    TransferTaskChildToJSON,
} from './';

/**
 * 
 * @export
 * @interface TransferTaskParent
 */
export interface TransferTaskParent {
    /**
     * 
     * @type {number}
     * @memberof TransferTaskParent
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferTaskParent
     */
    tenantId?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferTaskParent
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferTaskParent
     */
    sourceURI?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferTaskParent
     */
    destinationURI?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferTaskParent
     */
    totalBytes?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferTaskParent
     */
    bytesTransferred?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferTaskParent
     */
    taskId?: number;
    /**
     * 
     * @type {Array<TransferTaskChild>}
     * @memberof TransferTaskParent
     */
    children?: Array<TransferTaskChild>;
    /**
     * 
     * @type {string}
     * @memberof TransferTaskParent
     */
    errorMessage?: string;
    /**
     * Unique ID of the task.
     * @type {string}
     * @memberof TransferTaskParent
     */
    uuid?: string;
    /**
     * The status of the task, such as ACCEPTED, IN_PROGRESS, COMPLETED, CANCELLED
     * @type {string}
     * @memberof TransferTaskParent
     */
    status?: TransferTaskParentStatusEnum;
    /**
     * 
     * @type {Date}
     * @memberof TransferTaskParent
     */
    created?: Date;
    /**
     * 
     * @type {Date}
     * @memberof TransferTaskParent
     */
    startTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof TransferTaskParent
     */
    endTime?: Date;
}

/**
* @export
* @enum {string}
*/
export enum TransferTaskParentStatusEnum {
    Accepted = 'ACCEPTED',
    Staging = 'STAGING',
    Staged = 'STAGED',
    InProgress = 'IN_PROGRESS',
    Completed = 'COMPLETED',
    Cancelled = 'CANCELLED',
    Failed = 'FAILED',
    Paused = 'PAUSED'
}

export function TransferTaskParentFromJSON(json: any): TransferTaskParent {
    return TransferTaskParentFromJSONTyped(json, false);
}

export function TransferTaskParentFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferTaskParent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'sourceURI': !exists(json, 'sourceURI') ? undefined : json['sourceURI'],
        'destinationURI': !exists(json, 'destinationURI') ? undefined : json['destinationURI'],
        'totalBytes': !exists(json, 'totalBytes') ? undefined : json['totalBytes'],
        'bytesTransferred': !exists(json, 'bytesTransferred') ? undefined : json['bytesTransferred'],
        'taskId': !exists(json, 'taskId') ? undefined : json['taskId'],
        'children': !exists(json, 'children') ? undefined : ((json['children'] as Array<any>).map(TransferTaskChildFromJSON)),
        'errorMessage': !exists(json, 'errorMessage') ? undefined : json['errorMessage'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'created': !exists(json, 'created') ? undefined : (new Date(json['created'])),
        'startTime': !exists(json, 'startTime') ? undefined : (new Date(json['startTime'])),
        'endTime': !exists(json, 'endTime') ? undefined : (new Date(json['endTime'])),
    };
}

export function TransferTaskParentToJSON(value?: TransferTaskParent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'tenantId': value.tenantId,
        'username': value.username,
        'sourceURI': value.sourceURI,
        'destinationURI': value.destinationURI,
        'totalBytes': value.totalBytes,
        'bytesTransferred': value.bytesTransferred,
        'taskId': value.taskId,
        'children': value.children === undefined ? undefined : ((value.children as Array<any>).map(TransferTaskChildToJSON)),
        'errorMessage': value.errorMessage,
        'uuid': value.uuid,
        'status': value.status,
        'created': value.created === undefined ? undefined : (value.created.toISOString()),
        'startTime': value.startTime === undefined ? undefined : (value.startTime.toISOString()),
        'endTime': value.endTime === undefined ? undefined : (value.endTime.toISOString()),
    };
}

