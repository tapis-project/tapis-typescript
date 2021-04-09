/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Files API
 * My API
 *
 * The version of the OpenAPI document: 0.0
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
 * @interface HealthCheckResponse
 */
export interface HealthCheckResponse {
    /**
     * 
     * @type {string}
     * @memberof HealthCheckResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof HealthCheckResponse
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof HealthCheckResponse
     */
    result?: string;
    /**
     * 
     * @type {string}
     * @memberof HealthCheckResponse
     */
    version?: string;
}

export function HealthCheckResponseFromJSON(json: any): HealthCheckResponse {
    return HealthCheckResponseFromJSONTyped(json, false);
}

export function HealthCheckResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthCheckResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'result': !exists(json, 'result') ? undefined : json['result'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function HealthCheckResponseToJSON(value?: HealthCheckResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'result': value.result,
        'version': value.version,
    };
}

