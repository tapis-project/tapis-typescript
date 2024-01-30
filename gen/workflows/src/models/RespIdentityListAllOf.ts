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
    Identity,
    IdentityFromJSON,
    IdentityFromJSONTyped,
    IdentityToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespIdentityListAllOf
 */
export interface RespIdentityListAllOf {
    /**
     * 
     * @type {Array<Identity>}
     * @memberof RespIdentityListAllOf
     */
    result?: Array<Identity>;
}

export function RespIdentityListAllOfFromJSON(json: any): RespIdentityListAllOf {
    return RespIdentityListAllOfFromJSONTyped(json, false);
}

export function RespIdentityListAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespIdentityListAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(IdentityFromJSON)),
    };
}

export function RespIdentityListAllOfToJSON(value?: RespIdentityListAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(IdentityToJSON)),
    };
}

