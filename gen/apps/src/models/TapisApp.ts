/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 1.0.0-rc1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AppTypeEnum,
    AppTypeEnumFromJSON,
    AppTypeEnumFromJSONTyped,
    AppTypeEnumToJSON,
    JobAttributes,
    JobAttributesFromJSON,
    JobAttributesFromJSONTyped,
    JobAttributesToJSON,
    RuntimeEnum,
    RuntimeEnumFromJSON,
    RuntimeEnumFromJSONTyped,
    RuntimeEnumToJSON,
    RuntimeOptionEnum,
    RuntimeOptionEnumFromJSON,
    RuntimeOptionEnumFromJSONTyped,
    RuntimeOptionEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface TapisApp
 */
export interface TapisApp {
    /**
     * 
     * @type {string}
     * @memberof TapisApp
     */
    tenant?: string;
    /**
     * 
     * @type {string}
     * @memberof TapisApp
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TapisApp
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof TapisApp
     */
    description?: string;
    /**
     * 
     * @type {AppTypeEnum}
     * @memberof TapisApp
     */
    appType?: AppTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TapisApp
     */
    owner?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TapisApp
     */
    enabled?: boolean;
    /**
     * 
     * @type {RuntimeEnum}
     * @memberof TapisApp
     */
    runtime?: RuntimeEnum;
    /**
     * 
     * @type {string}
     * @memberof TapisApp
     */
    runtimeVersion?: string;
    /**
     * 
     * @type {Array<RuntimeOptionEnum>}
     * @memberof TapisApp
     */
    runtimeOptions?: Array<RuntimeOptionEnum>;
    /**
     * 
     * @type {string}
     * @memberof TapisApp
     */
    containerImage?: string;
    /**
     * 
     * @type {number}
     * @memberof TapisApp
     */
    maxJobs?: number;
    /**
     * 
     * @type {number}
     * @memberof TapisApp
     */
    maxJobsPerUser?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TapisApp
     */
    strictFileInputs?: boolean;
    /**
     * 
     * @type {JobAttributes}
     * @memberof TapisApp
     */
    jobAttributes?: JobAttributes;
    /**
     * 
     * @type {Array<string>}
     * @memberof TapisApp
     */
    tags?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof TapisApp
     */
    notes?: object;
    /**
     * 
     * @type {string}
     * @memberof TapisApp
     */
    uuid?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TapisApp
     */
    deleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TapisApp
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof TapisApp
     */
    updated?: string;
}

export function TapisAppFromJSON(json: any): TapisApp {
    return TapisAppFromJSONTyped(json, false);
}

export function TapisAppFromJSONTyped(json: any, ignoreDiscriminator: boolean): TapisApp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenant': !exists(json, 'tenant') ? undefined : json['tenant'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'appType': !exists(json, 'appType') ? undefined : AppTypeEnumFromJSON(json['appType']),
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'runtime': !exists(json, 'runtime') ? undefined : RuntimeEnumFromJSON(json['runtime']),
        'runtimeVersion': !exists(json, 'runtimeVersion') ? undefined : json['runtimeVersion'],
        'runtimeOptions': !exists(json, 'runtimeOptions') ? undefined : ((json['runtimeOptions'] as Array<any>).map(RuntimeOptionEnumFromJSON)),
        'containerImage': !exists(json, 'containerImage') ? undefined : json['containerImage'],
        'maxJobs': !exists(json, 'maxJobs') ? undefined : json['maxJobs'],
        'maxJobsPerUser': !exists(json, 'maxJobsPerUser') ? undefined : json['maxJobsPerUser'],
        'strictFileInputs': !exists(json, 'strictFileInputs') ? undefined : json['strictFileInputs'],
        'jobAttributes': !exists(json, 'jobAttributes') ? undefined : JobAttributesFromJSON(json['jobAttributes']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'created': !exists(json, 'created') ? undefined : json['created'],
        'updated': !exists(json, 'updated') ? undefined : json['updated'],
    };
}

export function TapisAppToJSON(value?: TapisApp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tenant': value.tenant,
        'id': value.id,
        'version': value.version,
        'description': value.description,
        'appType': AppTypeEnumToJSON(value.appType),
        'owner': value.owner,
        'enabled': value.enabled,
        'runtime': RuntimeEnumToJSON(value.runtime),
        'runtimeVersion': value.runtimeVersion,
        'runtimeOptions': value.runtimeOptions === undefined ? undefined : ((value.runtimeOptions as Array<any>).map(RuntimeOptionEnumToJSON)),
        'containerImage': value.containerImage,
        'maxJobs': value.maxJobs,
        'maxJobsPerUser': value.maxJobsPerUser,
        'strictFileInputs': value.strictFileInputs,
        'jobAttributes': JobAttributesToJSON(value.jobAttributes),
        'tags': value.tags,
        'notes': value.notes,
        'uuid': value.uuid,
        'deleted': value.deleted,
        'created': value.created,
        'updated': value.updated,
    };
}


