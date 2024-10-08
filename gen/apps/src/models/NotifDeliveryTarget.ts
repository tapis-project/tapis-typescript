/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 1.6.2
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    NotifDeliveryMethod,
    NotifDeliveryMethodFromJSON,
    NotifDeliveryMethodFromJSONTyped,
    NotifDeliveryMethodToJSON,
} from './';

/**
 * 
 * @export
 * @interface NotifDeliveryTarget
 */
export interface NotifDeliveryTarget {
    /**
     * 
     * @type {NotifDeliveryMethod}
     * @memberof NotifDeliveryTarget
     */
    deliveryMethod: NotifDeliveryMethod;
    /**
     * 
     * @type {string}
     * @memberof NotifDeliveryTarget
     */
    deliveryAddress: string;
}

export function NotifDeliveryTargetFromJSON(json: any): NotifDeliveryTarget {
    return NotifDeliveryTargetFromJSONTyped(json, false);
}

export function NotifDeliveryTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotifDeliveryTarget {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deliveryMethod': NotifDeliveryMethodFromJSON(json['deliveryMethod']),
        'deliveryAddress': json['deliveryAddress'],
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
        
        'deliveryMethod': NotifDeliveryMethodToJSON(value.deliveryMethod),
        'deliveryAddress': value.deliveryAddress,
    };
}

