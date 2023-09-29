/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 1.4.2
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
 * @interface ReqShareUpdate
 */
export interface ReqShareUpdate {
    /**
     * 
     * @type {Array<string>}
     * @memberof ReqShareUpdate
     */
    users: Array<string>;
}

export function ReqShareUpdateFromJSON(json: any): ReqShareUpdate {
    return ReqShareUpdateFromJSONTyped(json, false);
}

export function ReqShareUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqShareUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'users': json['users'],
    };
}

export function ReqShareUpdateToJSON(value?: ReqShareUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'users': value.users,
    };
}

