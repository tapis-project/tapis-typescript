/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Pgrest API
 * The Tapis Pgrest API provides a RESTful interface to a manged SQL-db-as-a-service.
 *
 * The version of the OpenAPI document: 0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Table,
    TableFromJSON,
    TableFromJSONTyped,
    TableToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespListTables
 */
export interface RespListTables {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespListTables
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespListTables
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespListTables
     */
    status?: RespListTablesStatusEnum;
    /**
     * 
     * @type {Array<Table>}
     * @memberof RespListTables
     */
    result?: Array<Table>;
}

/**
* @export
* @enum {string}
*/
export enum RespListTablesStatusEnum {
    Success = 'success',
    Error = 'error'
}

export function RespListTablesFromJSON(json: any): RespListTables {
    return RespListTablesFromJSONTyped(json, false);
}

export function RespListTablesFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespListTables {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(TableFromJSON)),
    };
}

export function RespListTablesToJSON(value?: RespListTables | null): any {
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
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(TableToJSON)),
    };
}


