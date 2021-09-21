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
    NewArchiveSettings,
    NewArchiveSettingsFromJSON,
    NewArchiveSettingsFromJSONTyped,
    NewArchiveSettingsToJSON,
} from './';

/**
 * 
 * @export
 * @interface Archive
 */
export interface Archive {
    /**
     * the unique id assigned to the archive
     * @type {string}
     * @memberof Archive
     */
    archive_id?: string;
    /**
     * The type of archive object - system or chords
     * @type {string}
     * @memberof Archive
     */
    archive_type?: ArchiveArchiveTypeEnum;
    /**
     * ISO8601 datetime string for object creation date
     * @type {string}
     * @memberof Archive
     */
    created_at?: string;
    /**
     * ISO8601 datetime string for object updated date
     * @type {string}
     * @memberof Archive
     */
    updated_at?: string;
    /**
     * Owner of this archive
     * @type {string}
     * @memberof Archive
     */
    owner?: string;
    /**
     * 
     * @type {NewArchiveSettings}
     * @memberof Archive
     */
    settings?: NewArchiveSettings;
}

/**
* @export
* @enum {string}
*/
export enum ArchiveArchiveTypeEnum {
    System = 'system',
    Chords = 'chords'
}

export function ArchiveFromJSON(json: any): Archive {
    return ArchiveFromJSONTyped(json, false);
}

export function ArchiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): Archive {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'archive_id': !exists(json, 'archive_id') ? undefined : json['archive_id'],
        'archive_type': !exists(json, 'archive_type') ? undefined : json['archive_type'],
        'created_at': !exists(json, 'created_at') ? undefined : json['created_at'],
        'updated_at': !exists(json, 'updated_at') ? undefined : json['updated_at'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'settings': !exists(json, 'settings') ? undefined : NewArchiveSettingsFromJSON(json['settings']),
    };
}

export function ArchiveToJSON(value?: Archive | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'archive_id': value.archive_id,
        'archive_type': value.archive_type,
        'created_at': value.created_at,
        'updated_at': value.updated_at,
        'owner': value.owner,
        'settings': NewArchiveSettingsToJSON(value.settings),
    };
}


