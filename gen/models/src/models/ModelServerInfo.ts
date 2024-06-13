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
import {
    TransformersInfo,
    TransformersInfoFromJSON,
    TransformersInfoFromJSONTyped,
    TransformersInfoToJSON,
} from './';

/**
 * 
 * @export
 * @interface ModelServerInfo
 */
export interface ModelServerInfo {
    /**
     * 
     * @type {string}
     * @memberof ModelServerInfo
     */
    model_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelServerInfo
     */
    inference_endpoint?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelServerInfo
     */
    prompt_example?: Array<object>;
    /**
     * 
     * @type {TransformersInfo}
     * @memberof ModelServerInfo
     */
    transformers_info?: TransformersInfo;
}

export function ModelServerInfoFromJSON(json: any): ModelServerInfo {
    return ModelServerInfoFromJSONTyped(json, false);
}

export function ModelServerInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelServerInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'model_id': !exists(json, 'model_id') ? undefined : json['model_id'],
        'inference_endpoint': !exists(json, 'inference_endpoint') ? undefined : json['inference_endpoint'],
        'prompt_example': !exists(json, 'prompt_example') ? undefined : json['prompt_example'],
        'transformers_info': !exists(json, 'transformers_info') ? undefined : TransformersInfoFromJSON(json['transformers_info']),
    };
}

export function ModelServerInfoToJSON(value?: ModelServerInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'model_id': value.model_id,
        'inference_endpoint': value.inference_endpoint,
        'prompt_example': value.prompt_example,
        'transformers_info': TransformersInfoToJSON(value.transformers_info),
    };
}

