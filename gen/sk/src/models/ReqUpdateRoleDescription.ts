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
 * @interface ReqUpdateRoleDescription
 */
export interface ReqUpdateRoleDescription {
    /**
     * 
     * @type {string}
     * @memberof ReqUpdateRoleDescription
     */
    roleTenant?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqUpdateRoleDescription
     */
    newDescription?: string;
}

export function ReqUpdateRoleDescriptionFromJSON(json: any): ReqUpdateRoleDescription {
    return ReqUpdateRoleDescriptionFromJSONTyped(json, false);
}

export function ReqUpdateRoleDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqUpdateRoleDescription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roleTenant': !exists(json, 'roleTenant') ? undefined : json['roleTenant'],
        'newDescription': !exists(json, 'newDescription') ? undefined : json['newDescription'],
    };
}

export function ReqUpdateRoleDescriptionToJSON(value?: ReqUpdateRoleDescription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roleTenant': value.roleTenant,
        'newDescription': value.newDescription,
    };
}

