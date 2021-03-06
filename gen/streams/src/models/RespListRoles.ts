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
    Roles,
    RolesFromJSON,
    RolesFromJSONTyped,
    RolesToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespListRoles
 */
export interface RespListRoles {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespListRoles
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespListRoles
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespListRoles
     */
    status?: RespListRolesStatusEnum;
    /**
     * 
     * @type {Array<Roles>}
     * @memberof RespListRoles
     */
    result?: Array<Roles>;
}

/**
* @export
* @enum {string}
*/
export enum RespListRolesStatusEnum {
    Success = 'success'
}

export function RespListRolesFromJSON(json: any): RespListRoles {
    return RespListRolesFromJSONTyped(json, false);
}

export function RespListRolesFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespListRoles {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(RolesFromJSON)),
    };
}

export function RespListRolesToJSON(value?: RespListRoles | null): any {
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
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(RolesToJSON)),
    };
}

