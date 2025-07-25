/* tslint:disable */
/* eslint-disable */
/**
 * Authenticator
 * REST API and web server providing authentication for a Tapis v3 instance.
 *
 * The version of the OpenAPI document: 1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    TenantConfig,
    TenantConfigFromJSON,
    TenantConfigFromJSONTyped,
    TenantConfigToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespUpdateConfig
 */
export interface RespUpdateConfig {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespUpdateConfig
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespUpdateConfig
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespUpdateConfig
     */
    status?: RespUpdateConfigStatusEnum;
    /**
     * Metadata about the result object, including pagination information
     * @type {object}
     * @memberof RespUpdateConfig
     */
    metadata?: object;
    /**
     * 
     * @type {TenantConfig}
     * @memberof RespUpdateConfig
     */
    result?: TenantConfig;
}

/**
* @export
* @enum {string}
*/
export enum RespUpdateConfigStatusEnum {
    Success = 'success',
    Failure = 'failure'
}

export function RespUpdateConfigFromJSON(json: any): RespUpdateConfig {
    return RespUpdateConfigFromJSONTyped(json, false);
}

export function RespUpdateConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespUpdateConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'result': !exists(json, 'result') ? undefined : TenantConfigFromJSON(json['result']),
    };
}

export function RespUpdateConfigToJSON(value?: RespUpdateConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'message': value.message,
        'status': value.status,
        'metadata': value.metadata,
        'result': TenantConfigToJSON(value.result),
    };
}

