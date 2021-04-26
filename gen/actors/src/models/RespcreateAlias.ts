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
    Alias,
    AliasFromJSON,
    AliasFromJSONTyped,
    AliasToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespcreateAlias
 */
export interface RespcreateAlias {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespcreateAlias
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespcreateAlias
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespcreateAlias
     */
    status?: RespcreateAliasStatusEnum;
    /**
     * 
     * @type {Alias}
     * @memberof RespcreateAlias
     */
    result?: Alias;
}

/**
* @export
* @enum {string}
*/
export enum RespcreateAliasStatusEnum {
    Success = 'success',
    Failure = 'failure'
}

export function RespcreateAliasFromJSON(json: any): RespcreateAlias {
    return RespcreateAliasFromJSONTyped(json, false);
}

export function RespcreateAliasFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespcreateAlias {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : AliasFromJSON(json['result']),
    };
}

export function RespcreateAliasToJSON(value?: RespcreateAlias | null): any {
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
        'result': AliasToJSON(value.result),
    };
}

