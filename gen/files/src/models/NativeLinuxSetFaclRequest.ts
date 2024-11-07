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
/**
 * 
 * @export
 * @interface NativeLinuxSetFaclRequest
 */
export interface NativeLinuxSetFaclRequest {
    /**
     * 
     * @type {string}
     * @memberof NativeLinuxSetFaclRequest
     */
    operation: NativeLinuxSetFaclRequestOperationEnum;
    /**
     * Recursion may be set to physical (don't follow symlinks) or
     * logical (follow symlinks), or none (don't recurse).
     * @type {string}
     * @memberof NativeLinuxSetFaclRequest
     */
    recursionMethod?: NativeLinuxSetFaclRequestRecursionMethodEnum;
    /**
     * specifies the actual acl string to set.  Multiple acls may be separated by 
     * commas.
     * Examples - user:myuser:rwx,group 
     *            group:mygroup:rw 
     *            user:myuser:rwx,group,group:mygroup:rw 
     * @type {string}
     * @memberof NativeLinuxSetFaclRequest
     */
    aclString: string;
}

/**
* @export
* @enum {string}
*/
export enum NativeLinuxSetFaclRequestOperationEnum {
    Add = 'ADD',
    Remove = 'REMOVE',
    RemoveDefault = 'REMOVE_DEFAULT',
    RemoveAll = 'REMOVE_ALL'
}/**
* @export
* @enum {string}
*/
export enum NativeLinuxSetFaclRequestRecursionMethodEnum {
    None = 'NONE',
    Physical = 'PHYSICAL',
    Logical = 'LOGICAL'
}

export function NativeLinuxSetFaclRequestFromJSON(json: any): NativeLinuxSetFaclRequest {
    return NativeLinuxSetFaclRequestFromJSONTyped(json, false);
}

export function NativeLinuxSetFaclRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): NativeLinuxSetFaclRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'operation': json['operation'],
        'recursionMethod': !exists(json, 'recursionMethod') ? undefined : json['recursionMethod'],
        'aclString': json['aclString'],
    };
}

export function NativeLinuxSetFaclRequestToJSON(value?: NativeLinuxSetFaclRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'operation': value.operation,
        'recursionMethod': value.recursionMethod,
        'aclString': value.aclString,
    };
}
