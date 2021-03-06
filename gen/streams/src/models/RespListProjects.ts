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
    Project,
    ProjectFromJSON,
    ProjectFromJSONTyped,
    ProjectToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespListProjects
 */
export interface RespListProjects {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespListProjects
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespListProjects
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespListProjects
     */
    status?: RespListProjectsStatusEnum;
    /**
     * 
     * @type {Array<Project>}
     * @memberof RespListProjects
     */
    result?: Array<Project>;
}

/**
* @export
* @enum {string}
*/
export enum RespListProjectsStatusEnum {
    Success = 'success'
}

export function RespListProjectsFromJSON(json: any): RespListProjects {
    return RespListProjectsFromJSONTyped(json, false);
}

export function RespListProjectsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespListProjects {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(ProjectFromJSON)),
    };
}

export function RespListProjectsToJSON(value?: RespListProjects | null): any {
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
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(ProjectToJSON)),
    };
}

