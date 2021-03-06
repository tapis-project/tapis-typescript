/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Security API
 * The Tapis Security API provides access to the Tapis Security Kernel authorization and secrets facilities.
 *
 * The version of the OpenAPI document: 0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    SkProbe,
    SkProbeFromJSON,
    SkProbeFromJSONTyped,
    SkProbeToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespProbe
 */
export interface RespProbe {
    /**
     * 
     * @type {string}
     * @memberof RespProbe
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespProbe
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespProbe
     */
    version?: string;
    /**
     * 
     * @type {SkProbe}
     * @memberof RespProbe
     */
    result?: SkProbe;
}

export function RespProbeFromJSON(json: any): RespProbe {
    return RespProbeFromJSONTyped(json, false);
}

export function RespProbeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespProbe {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'result': !exists(json, 'result') ? undefined : SkProbeFromJSON(json['result']),
    };
}

export function RespProbeToJSON(value?: RespProbe | null): any {
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
        'result': SkProbeToJSON(value.result),
    };
}

