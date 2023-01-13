/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Archive,
    ArchiveFromJSON,
    ArchiveFromJSONTyped,
    ArchiveToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespArchiveAllOf
 */
export interface RespArchiveAllOf {
    /**
     * 
     * @type {Archive}
     * @memberof RespArchiveAllOf
     */
    result?: Archive;
}

export function RespArchiveAllOfFromJSON(json: any): RespArchiveAllOf {
    return RespArchiveAllOfFromJSONTyped(json, false);
}

export function RespArchiveAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespArchiveAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : ArchiveFromJSON(json['result']),
    };
}

export function RespArchiveAllOfToJSON(value?: RespArchiveAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': ArchiveToJSON(value.result),
    };
}

