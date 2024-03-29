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
    EnumDestinationType,
    EnumDestinationTypeFromJSON,
    EnumDestinationTypeFromJSONTyped,
    EnumDestinationTypeToJSON,
    ReqBaseDestination,
    ReqBaseDestinationFromJSON,
    ReqBaseDestinationFromJSONTyped,
    ReqBaseDestinationToJSON,
    ReqDockerhubCred,
    ReqDockerhubCredFromJSON,
    ReqDockerhubCredFromJSONTyped,
    ReqDockerhubCredToJSON,
    ReqRegistryDestination,
    ReqRegistryDestinationFromJSON,
    ReqRegistryDestinationFromJSONTyped,
    ReqRegistryDestinationToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqDockerhubDestination
 */
export interface ReqDockerhubDestination {
    /**
     * 
     * @type {EnumDestinationType}
     * @memberof ReqDockerhubDestination
     */
    type: EnumDestinationType;
    /**
     * 
     * @type {ReqDockerhubCred}
     * @memberof ReqDockerhubDestination
     */
    credentials?: ReqDockerhubCred;
    /**
     * 
     * @type {string}
     * @memberof ReqDockerhubDestination
     */
    identity_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqDockerhubDestination
     */
    tag?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqDockerhubDestination
     */
    url: string;
}

export function ReqDockerhubDestinationFromJSON(json: any): ReqDockerhubDestination {
    return ReqDockerhubDestinationFromJSONTyped(json, false);
}

export function ReqDockerhubDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqDockerhubDestination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': EnumDestinationTypeFromJSON(json['type']),
        'credentials': !exists(json, 'credentials') ? undefined : ReqDockerhubCredFromJSON(json['credentials']),
        'identity_uuid': !exists(json, 'identity_uuid') ? undefined : json['identity_uuid'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
        'url': json['url'],
    };
}

export function ReqDockerhubDestinationToJSON(value?: ReqDockerhubDestination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': EnumDestinationTypeToJSON(value.type),
        'credentials': ReqDockerhubCredToJSON(value.credentials),
        'identity_uuid': value.identity_uuid,
        'tag': value.tag,
        'url': value.url,
    };
}

