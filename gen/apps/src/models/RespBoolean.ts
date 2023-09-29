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
    ResultBoolean,
    ResultBooleanFromJSON,
    ResultBooleanFromJSONTyped,
    ResultBooleanToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespBoolean
 */
export interface RespBoolean {
    /**
     * 
     * @type {string}
     * @memberof RespBoolean
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespBoolean
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespBoolean
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof RespBoolean
     */
    commit?: string;
    /**
     * 
     * @type {string}
     * @memberof RespBoolean
     */
    build?: string;
    /**
     * 
     * @type {ResultBoolean}
     * @memberof RespBoolean
     */
    result?: ResultBoolean;
    /**
     * 
     * @type {object}
     * @memberof RespBoolean
     */
    metadata?: object;
}

export function RespBooleanFromJSON(json: any): RespBoolean {
    return RespBooleanFromJSONTyped(json, false);
}

export function RespBooleanFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespBoolean {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'commit': !exists(json, 'commit') ? undefined : json['commit'],
        'build': !exists(json, 'build') ? undefined : json['build'],
        'result': !exists(json, 'result') ? undefined : ResultBooleanFromJSON(json['result']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function RespBooleanToJSON(value?: RespBoolean | null): any {
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
        'commit': value.commit,
        'build': value.build,
        'result': ResultBooleanToJSON(value.result),
        'metadata': value.metadata,
    };
}

