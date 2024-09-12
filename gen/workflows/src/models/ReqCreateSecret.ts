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
/**
 * 
 * @export
 * @interface ReqCreateSecret
 */
export interface ReqCreateSecret {
    /**
     * 
     * @type {string}
     * @memberof ReqCreateSecret
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ReqCreateSecret
     */
    description?: string;
    /**
     * 
     * @type {object}
     * @memberof ReqCreateSecret
     */
    data: object;
}

export function ReqCreateSecretFromJSON(json: any): ReqCreateSecret {
    return ReqCreateSecretFromJSONTyped(json, false);
}

export function ReqCreateSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqCreateSecret {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'data': json['data'],
    };
}

export function ReqCreateSecretToJSON(value?: ReqCreateSecret | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'description': value.description,
        'data': value.data,
    };
}

