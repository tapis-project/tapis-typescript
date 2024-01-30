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
    Group,
    GroupFromJSON,
    GroupFromJSONTyped,
    GroupToJSON,
    RespGroupListAllOf,
    RespGroupListAllOfFromJSON,
    RespGroupListAllOfFromJSONTyped,
    RespGroupListAllOfToJSON,
    RespList,
    RespListFromJSON,
    RespListFromJSONTyped,
    RespListToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespGroupList
 */
export interface RespGroupList {
    /**
     * 
     * @type {string}
     * @memberof RespGroupList
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof RespGroupList
     */
    message: string;
    /**
     * 
     * @type {Array<Group>}
     * @memberof RespGroupList
     */
    result: Array<Group>;
    /**
     * 
     * @type {string}
     * @memberof RespGroupList
     */
    version: string;
    /**
     * 
     * @type {object}
     * @memberof RespGroupList
     */
    metadata: object;
}

export function RespGroupListFromJSON(json: any): RespGroupList {
    return RespGroupListFromJSONTyped(json, false);
}

export function RespGroupListFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespGroupList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
        'result': ((json['result'] as Array<any>).map(GroupFromJSON)),
        'version': json['version'],
        'metadata': json['metadata'],
    };
}

export function RespGroupListToJSON(value?: RespGroupList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'result': ((value.result as Array<any>).map(GroupToJSON)),
        'version': value.version,
        'metadata': value.metadata,
    };
}

