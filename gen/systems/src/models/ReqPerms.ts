/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions, credentials and Scheduler Profiles.
 *
 * The version of the OpenAPI document: 1.7.0
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
 * @interface ReqPerms
 */
export interface ReqPerms {
    /**
     * 
     * @type {Array<string>}
     * @memberof ReqPerms
     */
    permissions: Array<string>;
}

export function ReqPermsFromJSON(json: any): ReqPerms {
    return ReqPermsFromJSONTyped(json, false);
}

export function ReqPermsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqPerms {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'permissions': json['permissions'],
    };
}

export function ReqPermsToJSON(value?: ReqPerms | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'permissions': value.permissions,
    };
}

