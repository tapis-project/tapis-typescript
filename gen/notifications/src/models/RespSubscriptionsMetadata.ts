/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Notifications API
 * The Tapis Notifications API provides for management of subscriptions and event publication
 *
 * The version of the OpenAPI document: 1.6.1
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
 * @interface RespSubscriptionsMetadata
 */
export interface RespSubscriptionsMetadata {
    /**
     * 
     * @type {number}
     * @memberof RespSubscriptionsMetadata
     */
    recordCount?: number;
    /**
     * 
     * @type {number}
     * @memberof RespSubscriptionsMetadata
     */
    recordLimit?: number;
    /**
     * 
     * @type {number}
     * @memberof RespSubscriptionsMetadata
     */
    recordsSkipped?: number;
    /**
     * 
     * @type {string}
     * @memberof RespSubscriptionsMetadata
     */
    orderBy?: string;
    /**
     * 
     * @type {string}
     * @memberof RespSubscriptionsMetadata
     */
    startAfter?: string;
    /**
     * 
     * @type {number}
     * @memberof RespSubscriptionsMetadata
     */
    totalCount?: number;
}

export function RespSubscriptionsMetadataFromJSON(json: any): RespSubscriptionsMetadata {
    return RespSubscriptionsMetadataFromJSONTyped(json, false);
}

export function RespSubscriptionsMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespSubscriptionsMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recordCount': !exists(json, 'recordCount') ? undefined : json['recordCount'],
        'recordLimit': !exists(json, 'recordLimit') ? undefined : json['recordLimit'],
        'recordsSkipped': !exists(json, 'recordsSkipped') ? undefined : json['recordsSkipped'],
        'orderBy': !exists(json, 'orderBy') ? undefined : json['orderBy'],
        'startAfter': !exists(json, 'startAfter') ? undefined : json['startAfter'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function RespSubscriptionsMetadataToJSON(value?: RespSubscriptionsMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'recordCount': value.recordCount,
        'recordLimit': value.recordLimit,
        'recordsSkipped': value.recordsSkipped,
        'orderBy': value.orderBy,
        'startAfter': value.startAfter,
        'totalCount': value.totalCount,
    };
}
