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
    Uses,
    UsesFromJSON,
    UsesFromJSONTyped,
    UsesToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqTemplateTaskAllOf
 */
export interface ReqTemplateTaskAllOf {
    /**
     * 
     * @type {Uses}
     * @memberof ReqTemplateTaskAllOf
     */
    uses: Uses;
}

export function ReqTemplateTaskAllOfFromJSON(json: any): ReqTemplateTaskAllOf {
    return ReqTemplateTaskAllOfFromJSONTyped(json, false);
}

export function ReqTemplateTaskAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqTemplateTaskAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uses': UsesFromJSON(json['uses']),
    };
}

export function ReqTemplateTaskAllOfToJSON(value?: ReqTemplateTaskAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uses': UsesToJSON(value.uses),
    };
}
