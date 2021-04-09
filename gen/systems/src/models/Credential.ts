/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including transfer methods, permissions and credentials.
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
 * @interface Credential
 */
export interface Credential {
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    privateKey?: string;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    publicKey?: string;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    accessKey?: string;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    accessSecret?: string;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    certificate?: string;
}

export function CredentialFromJSON(json: any): Credential {
    return CredentialFromJSONTyped(json, false);
}

export function CredentialFromJSONTyped(json: any, ignoreDiscriminator: boolean): Credential {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'password': !exists(json, 'password') ? undefined : json['password'],
        'privateKey': !exists(json, 'privateKey') ? undefined : json['privateKey'],
        'publicKey': !exists(json, 'publicKey') ? undefined : json['publicKey'],
        'accessKey': !exists(json, 'accessKey') ? undefined : json['accessKey'],
        'accessSecret': !exists(json, 'accessSecret') ? undefined : json['accessSecret'],
        'certificate': !exists(json, 'certificate') ? undefined : json['certificate'],
    };
}

export function CredentialToJSON(value?: Credential | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'password': value.password,
        'privateKey': value.privateKey,
        'publicKey': value.publicKey,
        'accessKey': value.accessKey,
        'accessSecret': value.accessSecret,
        'certificate': value.certificate,
    };
}

