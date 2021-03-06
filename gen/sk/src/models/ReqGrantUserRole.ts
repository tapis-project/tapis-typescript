/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Security API
 * The Tapis Security API provides access to the Tapis Security Kernel authorization and secrets facilities.
 *
 * The version of the OpenAPI document: 0.1
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
 * @interface ReqGrantUserRole
 */
export interface ReqGrantUserRole {
    /**
     * 
     * @type {string}
     * @memberof ReqGrantUserRole
     */
    tenant?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqGrantUserRole
     */
    user?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqGrantUserRole
     */
    roleName?: string;
}

export function ReqGrantUserRoleFromJSON(json: any): ReqGrantUserRole {
    return ReqGrantUserRoleFromJSONTyped(json, false);
}

export function ReqGrantUserRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqGrantUserRole {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenant': !exists(json, 'tenant') ? undefined : json['tenant'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'roleName': !exists(json, 'roleName') ? undefined : json['roleName'],
    };
}

export function ReqGrantUserRoleToJSON(value?: ReqGrantUserRole | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tenant': value.tenant,
        'user': value.user,
        'roleName': value.roleName,
    };
}

