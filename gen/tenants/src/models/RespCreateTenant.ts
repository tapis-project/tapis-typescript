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
    Tenant,
    TenantFromJSON,
    TenantFromJSONTyped,
    TenantToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespCreateTenant
 */
export interface RespCreateTenant {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespCreateTenant
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespCreateTenant
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespCreateTenant
     */
    status?: RespCreateTenantStatusEnum;
    /**
     * 
     * @type {Tenant}
     * @memberof RespCreateTenant
     */
    result?: Tenant;
}

/**
* @export
* @enum {string}
*/
export enum RespCreateTenantStatusEnum {
    Success = 'success',
    Error = 'error'
}

export function RespCreateTenantFromJSON(json: any): RespCreateTenant {
    return RespCreateTenantFromJSONTyped(json, false);
}

export function RespCreateTenantFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespCreateTenant {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : TenantFromJSON(json['result']),
    };
}

export function RespCreateTenantToJSON(value?: RespCreateTenant | null): any {
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
        'result': TenantToJSON(value.result),
    };
}


