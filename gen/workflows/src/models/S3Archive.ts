/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    BaseArchive,
    BaseArchiveFromJSON,
    BaseArchiveFromJSONTyped,
    BaseArchiveToJSON,
    EnumArchiveType,
    EnumArchiveTypeFromJSON,
    EnumArchiveTypeFromJSONTyped,
    EnumArchiveTypeToJSON,
    S3ArchiveAllOf,
    S3ArchiveAllOfFromJSON,
    S3ArchiveAllOfFromJSONTyped,
    S3ArchiveAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface S3Archive
 */
export interface S3Archive {
    /**
     * 
     * @type {string}
     * @memberof S3Archive
     */
    id: string;
    /**
     * 
     * @type {EnumArchiveType}
     * @memberof S3Archive
     */
    type: EnumArchiveType;
    /**
     * 
     * @type {string}
     * @memberof S3Archive
     */
    group: string;
    /**
     * 
     * @type {string}
     * @memberof S3Archive
     */
    tenant_id: string;
    /**
     * 
     * @type {string}
     * @memberof S3Archive
     */
    owner: string;
    /**
     * 
     * @type {string}
     * @memberof S3Archive
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof S3Archive
     */
    archive_dir: string;
    /**
     * 
     * @type {string}
     * @memberof S3Archive
     */
    endpoint: string;
    /**
     * 
     * @type {string}
     * @memberof S3Archive
     */
    bucket: string;
    /**
     * 
     * @type {string}
     * @memberof S3Archive
     */
    region: string;
}

export function S3ArchiveFromJSON(json: any): S3Archive {
    return S3ArchiveFromJSONTyped(json, false);
}

export function S3ArchiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): S3Archive {
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
        'endpoint': json['endpoint'],
        'bucket': json['bucket'],
        'region': json['region'],
    };
}

export function S3ArchiveToJSON(value?: S3Archive | null): any {
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
        'endpoint': value.endpoint,
        'bucket': value.bucket,
        'region': value.region,
    };
}

