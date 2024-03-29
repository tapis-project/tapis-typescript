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
import {
    GroupUser,
    GroupUserFromJSON,
    GroupUserFromJSONTyped,
    GroupUserToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespGroupUserAllOf
 */
export interface RespGroupUserAllOf {
    /**
     * 
     * @type {GroupUser}
     * @memberof RespGroupUserAllOf
     */
    result?: GroupUser;
}

export function RespGroupUserAllOfFromJSON(json: any): RespGroupUserAllOf {
    return RespGroupUserAllOfFromJSONTyped(json, false);
}

export function RespGroupUserAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespGroupUserAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : GroupUserFromJSON(json['result']),
    };
}

export function RespGroupUserAllOfToJSON(value?: RespGroupUserAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': GroupUserToJSON(value.result),
    };
}

