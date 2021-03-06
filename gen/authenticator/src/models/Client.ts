/* tslint:disable */
/* eslint-disable */
/**
 * Authenticator
 * REST API and web server providing authentication for a Tapis v3 instance.
 *
 * The version of the OpenAPI document: 1
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
 * @interface Client
 */
export interface Client {
    /**
     * A unique identifier for the client. Must be unique for the tenant.
     * @type {string}
     * @memberof Client
     */
    client_id?: string;
    /**
     * A secret key for authenticating the client.
     * @type {string}
     * @memberof Client
     */
    client_key?: string;
    /**
     * URL for application to receive OAuth callbacks for executing flows such as authorization_code.
     * @type {string}
     * @memberof Client
     */
    callback_url?: string;
    /**
     * The time the client was created.
     * @type {string}
     * @memberof Client
     */
    create_time?: string;
    /**
     * The time the client was last updated.
     * @type {string}
     * @memberof Client
     */
    last_update_time?: string;
    /**
     * The display name that will represent this client.
     * @type {string}
     * @memberof Client
     */
    display_name?: string;
    /**
     * A description of this client.
     * @type {string}
     * @memberof Client
     */
    description?: string;
}

export function ClientFromJSON(json: any): Client {
    return ClientFromJSONTyped(json, false);
}

export function ClientFromJSONTyped(json: any, ignoreDiscriminator: boolean): Client {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'client_id': !exists(json, 'client_id') ? undefined : json['client_id'],
        'client_key': !exists(json, 'client_key') ? undefined : json['client_key'],
        'callback_url': !exists(json, 'callback_url') ? undefined : json['callback_url'],
        'create_time': !exists(json, 'create_time') ? undefined : json['create_time'],
        'last_update_time': !exists(json, 'last_update_time') ? undefined : json['last_update_time'],
        'display_name': !exists(json, 'display_name') ? undefined : json['display_name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function ClientToJSON(value?: Client | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'client_id': value.client_id,
        'client_key': value.client_key,
        'callback_url': value.callback_url,
        'create_time': value.create_time,
        'last_update_time': value.last_update_time,
        'display_name': value.display_name,
        'description': value.description,
    };
}

