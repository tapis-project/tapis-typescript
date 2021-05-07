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
import {
    Measurement,
    MeasurementFromJSON,
    MeasurementFromJSONTyped,
    MeasurementToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespDownloadMeasurements
 */
export interface RespDownloadMeasurements {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespDownloadMeasurements
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespDownloadMeasurements
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespDownloadMeasurements
     */
    status?: RespDownloadMeasurementsStatusEnum;
    /**
     * 
     * @type {Array<Measurement>}
     * @memberof RespDownloadMeasurements
     */
    result?: Array<Measurement>;
}

/**
* @export
* @enum {string}
*/
export enum RespDownloadMeasurementsStatusEnum {
    Success = 'success'
}

export function RespDownloadMeasurementsFromJSON(json: any): RespDownloadMeasurements {
    return RespDownloadMeasurementsFromJSONTyped(json, false);
}

export function RespDownloadMeasurementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespDownloadMeasurements {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(MeasurementFromJSON)),
    };
}

export function RespDownloadMeasurementsToJSON(value?: RespDownloadMeasurements | null): any {
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
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(MeasurementToJSON)),
    };
}


