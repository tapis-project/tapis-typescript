/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.6.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EnumArchiveType,
    EnumArchiveTypeFromJSON,
    EnumArchiveTypeFromJSONTyped,
    EnumArchiveTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface BaseArchive
 */
export interface BaseArchive {
    /**
     * 
     * @type {string}
     * @memberof BaseArchive
     */
    id: string;
    /**
     * 
     * @type {EnumArchiveType}
     * @memberof BaseArchive
     */
    type: EnumArchiveType;
    /**
     * 
     * @type {string}
     * @memberof BaseArchive
     */
    group: string;
    /**
     * 
     * @type {string}
     * @memberof BaseArchive
     */
    tenant_id: string;
    /**
     * 
     * @type {string}
     * @memberof BaseArchive
     */
    owner: string;
    /**
     * 
     * @type {string}
     * @memberof BaseArchive
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseArchive
     */
    archive_dir: string;
}

export function BaseArchiveFromJSON(json: any): BaseArchive {
    return BaseArchiveFromJSONTyped(json, false);
}

export function BaseArchiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseArchive {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': EnumArchiveTypeFromJSON(json['type']),
        'group': json['group'],
        'tenant_id': json['tenant_id'],
        'owner': json['owner'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'archive_dir': json['archive_dir'],
    };
}

export function BaseArchiveToJSON(value?: BaseArchive | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': EnumArchiveTypeToJSON(value.type),
        'group': value.group,
        'tenant_id': value.tenant_id,
        'owner': value.owner,
        'uuid': value.uuid,
        'archive_dir': value.archive_dir,
    };
}

