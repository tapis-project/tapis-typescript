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
    GroupSecret,
    GroupSecretFromJSON,
    GroupSecretFromJSONTyped,
    GroupSecretToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespGroupSecretAllOf
 */
export interface RespGroupSecretAllOf {
    /**
     * 
     * @type {GroupSecret}
     * @memberof RespGroupSecretAllOf
     */
    result?: GroupSecret;
}

export function RespGroupSecretAllOfFromJSON(json: any): RespGroupSecretAllOf {
    return RespGroupSecretAllOfFromJSONTyped(json, false);
}

export function RespGroupSecretAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespGroupSecretAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : GroupSecretFromJSON(json['result']),
    };
}

export function RespGroupSecretAllOfToJSON(value?: RespGroupSecretAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': GroupSecretToJSON(value.result),
    };
}

