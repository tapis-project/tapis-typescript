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
    Ontology,
    OntologyFromJSON,
    OntologyFromJSONTyped,
    OntologyToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespListOntologies
 */
export interface RespListOntologies {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespListOntologies
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespListOntologies
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespListOntologies
     */
    status?: RespListOntologiesStatusEnum;
    /**
     * 
     * @type {Array<Ontology>}
     * @memberof RespListOntologies
     */
    result?: Array<Ontology>;
}

/**
* @export
* @enum {string}
*/
export enum RespListOntologiesStatusEnum {
    Success = 'success'
}

export function RespListOntologiesFromJSON(json: any): RespListOntologies {
    return RespListOntologiesFromJSONTyped(json, false);
}

export function RespListOntologiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespListOntologies {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(OntologyFromJSON)),
    };
}

export function RespListOntologiesToJSON(value?: RespListOntologies | null): any {
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
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(OntologyToJSON)),
    };
}

