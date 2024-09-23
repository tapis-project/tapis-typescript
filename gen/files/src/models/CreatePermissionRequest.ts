/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Files API
 * The Tapis Files API provides for management of file resources on Tapis systems
 *
 * The version of the OpenAPI document: 1.3.6
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    PermEnum,
    PermEnumFromJSON,
    PermEnumFromJSONTyped,
    PermEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface CreatePermissionRequest
 */
export interface CreatePermissionRequest {
    /**
     * 
     * @type {string}
     * @memberof CreatePermissionRequest
     */
    username: string;
    /**
     * 
     * @type {PermEnum}
     * @memberof CreatePermissionRequest
     */
    permission: PermEnum;
}

export function CreatePermissionRequestFromJSON(json: any): CreatePermissionRequest {
    return CreatePermissionRequestFromJSONTyped(json, false);
}

export function CreatePermissionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePermissionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': json['username'],
        'permission': PermEnumFromJSON(json['permission']),
    };
}

export function CreatePermissionRequestToJSON(value?: CreatePermissionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'permission': PermEnumToJSON(value.permission),
    };
}

