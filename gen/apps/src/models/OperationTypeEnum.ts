/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 1.4.2
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
    HardDelete = 'HARD_DELETE',
    ChangeOwner = 'CHANGE_OWNER',
    Enable = 'ENABLE',
    Disable = 'DISABLE',
    Lock = 'LOCK',
    Unlock = 'UNLOCK',
    GetPerms = 'GET_PERMS',
    GrantPerms = 'GRANT_PERMS',
    RevokePerms = 'REVOKE_PERMS'
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
