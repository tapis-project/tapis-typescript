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
    ValueFromSecretOrHost,
    ValueFromSecretOrHostFromJSON,
    ValueFromSecretOrHostFromJSONTyped,
    ValueFromSecretOrHostToJSON,
} from './';

/**
 * 
 * @export
 * @interface ArgSpecAllOf
 */
export interface ArgSpecAllOf {
    /**
     * 
     * @type {ValueFromSecretOrHost}
     * @memberof ArgSpecAllOf
     */
    value_from?: ValueFromSecretOrHost;
}

export function ArgSpecAllOfFromJSON(json: any): ArgSpecAllOf {
    return ArgSpecAllOfFromJSONTyped(json, false);
}

export function ArgSpecAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArgSpecAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value_from': !exists(json, 'value_from') ? undefined : ValueFromSecretOrHostFromJSON(json['value_from']),
    };
}

export function ArgSpecAllOfToJSON(value?: ArgSpecAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value_from': ValueFromSecretOrHostToJSON(value.value_from),
    };
}

