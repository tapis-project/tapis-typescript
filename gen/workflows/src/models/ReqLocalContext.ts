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
    EnumContextType,
    EnumContextTypeFromJSON,
    EnumContextTypeFromJSONTyped,
    EnumContextTypeToJSON,
    ReqBaseContext,
    ReqBaseContextFromJSON,
    ReqBaseContextFromJSONTyped,
    ReqBaseContextToJSON,
    ReqLocalContextAllOf,
    ReqLocalContextAllOfFromJSON,
    ReqLocalContextAllOfFromJSONTyped,
    ReqLocalContextAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqLocalContext
 */
export interface ReqLocalContext {
    /**
     * 
     * @type {EnumContextType}
     * @memberof ReqLocalContext
     */
    type: EnumContextType;
    /**
     * 
     * @type {string}
     * @memberof ReqLocalContext
     */
    filename: string;
}

export function ReqLocalContextFromJSON(json: any): ReqLocalContext {
    return ReqLocalContextFromJSONTyped(json, false);
}

export function ReqLocalContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqLocalContext {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': EnumContextTypeFromJSON(json['type']),
        'filename': json['filename'],
    };
}

export function ReqLocalContextToJSON(value?: ReqLocalContext | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': EnumContextTypeToJSON(value.type),
        'filename': value.filename,
    };
}

