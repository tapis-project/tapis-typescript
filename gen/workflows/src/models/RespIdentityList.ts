/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Identity,
    IdentityFromJSON,
    IdentityFromJSONTyped,
    IdentityToJSON,
    RespIdentityListAllOf,
    RespIdentityListAllOfFromJSON,
    RespIdentityListAllOfFromJSONTyped,
    RespIdentityListAllOfToJSON,
    RespList,
    RespListFromJSON,
    RespListFromJSONTyped,
    RespListToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespIdentityList
 */
export interface RespIdentityList {
    /**
     * 
     * @type {string}
     * @memberof RespIdentityList
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof RespIdentityList
     */
    message: string;
    /**
     * 
     * @type {Array<Identity>}
     * @memberof RespIdentityList
     */
    result: Array<Identity>;
    /**
     * 
     * @type {string}
     * @memberof RespIdentityList
     */
    version: string;
    /**
     * 
     * @type {object}
     * @memberof RespIdentityList
     */
    metadata: object;
}

export function RespIdentityListFromJSON(json: any): RespIdentityList {
    return RespIdentityListFromJSONTyped(json, false);
}

export function RespIdentityListFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespIdentityList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
        'result': ((json['result'] as Array<any>).map(IdentityFromJSON)),
        'version': json['version'],
        'metadata': json['metadata'],
    };
}

export function RespIdentityListToJSON(value?: RespIdentityList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'result': ((value.result as Array<any>).map(IdentityToJSON)),
        'version': value.version,
        'metadata': value.metadata,
    };
}

