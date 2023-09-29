/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 1.4.2
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ArgInputModeEnum,
    ArgInputModeEnumFromJSON,
    ArgInputModeEnumFromJSONTyped,
    ArgInputModeEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface AppArgSpec
 */
export interface AppArgSpec {
    /**
     * 
     * @type {string}
     * @memberof AppArgSpec
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppArgSpec
     */
    description?: string;
    /**
     * 
     * @type {ArgInputModeEnum}
     * @memberof AppArgSpec
     */
    inputMode?: ArgInputModeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppArgSpec
     */
    arg?: string;
    /**
     * 
     * @type {object}
     * @memberof AppArgSpec
     */
    notes?: object;
}

export function AppArgSpecFromJSON(json: any): AppArgSpec {
    return AppArgSpecFromJSONTyped(json, false);
}

export function AppArgSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppArgSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'inputMode': !exists(json, 'inputMode') ? undefined : ArgInputModeEnumFromJSON(json['inputMode']),
        'arg': !exists(json, 'arg') ? undefined : json['arg'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
    };
}

export function AppArgSpecToJSON(value?: AppArgSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'inputMode': ArgInputModeEnumToJSON(value.inputMode),
        'arg': value.arg,
        'notes': value.notes,
    };
}

