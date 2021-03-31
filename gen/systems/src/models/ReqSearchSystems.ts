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
 * @interface ReqSearchSystems
 */
export interface ReqSearchSystems {
    /**
     * 
     * @type {Array<string>}
     * @memberof ReqSearchSystems
     */
    search?: Array<string>;
}

export function ReqSearchSystemsFromJSON(json: any): ReqSearchSystems {
    return ReqSearchSystemsFromJSONTyped(json, false);
}

export function ReqSearchSystemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqSearchSystems {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'search': !exists(json, 'search') ? undefined : json['search'],
    };
}

export function ReqSearchSystemsToJSON(value?: ReqSearchSystems | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'search': value.search,
    };
}


