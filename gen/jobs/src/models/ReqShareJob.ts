/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Jobs API
 * The Tapis Jobs API executes jobs on Tapis systems.
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
 * @interface ReqShareJob
 */
export interface ReqShareJob {
    /**
     * 
     * @type {string}
     * @memberof ReqShareJob
     */
    grantee?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReqShareJob
     */
    jobResource?: Array<ReqShareJobJobResourceEnum>;
    /**
     * 
     * @type {string}
     * @memberof ReqShareJob
     */
    jobPermission?: ReqShareJobJobPermissionEnum;
}

/**
* @export
* @enum {string}
*/
export enum ReqShareJobJobResourceEnum {
    History = 'JOB_HISTORY',
    ResubmitRequest = 'JOB_RESUBMIT_REQUEST',
    Output = 'JOB_OUTPUT',
    Input = 'JOB_INPUT'
}/**
* @export
* @enum {string}
*/
export enum ReqShareJobJobPermissionEnum {
    Read = 'READ'
}

export function ReqShareJobFromJSON(json: any): ReqShareJob {
    return ReqShareJobFromJSONTyped(json, false);
}

export function ReqShareJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqShareJob {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'grantee': !exists(json, 'grantee') ? undefined : json['grantee'],
        'jobResource': !exists(json, 'jobResource') ? undefined : json['jobResource'],
        'jobPermission': !exists(json, 'jobPermission') ? undefined : json['jobPermission'],
    };
}

export function ReqShareJobToJSON(value?: ReqShareJob | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'grantee': value.grantee,
        'jobResource': value.jobResource,
        'jobPermission': value.jobPermission,
    };
}

