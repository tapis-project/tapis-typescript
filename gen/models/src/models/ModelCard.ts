/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Machine Learning Hub - Models API
 * The Tapis Machine Learning Hub - Models API provides users access to machine learning models from HuggingFace within the Tapis framework.
 *
 * The version of the OpenAPI document: 0.0.2
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
 * @interface ModelCard
 */
export interface ModelCard {
    /**
     * 
     * @type {object}
     * @memberof ModelCard
     */
    model_metadata?: object;
    /**
     * A string containing model card information in Markdown.
     * @type {string}
     * @memberof ModelCard
     */
    model_card?: string;
}

export function ModelCardFromJSON(json: any): ModelCard {
    return ModelCardFromJSONTyped(json, false);
}

export function ModelCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelCard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'model_metadata': !exists(json, 'model_metadata') ? undefined : json['model_metadata'],
        'model_card': !exists(json, 'model_card') ? undefined : json['model_card'],
    };
}

export function ModelCardToJSON(value?: ModelCard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'model_metadata': value.model_metadata,
        'model_card': value.model_card,
    };
}

