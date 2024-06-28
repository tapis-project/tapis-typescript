/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Machine Learning Hub - Datasets API
 * The Tapis Machine Learning Hub - Datasets API provides users access to datasets from HuggingFace within the Tapis framework.
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
    DatasetCard,
    DatasetCardFromJSON,
    DatasetCardFromJSONTyped,
    DatasetCardToJSON,
    RespBasic,
    RespBasicFromJSON,
    RespBasicFromJSONTyped,
    RespBasicToJSON,
    RespDatasetCardAllOf,
    RespDatasetCardAllOfFromJSON,
    RespDatasetCardAllOfFromJSONTyped,
    RespDatasetCardAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespDatasetCard
 */
export interface RespDatasetCard {
    /**
     * 
     * @type {string}
     * @memberof RespDatasetCard
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespDatasetCard
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespDatasetCard
     */
    version?: string;
    /**
     * 
     * @type {DatasetCard}
     * @memberof RespDatasetCard
     */
    result?: DatasetCard;
    /**
     * 
     * @type {object}
     * @memberof RespDatasetCard
     */
    metadata?: object;
}

export function RespDatasetCardFromJSON(json: any): RespDatasetCard {
    return RespDatasetCardFromJSONTyped(json, false);
}

export function RespDatasetCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespDatasetCard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'result': !exists(json, 'result') ? undefined : DatasetCardFromJSON(json['result']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function RespDatasetCardToJSON(value?: RespDatasetCard | null): any {
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
        'result': DatasetCardToJSON(value.result),
        'metadata': value.metadata,
    };
}

