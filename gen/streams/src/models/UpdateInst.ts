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
 * @interface UpdateInst
 */
export interface UpdateInst {
    /**
     * Instrument ID generated by CHORDS
     * @type {string}
     * @memberof UpdateInst
     */
    inst_id: string;
    /**
     * Instrument name
     * @type {string}
     * @memberof UpdateInst
     */
    inst_name: string;
    /**
     * The CHORDS site id to which instrument attached to
     * @type {string}
     * @memberof UpdateInst
     */
    site_id: string;
    /**
     * More information on instrument
     * @type {string}
     * @memberof UpdateInst
     */
    inst_description?: string;
    /**
     * tags array
     * @type {Array<string>}
     * @memberof UpdateInst
     */
    tags?: Array<string>;
    /**
     * user metadata on instruments
     * @type {object}
     * @memberof UpdateInst
     */
    metadata?: object;
}

export function UpdateInstFromJSON(json: any): UpdateInst {
    return UpdateInstFromJSONTyped(json, false);
}

export function UpdateInstFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateInst {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inst_id': json['inst_id'],
        'inst_name': json['inst_name'],
        'site_id': json['site_id'],
        'inst_description': !exists(json, 'inst_description') ? undefined : json['inst_description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function UpdateInstToJSON(value?: UpdateInst | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inst_id': value.inst_id,
        'inst_name': value.inst_name,
        'site_id': value.site_id,
        'inst_description': value.inst_description,
        'tags': value.tags,
        'metadata': value.metadata,
    };
}

