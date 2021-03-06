/* tslint:disable */
/* eslint-disable */
/**
 * Tenants API
 * Manage Tapis Tenants.
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
    Owner,
    OwnerFromJSON,
    OwnerFromJSONTyped,
    OwnerToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespListOwners
 */
export interface RespListOwners {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespListOwners
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespListOwners
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespListOwners
     */
    status?: RespListOwnersStatusEnum;
    /**
     * 
     * @type {Array<Owner>}
     * @memberof RespListOwners
     */
    result?: Array<Owner>;
}

/**
* @export
* @enum {string}
*/
export enum RespListOwnersStatusEnum {
    Success = 'success',
    Error = 'error'
}

export function RespListOwnersFromJSON(json: any): RespListOwners {
    return RespListOwnersFromJSONTyped(json, false);
}

export function RespListOwnersFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespListOwners {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(OwnerFromJSON)),
    };
}

export function RespListOwnersToJSON(value?: RespListOwners | null): any {
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
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(OwnerToJSON)),
    };
}

