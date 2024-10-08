/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Files API
 * The Tapis Files API provides for management of file resources on Tapis systems
 *
 * The version of the OpenAPI document: 1.3.6
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    PostIt,
    PostItFromJSON,
    PostItFromJSONTyped,
    PostItToJSON,
} from './';

/**
 * 
 * @export
 * @interface PostItResponse
 */
export interface PostItResponse {
    /**
     * 
     * @type {string}
     * @memberof PostItResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof PostItResponse
     */
    message?: string;
    /**
     * 
     * @type {PostIt}
     * @memberof PostItResponse
     */
    result?: PostIt;
    /**
     * 
     * @type {string}
     * @memberof PostItResponse
     */
    version?: string;
    /**
     * 
     * @type {object}
     * @memberof PostItResponse
     */
    metadata?: object;
}

export function PostItResponseFromJSON(json: any): PostItResponse {
    return PostItResponseFromJSONTyped(json, false);
}

export function PostItResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostItResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'result': !exists(json, 'result') ? undefined : PostItFromJSON(json['result']),
        'version': !exists(json, 'version') ? undefined : json['version'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function PostItResponseToJSON(value?: PostItResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'result': PostItToJSON(value.result),
        'version': value.version,
        'metadata': value.metadata,
    };
}

