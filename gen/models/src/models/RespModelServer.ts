/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Machine Learning Hub - Models API
 * The Tapis Machine Learning Hub - Models API provides users access to machine learning models from HuggingFace within the Tapis framework.
 *
 * The version of the OpenAPI document: 0.0.2
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ModelServerInfo,
    ModelServerInfoFromJSON,
    ModelServerInfoFromJSONTyped,
    ModelServerInfoToJSON,
    RespBasic,
    RespBasicFromJSON,
    RespBasicFromJSONTyped,
    RespBasicToJSON,
    RespModelServerAllOf,
    RespModelServerAllOfFromJSON,
    RespModelServerAllOfFromJSONTyped,
    RespModelServerAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespModelServer
 */
export interface RespModelServer {
    /**
     * 
     * @type {string}
     * @memberof RespModelServer
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespModelServer
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespModelServer
     */
    version?: string;
    /**
     * 
     * @type {ModelServerInfo}
     * @memberof RespModelServer
     */
    result?: ModelServerInfo;
    /**
     * 
     * @type {object}
     * @memberof RespModelServer
     */
    metadata?: object;
}

export function RespModelServerFromJSON(json: any): RespModelServer {
    return RespModelServerFromJSONTyped(json, false);
}

export function RespModelServerFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespModelServer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'result': !exists(json, 'result') ? undefined : ModelServerInfoFromJSON(json['result']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function RespModelServerToJSON(value?: RespModelServer | null): any {
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
        'result': ModelServerInfoToJSON(value.result),
        'metadata': value.metadata,
    };
}

