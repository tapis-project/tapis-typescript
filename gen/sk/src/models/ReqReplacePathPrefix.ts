/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Security API
 * The Tapis Security API provides access to the Tapis Security Kernel authorization and secrets facilities.
 *
 * The version of the OpenAPI document: 0.1
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
 * @interface ReqReplacePathPrefix
 */
export interface ReqReplacePathPrefix {
    /**
     * 
     * @type {string}
     * @memberof ReqReplacePathPrefix
     */
    tenant?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqReplacePathPrefix
     */
    schema?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqReplacePathPrefix
     */
    roleName?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqReplacePathPrefix
     */
    oldSystemId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqReplacePathPrefix
     */
    newSystemId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqReplacePathPrefix
     */
    oldPrefix?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqReplacePathPrefix
     */
    newPrefix?: string;
}

export function ReqReplacePathPrefixFromJSON(json: any): ReqReplacePathPrefix {
    return ReqReplacePathPrefixFromJSONTyped(json, false);
}

export function ReqReplacePathPrefixFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqReplacePathPrefix {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenant': !exists(json, 'tenant') ? undefined : json['tenant'],
        'schema': !exists(json, 'schema') ? undefined : json['schema'],
        'roleName': !exists(json, 'roleName') ? undefined : json['roleName'],
        'oldSystemId': !exists(json, 'oldSystemId') ? undefined : json['oldSystemId'],
        'newSystemId': !exists(json, 'newSystemId') ? undefined : json['newSystemId'],
        'oldPrefix': !exists(json, 'oldPrefix') ? undefined : json['oldPrefix'],
        'newPrefix': !exists(json, 'newPrefix') ? undefined : json['newPrefix'],
    };
}

export function ReqReplacePathPrefixToJSON(value?: ReqReplacePathPrefix | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tenant': value.tenant,
        'schema': value.schema,
        'roleName': value.roleName,
        'oldSystemId': value.oldSystemId,
        'newSystemId': value.newSystemId,
        'oldPrefix': value.oldPrefix,
        'newPrefix': value.newPrefix,
    };
}

