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

/**
 * 
 * @export
 * @enum {string}
 */
export enum NotifDeliveryMethod {
    Webhook = 'WEBHOOK',
    Email = 'EMAIL'
}

export function NotifDeliveryMethodFromJSON(json: any): NotifDeliveryMethod {
    return NotifDeliveryMethodFromJSONTyped(json, false);
}

export function NotifDeliveryMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotifDeliveryMethod {
    return json as NotifDeliveryMethod;
}

export function NotifDeliveryMethodToJSON(value?: NotifDeliveryMethod | null): any {
    return value as any;
}

