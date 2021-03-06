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
/**
 * 
 * @export
 * @interface UpdateChannelStatus
 */
export interface UpdateChannelStatus {
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof UpdateChannelStatus
     */
    status?: UpdateChannelStatusStatusEnum;
}

/**
* @export
* @enum {string}
*/
export enum UpdateChannelStatusStatusEnum {
    Inactive = 'INACTIVE',
    Active = 'ACTIVE'
}

export function UpdateChannelStatusFromJSON(json: any): UpdateChannelStatus {
    return UpdateChannelStatusFromJSONTyped(json, false);
}

export function UpdateChannelStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateChannelStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function UpdateChannelStatusToJSON(value?: UpdateChannelStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
    };
}

