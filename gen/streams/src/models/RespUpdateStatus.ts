/* tslint:disable */
/* eslint-disable */
/**
 * Streams API
 * Manage Tapis Streams API.
 *
 * The version of the OpenAPI document: 1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Channel,
    ChannelFromJSON,
    ChannelFromJSONTyped,
    ChannelToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespUpdateStatus
 */
export interface RespUpdateStatus {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespUpdateStatus
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespUpdateStatus
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespUpdateStatus
     */
    status?: RespUpdateStatusStatusEnum;
    /**
     * 
     * @type {Channel}
     * @memberof RespUpdateStatus
     */
    result?: Channel;
}

/**
* @export
* @enum {string}
*/
export enum RespUpdateStatusStatusEnum {
    Success = 'success'
}

export function RespUpdateStatusFromJSON(json: any): RespUpdateStatus {
    return RespUpdateStatusFromJSONTyped(json, false);
}

export function RespUpdateStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespUpdateStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ChannelFromJSON(json['result']),
    };
}

export function RespUpdateStatusToJSON(value?: RespUpdateStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'message': value.message,
        'status': value.status,
        'result': ChannelToJSON(value.result),
    };
}


