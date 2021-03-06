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
 * @interface Transfer
 */
export interface Transfer {
    /**
     * The filename to create on the destination
     * @type {string}
     * @memberof Transfer
     */
    filename?: string;
    /**
     * ISO8601 datetime string for object creation date
     * @type {string}
     * @memberof Transfer
     */
    created_at?: string;
    /**
     * Owner of this archive
     * @type {string}
     * @memberof Transfer
     */
    owner?: string;
    /**
     * ID os System ID to send archive too.
     * @type {string}
     * @memberof Transfer
     */
    system_id?: string;
    /**
     * The directory path to write archive to on selected System.
     * @type {string}
     * @memberof Transfer
     */
    path?: string;
    /**
     * The Project the data is within.
     * @type {string}
     * @memberof Transfer
     */
    project_id?: string;
    /**
     * The Instrument to pull measurement data from for the start and end dates.
     * @type {string}
     * @memberof Transfer
     */
    inst_id?: string;
    /**
     * The data measurement format - csv or JSON is currently supported
     * @type {string}
     * @memberof Transfer
     */
    data_format?: string;
    /**
     * A ISO8601 formatted datetime string for the starting time for archival data
     * @type {string}
     * @memberof Transfer
     */
    start_date?: string;
    /**
     * A ISO8601 formatted datetime string for the ending time for archival data
     * @type {string}
     * @memberof Transfer
     */
    end_date?: string;
}

export function TransferFromJSON(json: any): Transfer {
    return TransferFromJSONTyped(json, false);
}

export function TransferFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transfer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'filename': !exists(json, 'filename') ? undefined : json['filename'],
        'created_at': !exists(json, 'created_at') ? undefined : json['created_at'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'system_id': !exists(json, 'system_id') ? undefined : json['system_id'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'project_id': !exists(json, 'project_id') ? undefined : json['project_id'],
        'inst_id': !exists(json, 'inst_id') ? undefined : json['inst_id'],
        'data_format': !exists(json, 'data_format') ? undefined : json['data_format'],
        'start_date': !exists(json, 'start_date') ? undefined : json['start_date'],
        'end_date': !exists(json, 'end_date') ? undefined : json['end_date'],
    };
}

export function TransferToJSON(value?: Transfer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'filename': value.filename,
        'created_at': value.created_at,
        'owner': value.owner,
        'system_id': value.system_id,
        'path': value.path,
        'project_id': value.project_id,
        'inst_id': value.inst_id,
        'data_format': value.data_format,
        'start_date': value.start_date,
        'end_date': value.end_date,
    };
}

