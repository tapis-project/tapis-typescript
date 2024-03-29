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
    ETLTapisSystemRemoteInbox,
    ETLTapisSystemRemoteInboxFromJSON,
    ETLTapisSystemRemoteInboxFromJSONTyped,
    ETLTapisSystemRemoteInboxToJSON,
} from './';

/**
 * 
 * @export
 * @interface ETLRemoteInbox
 */
export interface ETLRemoteInbox {
    /**
     * 
     * @type {string}
     * @memberof ETLRemoteInbox
     */
    system_id: string;
    /**
     * 
     * @type {string}
     * @memberof ETLRemoteInbox
     */
    path: string;
}

export function ETLRemoteInboxFromJSON(json: any): ETLRemoteInbox {
    return ETLRemoteInboxFromJSONTyped(json, false);
}

export function ETLRemoteInboxFromJSONTyped(json: any, ignoreDiscriminator: boolean): ETLRemoteInbox {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'system_id': json['system_id'],
        'path': json['path'],
    };
}

export function ETLRemoteInboxToJSON(value?: ETLRemoteInbox | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'system_id': value.system_id,
        'path': value.path,
    };
}

