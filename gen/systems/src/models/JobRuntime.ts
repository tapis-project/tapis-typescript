/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including transfer methods, permissions and credentials.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    RuntimeTypeEnum,
    RuntimeTypeEnumFromJSON,
    RuntimeTypeEnumFromJSONTyped,
    RuntimeTypeEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface JobRuntime
 */
export interface JobRuntime {
    /**
     * 
     * @type {RuntimeTypeEnum}
     * @memberof JobRuntime
     */
    runtimeType?: RuntimeTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof JobRuntime
     */
    version?: string;
}

export function JobRuntimeFromJSON(json: any): JobRuntime {
    return JobRuntimeFromJSONTyped(json, false);
}

export function JobRuntimeFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobRuntime {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'runtimeType': !exists(json, 'runtimeType') ? undefined : RuntimeTypeEnumFromJSON(json['runtimeType']),
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function JobRuntimeToJSON(value?: JobRuntime | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'runtimeType': RuntimeTypeEnumToJSON(value.runtimeType),
        'version': value.version,
    };
}

