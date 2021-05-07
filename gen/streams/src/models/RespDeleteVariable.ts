/* tslint:disable */
/* eslint-disable */
/**
 * Streams API
 * Manage Tapis Streams API.
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
    Variable,
    VariableFromJSON,
    VariableFromJSONTyped,
    VariableToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespDeleteVariable
 */
export interface RespDeleteVariable {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespDeleteVariable
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespDeleteVariable
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespDeleteVariable
     */
    status?: RespDeleteVariableStatusEnum;
    /**
     * 
     * @type {Variable}
     * @memberof RespDeleteVariable
     */
    result?: Variable;
}

/**
* @export
* @enum {string}
*/
export enum RespDeleteVariableStatusEnum {
    Success = 'success'
}

export function RespDeleteVariableFromJSON(json: any): RespDeleteVariable {
    return RespDeleteVariableFromJSONTyped(json, false);
}

export function RespDeleteVariableFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespDeleteVariable {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : VariableFromJSON(json['result']),
    };
}

export function RespDeleteVariableToJSON(value?: RespDeleteVariable | null): any {
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
        'result': VariableToJSON(value.result),
    };
}


