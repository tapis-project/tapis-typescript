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
    DockerhubCred,
    DockerhubCredFromJSON,
    DockerhubCredFromJSONTyped,
    DockerhubCredToJSON,
    EnumDestinationType,
    EnumDestinationTypeFromJSON,
    EnumDestinationTypeFromJSONTyped,
    EnumDestinationTypeToJSON,
    RegistryDestinationAllOf,
    RegistryDestinationAllOfFromJSON,
    RegistryDestinationAllOfFromJSONTyped,
    RegistryDestinationAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface RegistryDestination
 */
export interface RegistryDestination {
    /**
     * 
     * @type {EnumDestinationType}
     * @memberof RegistryDestination
     */
    type: EnumDestinationType;
    /**
     * 
     * @type {DockerhubCred}
     * @memberof RegistryDestination
     */
    credentials?: DockerhubCred;
    /**
     * 
     * @type {string}
     * @memberof RegistryDestination
     */
    tag?: string;
    /**
     * 
     * @type {string}
     * @memberof RegistryDestination
     */
    url?: string;
}

export function RegistryDestinationFromJSON(json: any): RegistryDestination {
    return RegistryDestinationFromJSONTyped(json, false);
}

export function RegistryDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistryDestination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': EnumDestinationTypeFromJSON(json['type']),
        'credentials': !exists(json, 'credentials') ? undefined : DockerhubCredFromJSON(json['credentials']),
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function RegistryDestinationToJSON(value?: RegistryDestination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': EnumDestinationTypeToJSON(value.type),
        'credentials': DockerhubCredToJSON(value.credentials),
        'tag': value.tag,
        'url': value.url,
    };
}

