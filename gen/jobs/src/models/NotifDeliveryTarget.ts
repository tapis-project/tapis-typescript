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
 * @interface NotifDeliveryTarget
 */
export interface NotifDeliveryTarget {
    /**
     * 
     * @type {string}
     * @memberof NotifDeliveryTarget
     */
    deliveryMethod?: NotifDeliveryTargetDeliveryMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof NotifDeliveryTarget
     */
    deliveryAddress?: string;
}

/**
* @export
* @enum {string}
*/
export enum NotifDeliveryTargetDeliveryMethodEnum {
    Webhook = 'WEBHOOK',
    Email = 'EMAIL',
    Queue = 'QUEUE',
    Actor = 'ACTOR'
}

export function NotifDeliveryTargetFromJSON(json: any): NotifDeliveryTarget {
    return NotifDeliveryTargetFromJSONTyped(json, false);
}

export function NotifDeliveryTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotifDeliveryTarget {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deliveryMethod': !exists(json, 'deliveryMethod') ? undefined : json['deliveryMethod'],
        'deliveryAddress': !exists(json, 'deliveryAddress') ? undefined : json['deliveryAddress'],
    };
}

export function NotifDeliveryTargetToJSON(value?: NotifDeliveryTarget | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deliveryMethod': value.deliveryMethod,
        'deliveryAddress': value.deliveryAddress,
    };
}
