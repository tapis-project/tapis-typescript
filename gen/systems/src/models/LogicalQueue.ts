/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including transfer methods, permissions and credentials.
 *
 * The version of the OpenAPI document: 0.0.1
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
 * @interface LogicalQueue
 */
export interface LogicalQueue {
    /**
     * 
     * @type {string}
     * @memberof LogicalQueue
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof LogicalQueue
     */
    hpcQueueName?: string;
    /**
     * 
     * @type {number}
     * @memberof LogicalQueue
     */
    maxJobs?: number;
    /**
     * 
     * @type {number}
     * @memberof LogicalQueue
     */
    maxJobsPerUser?: number;
    /**
     * 
     * @type {number}
     * @memberof LogicalQueue
     */
    maxNodeCount?: number;
    /**
     * 
     * @type {number}
     * @memberof LogicalQueue
     */
    maxCoresPerNode?: number;
    /**
     * 
     * @type {number}
     * @memberof LogicalQueue
     */
    maxMemoryMB?: number;
    /**
     * 
     * @type {number}
     * @memberof LogicalQueue
     */
    maxMinutes?: number;
}

export function LogicalQueueFromJSON(json: any): LogicalQueue {
    return LogicalQueueFromJSONTyped(json, false);
}

export function LogicalQueueFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogicalQueue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'hpcQueueName': !exists(json, 'hpcQueueName') ? undefined : json['hpcQueueName'],
        'maxJobs': !exists(json, 'maxJobs') ? undefined : json['maxJobs'],
        'maxJobsPerUser': !exists(json, 'maxJobsPerUser') ? undefined : json['maxJobsPerUser'],
        'maxNodeCount': !exists(json, 'maxNodeCount') ? undefined : json['maxNodeCount'],
        'maxCoresPerNode': !exists(json, 'maxCoresPerNode') ? undefined : json['maxCoresPerNode'],
        'maxMemoryMB': !exists(json, 'maxMemoryMB') ? undefined : json['maxMemoryMB'],
        'maxMinutes': !exists(json, 'maxMinutes') ? undefined : json['maxMinutes'],
    };
}

export function LogicalQueueToJSON(value?: LogicalQueue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'hpcQueueName': value.hpcQueueName,
        'maxJobs': value.maxJobs,
        'maxJobsPerUser': value.maxJobsPerUser,
        'maxNodeCount': value.maxNodeCount,
        'maxCoresPerNode': value.maxCoresPerNode,
        'maxMemoryMB': value.maxMemoryMB,
        'maxMinutes': value.maxMinutes,
    };
}


