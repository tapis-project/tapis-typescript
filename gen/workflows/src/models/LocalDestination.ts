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
    BaseDestination,
    BaseDestinationFromJSON,
    BaseDestinationFromJSONTyped,
    BaseDestinationToJSON,
    EnumDestinationType,
    EnumDestinationTypeFromJSON,
    EnumDestinationTypeFromJSONTyped,
    EnumDestinationTypeToJSON,
    LocalDestinationAllOf,
    LocalDestinationAllOfFromJSON,
    LocalDestinationAllOfFromJSONTyped,
    LocalDestinationAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface LocalDestination
 */
export interface LocalDestination {
    /**
     * 
     * @type {EnumDestinationType}
     * @memberof LocalDestination
     */
    type: EnumDestinationType;
    /**
     * 
     * @type {string}
     * @memberof LocalDestination
     */
    filename?: string;
}

export function LocalDestinationFromJSON(json: any): LocalDestination {
    return LocalDestinationFromJSONTyped(json, false);
}

export function LocalDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocalDestination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': EnumDestinationTypeFromJSON(json['type']),
        'filename': !exists(json, 'filename') ? undefined : json['filename'],
    };
}

export function LocalDestinationToJSON(value?: LocalDestination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': EnumDestinationTypeToJSON(value.type),
        'filename': value.filename,
    };
}

