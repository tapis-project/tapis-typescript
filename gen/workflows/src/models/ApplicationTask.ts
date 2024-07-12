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
    ApplicationTaskAllOf,
    ApplicationTaskAllOfFromJSON,
    ApplicationTaskAllOfFromJSONTyped,
    ApplicationTaskAllOfToJSON,
    BaseTask,
    BaseTaskFromJSON,
    BaseTaskFromJSONTyped,
    BaseTaskToJSON,
    EnumTaskType,
    EnumTaskTypeFromJSON,
    EnumTaskTypeFromJSONTyped,
    EnumTaskTypeToJSON,
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
 * @interface ApplicationTask
 */
export interface ApplicationTask {
    /**
     * 
     * @type {string}
     * @memberof ApplicationTask
     */
    id?: string;
    /**
     * 
     * @type {EnumTaskType}
     * @memberof ApplicationTask
     */
    type?: EnumTaskType;
    /**
     * 
     * @type {Array<TaskDependency>}
     * @memberof ApplicationTask
     */
    depends_on?: Array<TaskDependency>;
    /**
     * 
     * @type {string}
     * @memberof ApplicationTask
     */
    description?: string;
    /**
     * 
     * @type {TaskExecutionProfile}
     * @memberof ApplicationTask
     */
    execution_profile?: TaskExecutionProfile;
    /**
     * 
     * @type {{ [key: string]: SpecWithValue; }}
     * @memberof ApplicationTask
     */
    input?: { [key: string]: SpecWithValue; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ApplicationTask
     */
    output?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof ApplicationTask
     */
    image?: string;
}

export function ApplicationTaskFromJSON(json: any): ApplicationTask {
    return ApplicationTaskFromJSONTyped(json, false);
}

export function ApplicationTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationTask {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : EnumTaskTypeFromJSON(json['type']),
        'depends_on': !exists(json, 'depends_on') ? undefined : ((json['depends_on'] as Array<any>).map(TaskDependencyFromJSON)),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'execution_profile': !exists(json, 'execution_profile') ? undefined : TaskExecutionProfileFromJSON(json['execution_profile']),
        'input': !exists(json, 'input') ? undefined : (mapValues(json['input'], SpecWithValueFromJSON)),
        'output': !exists(json, 'output') ? undefined : json['output'],
        'image': !exists(json, 'image') ? undefined : json['image'],
    };
}

export function ApplicationTaskToJSON(value?: ApplicationTask | null): any {
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
        'image': value.image,
    };
}

