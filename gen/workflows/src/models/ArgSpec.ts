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
    ArgSpecAllOf,
    ArgSpecAllOfFromJSON,
    ArgSpecAllOfFromJSONTyped,
    ArgSpecAllOfToJSON,
    EnumTaskIOType,
    EnumTaskIOTypeFromJSON,
    EnumTaskIOTypeFromJSONTyped,
    EnumTaskIOTypeToJSON,
    SpecWithValue,
    SpecWithValueFromJSON,
    SpecWithValueFromJSONTyped,
    SpecWithValueToJSON,
    Value,
    ValueFromJSON,
    ValueFromJSONTyped,
    ValueToJSON,
    ValueFromSecretOrHost,
    ValueFromSecretOrHostFromJSON,
    ValueFromSecretOrHostFromJSONTyped,
    ValueFromSecretOrHostToJSON,
} from './';

/**
 * 
 * @export
 * @interface ArgSpec
 */
export interface ArgSpec {
    /**
     * 
     * @type {string}
     * @memberof ArgSpec
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ArgSpec
     */
    required?: boolean;
    /**
     * 
     * @type {EnumTaskIOType}
     * @memberof ArgSpec
     */
    type?: EnumTaskIOType;
    /**
     * 
     * @type {Value}
     * @memberof ArgSpec
     */
    value?: Value;
    /**
     * 
     * @type {ValueFromSecretOrHost}
     * @memberof ArgSpec
     */
    value_from?: ValueFromSecretOrHost;
}

export function ArgSpecFromJSON(json: any): ArgSpec {
    return ArgSpecFromJSONTyped(json, false);
}

export function ArgSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArgSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'type': !exists(json, 'type') ? undefined : EnumTaskIOTypeFromJSON(json['type']),
        'value': !exists(json, 'value') ? undefined : ValueFromJSON(json['value']),
        'value_from': !exists(json, 'value_from') ? undefined : ValueFromSecretOrHostFromJSON(json['value_from']),
    };
}

export function ArgSpecToJSON(value?: ArgSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'required': value.required,
        'type': EnumTaskIOTypeToJSON(value.type),
        'value': ValueToJSON(value.value),
        'value_from': ValueFromSecretOrHostToJSON(value.value_from),
    };
}

