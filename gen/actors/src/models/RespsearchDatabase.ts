/* tslint:disable */
/* eslint-disable */
/**
 * Abaco API
 * Abaco (Actor Based Containers) is an API and distributed computing platform funded by the National Science Foundation to provide Functions-as-a-service to the research computing community. Abaco leverages Docker containers and the Actor Model of Concurrent Computation to provide generic function primitives that are portable, composable and scalable.
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
 * @interface RespSearchDatabase
 */
export interface RespSearchDatabase {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespSearchDatabase
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespSearchDatabase
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespSearchDatabase
     */
    status?: RespSearchDatabaseStatusEnum;
}

/**
* @export
* @enum {string}
*/
export enum RespSearchDatabaseStatusEnum {
    Success = 'success',
    Failure = 'failure'
}

export function RespSearchDatabaseFromJSON(json: any): RespSearchDatabase {
    return RespSearchDatabaseFromJSONTyped(json, false);
}

export function RespSearchDatabaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespSearchDatabase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function RespSearchDatabaseToJSON(value?: RespSearchDatabase | null): any {
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
    };
}

