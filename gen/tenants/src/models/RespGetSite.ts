/* tslint:disable */
/* eslint-disable */
/**
 * Tenants API
 * Manage Tapis Tenants.
 *
 * The version of the OpenAPI document: 1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Site,
    SiteFromJSON,
    SiteFromJSONTyped,
    SiteToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespGetSite
 */
export interface RespGetSite {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespGetSite
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespGetSite
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespGetSite
     */
    status?: RespGetSiteStatusEnum;
    /**
     * 
     * @type {Site}
     * @memberof RespGetSite
     */
    result?: Site;
}

/**
* @export
* @enum {string}
*/
export enum RespGetSiteStatusEnum {
    Success = 'success',
    Error = 'error'
}

export function RespGetSiteFromJSON(json: any): RespGetSite {
    return RespGetSiteFromJSONTyped(json, false);
}

export function RespGetSiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespGetSite {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : SiteFromJSON(json['result']),
    };
}

export function RespGetSiteToJSON(value?: RespGetSite | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'message': value.message,
        'status': value.status,
        'result': SiteToJSON(value.result),
    };
}


