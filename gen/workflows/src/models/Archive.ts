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

import {
    S3Archive,
    TapisSystemArchive,
    S3ArchiveFromJSONTyped,
    S3ArchiveToJSON,
    TapisSystemArchiveFromJSONTyped,
    TapisSystemArchiveToJSON,
	EnumArchiveType
} from './';

/**
 * @type Archive
 * 
 * @export
 */
export type Archive = { type: EnumArchiveType.S3 } & S3Archive | { type: EnumArchiveType.System } & TapisSystemArchive;

export function ArchiveFromJSON(json: any): Archive {
    return ArchiveFromJSONTyped(json, false);
}

export function ArchiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): Archive {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case EnumArchiveType.S3:
            return {...S3ArchiveFromJSONTyped(json, true), type: EnumArchiveType.S3};
        case EnumArchiveType.System:
            return {...TapisSystemArchiveFromJSONTyped(json, true), type: EnumArchiveType.System};
        default:
            throw new Error(`No variant of Archive exists with 'type=${json['type']}'`);
    }
}

export function ArchiveToJSON(value?: Archive | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case EnumArchiveType.S3:
            return S3ArchiveToJSON(<S3Archive>value);
        case EnumArchiveType.System:
            return TapisSystemArchiveToJSON(<TapisSystemArchive>value);
        default:
            throw new Error(`No variant of Archive exists with 'type=${value['type']}'`);
    }
}

