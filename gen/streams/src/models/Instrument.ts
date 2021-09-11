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
 * @interface Instrument
 */
export interface Instrument {
    /**
     * User provided Instrument ID
     * @type {string}
     * @memberof Instrument
     */
    inst_id?: string;
    /**
     * Instrument name
     * @type {string}
     * @memberof Instrument
     */
    inst_name?: string;
    /**
     * Instrument description
     * @type {string}
     * @memberof Instrument
     */
    inst_description?: string;
    /**
     * ID generated by CHORDS
     * @type {string}
     * @memberof Instrument
     */
    chords_id?: string;
    /**
     * Owner of the instrument
     * @type {string}
     * @memberof Instrument
     */
    owner?: string;
    /**
     * The CHORDS site id to which instrument attached to
     * @type {string}
     * @memberof Instrument
     */
    site_id?: string;
    /**
     * creation date of the instrument
     * @type {string}
     * @memberof Instrument
     */
    created?: string;
    /**
     * arrays of tags on the instruments
     * @type {Array<string>}
     * @memberof Instrument
     */
    tags?: Array<string>;
    /**
     * User entered metadata for the instruments
     * @type {object}
     * @memberof Instrument
     */
    metadata?: object;
}

export function InstrumentFromJSON(json: any): Instrument {
    return InstrumentFromJSONTyped(json, false);
}

export function InstrumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Instrument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inst_id': !exists(json, 'inst_id') ? undefined : json['inst_id'],
        'inst_name': !exists(json, 'inst_name') ? undefined : json['inst_name'],
        'inst_description': !exists(json, 'inst_description') ? undefined : json['inst_description'],
        'chords_id': !exists(json, 'chords_id') ? undefined : json['chords_id'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'site_id': !exists(json, 'site_id') ? undefined : json['site_id'],
        'created': !exists(json, 'created') ? undefined : json['created'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function InstrumentToJSON(value?: Instrument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inst_id': value.inst_id,
        'inst_name': value.inst_name,
        'inst_description': value.inst_description,
        'chords_id': value.chords_id,
        'owner': value.owner,
        'site_id': value.site_id,
        'created': value.created,
        'tags': value.tags,
        'metadata': value.metadata,
    };
}


