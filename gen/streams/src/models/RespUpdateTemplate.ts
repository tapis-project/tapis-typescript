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
    Template,
    TemplateFromJSON,
    TemplateFromJSONTyped,
    TemplateToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespUpdateTemplate
 */
export interface RespUpdateTemplate {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespUpdateTemplate
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespUpdateTemplate
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespUpdateTemplate
     */
    status?: RespUpdateTemplateStatusEnum;
    /**
     * 
     * @type {Template}
     * @memberof RespUpdateTemplate
     */
    result?: Template;
}

/**
* @export
* @enum {string}
*/
export enum RespUpdateTemplateStatusEnum {
    Success = 'success'
}

export function RespUpdateTemplateFromJSON(json: any): RespUpdateTemplate {
    return RespUpdateTemplateFromJSONTyped(json, false);
}

export function RespUpdateTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespUpdateTemplate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : TemplateFromJSON(json['result']),
    };
}

export function RespUpdateTemplateToJSON(value?: RespUpdateTemplate | null): any {
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
        'result': TemplateToJSON(value.result),
    };
}

