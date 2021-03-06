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
    MessageJsonResponse,
    MessageJsonResponseFromJSON,
    MessageJsonResponseFromJSONTyped,
    MessageJsonResponseToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespSendJSONMessage
 */
export interface RespSendJSONMessage {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespSendJSONMessage
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespSendJSONMessage
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespSendJSONMessage
     */
    status?: RespSendJSONMessageStatusEnum;
    /**
     * 
     * @type {MessageJsonResponse}
     * @memberof RespSendJSONMessage
     */
    result?: MessageJsonResponse;
}

/**
* @export
* @enum {string}
*/
export enum RespSendJSONMessageStatusEnum {
    Success = 'success',
    Failure = 'failure'
}

export function RespSendJSONMessageFromJSON(json: any): RespSendJSONMessage {
    return RespSendJSONMessageFromJSONTyped(json, false);
}

export function RespSendJSONMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespSendJSONMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : MessageJsonResponseFromJSON(json['result']),
    };
}

export function RespSendJSONMessageToJSON(value?: RespSendJSONMessage | null): any {
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
        'result': MessageJsonResponseToJSON(value.result),
    };
}

