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
    BaseTask,
    BaseTaskFromJSON,
    BaseTaskFromJSONTyped,
    BaseTaskToJSON,
    EnumInstaller,
    EnumInstallerFromJSON,
    EnumInstallerFromJSONTyped,
    EnumInstallerToJSON,
    EnumRuntimeEnvironment,
    EnumRuntimeEnvironmentFromJSON,
    EnumRuntimeEnvironmentFromJSONTyped,
    EnumRuntimeEnvironmentToJSON,
    EnumTaskType,
    EnumTaskTypeFromJSON,
    EnumTaskTypeFromJSONTyped,
    EnumTaskTypeToJSON,
    FunctionTaskAllOf,
    FunctionTaskAllOfFromJSON,
    FunctionTaskAllOfFromJSONTyped,
    FunctionTaskAllOfToJSON,
    GitCloneDetails,
    GitCloneDetailsFromJSON,
    GitCloneDetailsFromJSONTyped,
    GitCloneDetailsToJSON,
    SpecWithValue,
    SpecWithValueFromJSON,
    SpecWithValueFromJSONTyped,
    SpecWithValueToJSON,
    TaskDependency,
    TaskDependencyFromJSON,
    TaskDependencyFromJSONTyped,
    TaskDependencyToJSON,
    TaskExecutionProfile,
    TaskExecutionProfileFromJSON,
    TaskExecutionProfileFromJSONTyped,
    TaskExecutionProfileToJSON,
} from './';

/**
 * 
 * @export
 * @interface FunctionTask
 */
export interface FunctionTask {
    /**
     * 
     * @type {string}
     * @memberof FunctionTask
     */
    id: string;
    /**
     * 
     * @type {EnumTaskType}
     * @memberof FunctionTask
     */
    type: EnumTaskType;
    /**
     * 
     * @type {Array<TaskDependency>}
     * @memberof FunctionTask
     */
    depends_on?: Array<TaskDependency>;
    /**
     * 
     * @type {string}
     * @memberof FunctionTask
     */
    description?: string;
    /**
     * 
     * @type {TaskExecutionProfile}
     * @memberof FunctionTask
     */
    execution_profile?: TaskExecutionProfile;
    /**
     * 
     * @type {{ [key: string]: SpecWithValue; }}
     * @memberof FunctionTask
     */
    input?: { [key: string]: SpecWithValue; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FunctionTask
     */
    output?: { [key: string]: object; };
    /**
     * 
     * @type {Array<GitCloneDetails>}
     * @memberof FunctionTask
     */
    git_repositories?: Array<GitCloneDetails>;
    /**
     * 
     * @type {EnumRuntimeEnvironment}
     * @memberof FunctionTask
     */
    runtime?: EnumRuntimeEnvironment;
    /**
     * 
     * @type {EnumInstaller}
     * @memberof FunctionTask
     */
    installer?: EnumInstaller;
    /**
     * 
     * @type {string}
     * @memberof FunctionTask
     */
    command?: string;
    /**
     * 
     * @type {string}
     * @memberof FunctionTask
     */
    code?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FunctionTask
     */
    packages?: Array<string>;
}

export function FunctionTaskFromJSON(json: any): FunctionTask {
    return FunctionTaskFromJSONTyped(json, false);
}

export function FunctionTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionTask {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': EnumTaskTypeFromJSON(json['type']),
        'depends_on': !exists(json, 'depends_on') ? undefined : ((json['depends_on'] as Array<any>).map(TaskDependencyFromJSON)),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'execution_profile': !exists(json, 'execution_profile') ? undefined : TaskExecutionProfileFromJSON(json['execution_profile']),
        'input': !exists(json, 'input') ? undefined : (mapValues(json['input'], SpecWithValueFromJSON)),
        'output': !exists(json, 'output') ? undefined : json['output'],
        'git_repositories': !exists(json, 'git_repositories') ? undefined : ((json['git_repositories'] as Array<any>).map(GitCloneDetailsFromJSON)),
        'runtime': !exists(json, 'runtime') ? undefined : EnumRuntimeEnvironmentFromJSON(json['runtime']),
        'installer': !exists(json, 'installer') ? undefined : EnumInstallerFromJSON(json['installer']),
        'command': !exists(json, 'command') ? undefined : json['command'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'packages': !exists(json, 'packages') ? undefined : json['packages'],
    };
}

export function FunctionTaskToJSON(value?: FunctionTask | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': EnumTaskTypeToJSON(value.type),
        'depends_on': value.depends_on === undefined ? undefined : ((value.depends_on as Array<any>).map(TaskDependencyToJSON)),
        'description': value.description,
        'execution_profile': TaskExecutionProfileToJSON(value.execution_profile),
        'input': value.input === undefined ? undefined : (mapValues(value.input, SpecWithValueToJSON)),
        'output': value.output,
        'git_repositories': value.git_repositories === undefined ? undefined : ((value.git_repositories as Array<any>).map(GitCloneDetailsToJSON)),
        'runtime': EnumRuntimeEnvironmentToJSON(value.runtime),
        'installer': EnumInstallerToJSON(value.installer),
        'command': value.command,
        'code': value.code,
        'packages': value.packages,
    };
}

