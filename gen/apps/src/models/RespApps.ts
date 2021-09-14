/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 1.0.0-rc1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    RespAppsMetadata,
    RespAppsMetadataFromJSON,
    RespAppsMetadataFromJSONTyped,
    RespAppsMetadataToJSON,
    TapisApp,
    TapisAppFromJSON,
    TapisAppFromJSONTyped,
    TapisAppToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespApps
 */
export interface RespApps {
    /**
     * 
     * @type {string}
     * @memberof RespApps
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespApps
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespApps
     */
    version?: string;
    /**
     * 
     * @type {Array<TapisApp>}
     * @memberof RespApps
     */
    result?: Array<TapisApp>;
    /**
     * 
     * @type {RespAppsMetadata}
     * @memberof RespApps
     */
    metadata?: RespAppsMetadata;
}

export function RespAppsFromJSON(json: any): RespApps {
    return RespAppsFromJSONTyped(json, false);
}

export function RespAppsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespApps {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(TapisAppFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : RespAppsMetadataFromJSON(json['metadata']),
    };
}

export function RespAppsToJSON(value?: RespApps | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'version': value.version,
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(TapisAppToJSON)),
        'metadata': RespAppsMetadataToJSON(value.metadata),
    };
}


