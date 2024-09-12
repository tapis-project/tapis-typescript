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
 * @interface ReqGroupSecret
 */
export interface ReqGroupSecret {
    /**
     * 
     * @type {string}
     * @memberof ReqGroupSecret
     */
    secret_id: string;
    /**
     * The unique identifier of the secret in the group. Defaults to the secret_id of no id is provided
     * @type {string}
     * @memberof ReqGroupSecret
     */
    id?: string;
}

export function ReqGroupSecretFromJSON(json: any): ReqGroupSecret {
    return ReqGroupSecretFromJSONTyped(json, false);
}

export function ReqGroupSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqGroupSecret {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'secret_id': json['secret_id'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function ReqGroupSecretToJSON(value?: ReqGroupSecret | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'secret_id': value.secret_id,
        'id': value.id,
    };
}

