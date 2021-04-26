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
import {
    ActorExecutionSummaries,
    ActorExecutionSummariesFromJSON,
    ActorExecutionSummariesFromJSONTyped,
    ActorExecutionSummariesToJSON,
} from './';

/**
 * 
 * @export
 * @interface ResplistExecutions
 */
export interface ResplistExecutions {
    /**
     * Version of the API
     * @type {string}
     * @memberof ResplistExecutions
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof ResplistExecutions
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof ResplistExecutions
     */
    status?: ResplistExecutionsStatusEnum;
    /**
     * 
     * @type {ActorExecutionSummaries}
     * @memberof ResplistExecutions
     */
    result?: ActorExecutionSummaries;
}

/**
* @export
* @enum {string}
*/
export enum ResplistExecutionsStatusEnum {
    Success = 'success',
    Failure = 'failure'
}

export function ResplistExecutionsFromJSON(json: any): ResplistExecutions {
    return ResplistExecutionsFromJSONTyped(json, false);
}

export function ResplistExecutionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResplistExecutions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ActorExecutionSummariesFromJSON(json['result']),
    };
}

export function ResplistExecutionsToJSON(value?: ResplistExecutions | null): any {
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
        'result': ActorExecutionSummariesToJSON(value.result),
    };
}

