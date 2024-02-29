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
    ReqDockerhubCred,
    ReqDockerhubCredFromJSON,
    ReqDockerhubCredFromJSONTyped,
    ReqDockerhubCredToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqRegistryDestinationAllOf
 */
export interface ReqRegistryDestinationAllOf {
    /**
     * 
     * @type {ReqDockerhubCred}
     * @memberof ReqRegistryDestinationAllOf
     */
    credentials?: ReqDockerhubCred;
    /**
     * 
     * @type {string}
     * @memberof ReqRegistryDestinationAllOf
     */
    identity_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqRegistryDestinationAllOf
     */
    tag?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqRegistryDestinationAllOf
     */
    url: string;
}

export function ReqRegistryDestinationAllOfFromJSON(json: any): ReqRegistryDestinationAllOf {
    return ReqRegistryDestinationAllOfFromJSONTyped(json, false);
}

export function ReqRegistryDestinationAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqRegistryDestinationAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'credentials': !exists(json, 'credentials') ? undefined : ReqDockerhubCredFromJSON(json['credentials']),
        'identity_uuid': !exists(json, 'identity_uuid') ? undefined : json['identity_uuid'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
        'url': json['url'],
    };
}

export function ReqRegistryDestinationAllOfToJSON(value?: ReqRegistryDestinationAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'credentials': ReqDockerhubCredToJSON(value.credentials),
        'identity_uuid': value.identity_uuid,
        'tag': value.tag,
        'url': value.url,
    };
}
