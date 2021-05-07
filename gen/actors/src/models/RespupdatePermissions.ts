/* tslint:disable */
/* eslint-disable */
/**
 * Abaco API
 * Abaco (Actor Based Containers) is an API and distributed computing platform funded by the National Science Foundation to provide Functions-as-a-service to the research computing community. Abaco leverages Docker containers and the Actor Model of Concurrent Computation to provide generic function primitives that are portable, composable and scalable.
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
 * @interface RespUpdatePermissions
 */
export interface RespUpdatePermissions {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespUpdatePermissions
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespUpdatePermissions
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespUpdatePermissions
     */
    status?: RespUpdatePermissionsStatusEnum;
    /**
     * Key-value pairs where the key is the username and the value is the permission level.
     * @type {object}
     * @memberof RespUpdatePermissions
     */
    result?: object;
}

/**
* @export
* @enum {string}
*/
export enum RespUpdatePermissionsStatusEnum {
    Success = 'success',
    Failure = 'failure'
}

export function RespUpdatePermissionsFromJSON(json: any): RespUpdatePermissions {
    return RespUpdatePermissionsFromJSONTyped(json, false);
}

export function RespUpdatePermissionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespUpdatePermissions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function RespUpdatePermissionsToJSON(value?: RespUpdatePermissions | null): any {
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
        'result': value.result,
    };
}


