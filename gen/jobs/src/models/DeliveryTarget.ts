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
 * @interface DeliveryTarget
 */
export interface DeliveryTarget {
    /**
     * 
     * @type {string}
     * @memberof DeliveryTarget
     */
    deliveryMethod?: DeliveryTargetDeliveryMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof DeliveryTarget
     */
    deliveryAddress?: string;
}

/**
* @export
* @enum {string}
*/
export enum DeliveryTargetDeliveryMethodEnum {
    Webhook = 'WEBHOOK',
    Email = 'EMAIL'
}

export function DeliveryTargetFromJSON(json: any): DeliveryTarget {
    return DeliveryTargetFromJSONTyped(json, false);
}

export function DeliveryTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeliveryTarget {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deliveryMethod': !exists(json, 'deliveryMethod') ? undefined : json['deliveryMethod'],
        'deliveryAddress': !exists(json, 'deliveryAddress') ? undefined : json['deliveryAddress'],
    };
}

export function DeliveryTargetToJSON(value?: DeliveryTarget | null): any {
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

