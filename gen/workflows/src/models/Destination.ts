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
    EnumDestinationType,
    EnumDestinationTypeFromJSON,
    EnumDestinationTypeFromJSONTyped,
    EnumDestinationTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface Destination
 */
export interface Destination {
    /**
     * 
     * @type {any}
     * @memberof Destination
     */
    credentials?: any | null;
    /**
     * 
     * @type {string}
     * @memberof Destination
     */
    tag?: string;
    /**
     * 
     * @type {EnumDestinationType}
     * @memberof Destination
     */
    type?: EnumDestinationType;
    /**
     * 
     * @type {string}
     * @memberof Destination
     */
    url?: string;
}

export function DestinationFromJSON(json: any): Destination {
    return DestinationFromJSONTyped(json, false);
}

export function DestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Destination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'credentials': !exists(json, 'credentials') ? undefined : json['credentials'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
        'type': !exists(json, 'type') ? undefined : EnumDestinationTypeFromJSON(json['type']),
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function DestinationToJSON(value?: Destination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'credentials': value.credentials,
        'tag': value.tag,
        'type': EnumDestinationTypeToJSON(value.type),
        'url': value.url,
    };
}

