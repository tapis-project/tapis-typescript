/* tslint:disable */
/* eslint-disable */
/**
 * Abaco API
 * Abaco (Actor Based Containers) is an API and distributed computing platform funded by the National Science Foundation to provide Functions-as-a-service to the research computing community. Abaco leverages Docker containers and the Actor Model of Concurrent Computation to provide generic function primitives that are portable, composable and scalable.
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
 * @interface BasicResponse
 */
export interface BasicResponse {
    /**
     * Version of the API
     * @type {string}
     * @memberof BasicResponse
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof BasicResponse
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof BasicResponse
     */
    status?: BasicResponseStatusEnum;
}

/**
* @export
* @enum {string}
*/
export enum BasicResponseStatusEnum {
    Success = 'success',
    Failure = 'failure'
}

export function BasicResponseFromJSON(json: any): BasicResponse {
    return BasicResponseFromJSONTyped(json, false);
}

export function BasicResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function BasicResponseToJSON(value?: BasicResponse | null): any {
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
    };
}


