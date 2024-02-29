/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.6.0
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
 * @interface ReqGroupUsers
 */
export interface ReqGroupUsers {
    /**
     * 
     * @type {string}
     * @memberof ReqGroupUsers
     */
    username?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReqGroupUsers
     */
    is_admin?: boolean;
}

export function ReqGroupUsersFromJSON(json: any): ReqGroupUsers {
    return ReqGroupUsersFromJSONTyped(json, false);
}

export function ReqGroupUsersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqGroupUsers {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': !exists(json, 'username') ? undefined : json['username'],
        'is_admin': !exists(json, 'is_admin') ? undefined : json['is_admin'],
    };
}

export function ReqGroupUsersToJSON(value?: ReqGroupUsers | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'is_admin': value.is_admin,
    };
}
