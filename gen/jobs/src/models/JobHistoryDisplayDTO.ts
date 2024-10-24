/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Jobs API
 * The Tapis Jobs API executes jobs on Tapis systems.
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
 * @interface JobHistoryDisplayDTO
 */
export interface JobHistoryDisplayDTO {
    /**
     * 
     * @type {string}
     * @memberof JobHistoryDisplayDTO
     */
    event?: string;
    /**
     * 
     * @type {Date}
     * @memberof JobHistoryDisplayDTO
     */
    created?: Date;
    /**
     * 
     * @type {string}
     * @memberof JobHistoryDisplayDTO
     */
    eventDetail?: string;
    /**
     * 
     * @type {string}
     * @memberof JobHistoryDisplayDTO
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof JobHistoryDisplayDTO
     */
    transferTaskUuid?: string;
}

export function JobHistoryDisplayDTOFromJSON(json: any): JobHistoryDisplayDTO {
    return JobHistoryDisplayDTOFromJSONTyped(json, false);
}

export function JobHistoryDisplayDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobHistoryDisplayDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'event': !exists(json, 'event') ? undefined : json['event'],
        'created': !exists(json, 'created') ? undefined : (new Date(json['created'])),
        'eventDetail': !exists(json, 'eventDetail') ? undefined : json['eventDetail'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'transferTaskUuid': !exists(json, 'transferTaskUuid') ? undefined : json['transferTaskUuid'],
    };
}

export function JobHistoryDisplayDTOToJSON(value?: JobHistoryDisplayDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'event': value.event,
        'created': value.created === undefined ? undefined : (value.created.toISOString()),
        'eventDetail': value.eventDetail,
        'description': value.description,
        'transferTaskUuid': value.transferTaskUuid,
    };
}

