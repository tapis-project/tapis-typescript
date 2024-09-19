/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions, credentials and Scheduler Profiles.
 *
 * The version of the OpenAPI document: 1.6.3
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum OperationTypeEnum {
    Create = 'CREATE',
    Read = 'READ',
    Modify = 'MODIFY',
    Execute = 'EXECUTE',
    Delete = 'DELETE',
    Undelete = 'UNDELETE',
    ChangeOwner = 'CHANGE_OWNER',
    Enable = 'ENABLE',
    Disable = 'DISABLE',
    GetPerms = 'GET_PERMS',
    RevokePerms = 'REVOKE_PERMS',
    SetCred = 'SET_CRED',
    RemoveCred = 'REMOVE_CRED',
    GetCred = 'GET_CRED'
}

export function OperationTypeEnumFromJSON(json: any): OperationTypeEnum {
    return OperationTypeEnumFromJSONTyped(json, false);
}

export function OperationTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): OperationTypeEnum {
    return json as OperationTypeEnum;
}

export function OperationTypeEnumToJSON(value?: OperationTypeEnum | null): any {
    return value as any;
}

