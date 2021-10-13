/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Files API
 * My API
 *
 * The version of the OpenAPI document: 0.0
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
 * @interface NativeLinuxOpRequest
 */
export interface NativeLinuxOpRequest {
    /**
     * 
     * @type {string}
     * @memberof NativeLinuxOpRequest
     */
    operation: NativeLinuxOpRequestOperationEnum;
    /**
     * Argument for native linux operation
     * @type {string}
     * @memberof NativeLinuxOpRequest
     */
    argument: string;
}

/**
* @export
* @enum {string}
*/
export enum NativeLinuxOpRequestOperationEnum {
    Chmod = 'CHMOD',
    Chown = 'CHOWN',
    Chgrp = 'CHGRP'
}

export function NativeLinuxOpRequestFromJSON(json: any): NativeLinuxOpRequest {
    return NativeLinuxOpRequestFromJSONTyped(json, false);
}

export function NativeLinuxOpRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): NativeLinuxOpRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'operation': json['operation'],
        'argument': json['argument'],
    };
}

export function NativeLinuxOpRequestToJSON(value?: NativeLinuxOpRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'operation': value.operation,
        'argument': value.argument,
    };
}


