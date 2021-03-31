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
    RespSystemsSearchResultMetadata,
    RespSystemsSearchResultMetadataFromJSON,
    RespSystemsSearchResultMetadataFromJSONTyped,
    RespSystemsSearchResultMetadataToJSON,
    TSystem,
    TSystemFromJSON,
    TSystemFromJSONTyped,
    TSystemToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespSystemsSearchResult
 */
export interface RespSystemsSearchResult {
    /**
     * 
     * @type {RespSystemsSearchResultMetadata}
     * @memberof RespSystemsSearchResult
     */
    metadata?: RespSystemsSearchResultMetadata;
    /**
     * 
     * @type {Array<TSystem>}
     * @memberof RespSystemsSearchResult
     */
    search?: Array<TSystem>;
}

export function RespSystemsSearchResultFromJSON(json: any): RespSystemsSearchResult {
    return RespSystemsSearchResultFromJSONTyped(json, false);
}

export function RespSystemsSearchResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespSystemsSearchResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadata': !exists(json, 'metadata') ? undefined : RespSystemsSearchResultMetadataFromJSON(json['metadata']),
        'search': !exists(json, 'search') ? undefined : ((json['search'] as Array<any>).map(TSystemFromJSON)),
    };
}

export function RespSystemsSearchResultToJSON(value?: RespSystemsSearchResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metadata': RespSystemsSearchResultMetadataToJSON(value.metadata),
        'search': value.search === undefined ? undefined : ((value.search as Array<any>).map(TSystemToJSON)),
    };
}


