/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.6.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    GroupUser,
    GroupUserFromJSON,
    GroupUserFromJSONTyped,
    GroupUserToJSON,
} from './';

/**
 * 
 * @export
 * @interface GroupDetail
 */
export interface GroupDetail {
    /**
     * 
     * @type {string}
     * @memberof GroupDetail
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof GroupDetail
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof GroupDetail
     */
    tenant_id?: string;
    /**
     * 
     * @type {string}
     * @memberof GroupDetail
     */
    uuid?: string;
    /**
     * 
     * @type {Array<GroupUser>}
     * @memberof GroupDetail
     */
    users?: Array<GroupUser>;
}

export function GroupDetailFromJSON(json: any): GroupDetail {
    return GroupDetailFromJSONTyped(json, false);
}

export function GroupDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'tenant_id': !exists(json, 'tenant_id') ? undefined : json['tenant_id'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'users': !exists(json, 'users') ? undefined : ((json['users'] as Array<any>).map(GroupUserFromJSON)),
    };
}

export function GroupDetailToJSON(value?: GroupDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'owner': value.owner,
        'tenant_id': value.tenant_id,
        'uuid': value.uuid,
        'users': value.users === undefined ? undefined : ((value.users as Array<any>).map(GroupUserToJSON)),
    };
}

