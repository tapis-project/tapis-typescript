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
 * @interface Identity
 */
export interface Identity {
    /**
     * 
     * @type {string}
     * @memberof Identity
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof Identity
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Identity
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Identity
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof Identity
     */
    tenant_id?: string;
    /**
     * 
     * @type {string}
     * @memberof Identity
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof Identity
     */
    credentials?: string;
}

export function IdentityFromJSON(json: any): Identity {
    return IdentityFromJSONTyped(json, false);
}

export function IdentityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Identity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'tenant_id': !exists(json, 'tenant_id') ? undefined : json['tenant_id'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'credentials': !exists(json, 'credentials') ? undefined : json['credentials'],
    };
}

export function IdentityToJSON(value?: Identity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'name': value.name,
        'description': value.description,
        'owner': value.owner,
        'tenant_id': value.tenant_id,
        'uuid': value.uuid,
        'credentials': value.credentials,
    };
}

