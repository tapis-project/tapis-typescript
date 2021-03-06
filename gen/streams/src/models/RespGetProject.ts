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
 * @interface RespGetProject
 */
export interface RespGetProject {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespGetProject
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespGetProject
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespGetProject
     */
    status?: RespGetProjectStatusEnum;
    /**
     * 
     * @type {Project}
     * @memberof RespGetProject
     */
    result?: Project;
}

/**
* @export
* @enum {string}
*/
export enum RespGetProjectStatusEnum {
    Success = 'success'
}

export function RespGetProjectFromJSON(json: any): RespGetProject {
    return RespGetProjectFromJSONTyped(json, false);
}

export function RespGetProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespGetProject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ProjectFromJSON(json['result']),
    };
}

export function RespGetProjectToJSON(value?: RespGetProject | null): any {
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
        'result': ProjectToJSON(value.result),
    };
}

