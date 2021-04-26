/* tslint:disable */
/* eslint-disable */
/**
 * Streams API
 * Manage Tapis Streams API.
 *
 * The version of the OpenAPI document: 1
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
 * @interface Resphello
 */
export interface Resphello {
    /**
     * Version of the API
     * @type {string}
     * @memberof Resphello
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof Resphello
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof Resphello
     */
    status?: ResphelloStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Resphello
     */
    result?: string;
}

/**
* @export
* @enum {string}
*/
export enum ResphelloStatusEnum {
    Success = 'success'
}

export function ResphelloFromJSON(json: any): Resphello {
    return ResphelloFromJSONTyped(json, false);
}

export function ResphelloFromJSONTyped(json: any, ignoreDiscriminator: boolean): Resphello {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function ResphelloToJSON(value?: Resphello | null): any {
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
        'result': value.result,
    };
}

