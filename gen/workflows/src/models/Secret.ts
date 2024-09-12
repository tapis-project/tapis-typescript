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
 * @interface Secret
 */
export interface Secret {
    /**
     * 
     * @type {string}
     * @memberof Secret
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Secret
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Secret
     */
    tenant_id?: string;
    /**
     * 
     * @type {string}
     * @memberof Secret
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof Secret
     */
    sk_secret_name?: string;
    /**
     * 
     * @type {string}
     * @memberof Secret
     */
    uuid?: string;
}

export function SecretFromJSON(json: any): Secret {
    return SecretFromJSONTyped(json, false);
}

export function SecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): Secret {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tenant_id': !exists(json, 'tenant_id') ? undefined : json['tenant_id'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'sk_secret_name': !exists(json, 'sk_secret_name') ? undefined : json['sk_secret_name'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
    };
}

export function SecretToJSON(value?: Secret | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'description': value.description,
        'tenant_id': value.tenant_id,
        'owner': value.owner,
        'sk_secret_name': value.sk_secret_name,
        'uuid': value.uuid,
    };
}

