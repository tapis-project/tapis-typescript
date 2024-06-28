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
/**
 * 
 * @export
 * @interface DatasetCard
 */
export interface DatasetCard {
    /**
     * 
     * @type {object}
     * @memberof DatasetCard
     */
    dataset_metadata?: object;
    /**
     * A string containing dataset card information in Markdown.
     * @type {string}
     * @memberof DatasetCard
     */
    dataset_card?: string;
}

export function DatasetCardFromJSON(json: any): DatasetCard {
    return DatasetCardFromJSONTyped(json, false);
}

export function DatasetCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetCard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataset_metadata': !exists(json, 'dataset_metadata') ? undefined : json['dataset_metadata'],
        'dataset_card': !exists(json, 'dataset_card') ? undefined : json['dataset_card'],
    };
}

export function DatasetCardToJSON(value?: DatasetCard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataset_metadata': value.dataset_metadata,
        'dataset_card': value.dataset_card,
    };
}

