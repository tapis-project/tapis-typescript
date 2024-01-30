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
    TemplateTaskAllOf,
    TemplateTaskAllOfFromJSON,
    TemplateTaskAllOfFromJSONTyped,
    TemplateTaskAllOfToJSON,
    Uses,
    UsesFromJSON,
    UsesFromJSONTyped,
    UsesToJSON,
} from './';

/**
 * 
 * @export
 * @interface TemplateTask
 */
export interface TemplateTask {
    /**
     * 
     * @type {string}
     * @memberof TemplateTask
     */
    id: string;
    /**
     * 
     * @type {EnumTaskType}
     * @memberof TemplateTask
     */
    type: EnumTaskType;
    /**
     * 
     * @type {Array<TaskDependency>}
     * @memberof TemplateTask
     */
    depends_on?: Array<TaskDependency>;
    /**
     * 
     * @type {string}
     * @memberof TemplateTask
     */
    description?: string;
    /**
     * 
     * @type {TaskExecutionProfile}
     * @memberof TemplateTask
     */
    execution_profile?: TaskExecutionProfile;
    /**
     * 
     * @type {{ [key: string]: SpecWithValue; }}
     * @memberof TemplateTask
     */
    input?: { [key: string]: SpecWithValue; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof TemplateTask
     */
    output?: { [key: string]: object; };
    /**
     * 
     * @type {Uses}
     * @memberof TemplateTask
     */
    uses: Uses;
}

export function TemplateTaskFromJSON(json: any): TemplateTask {
    return TemplateTaskFromJSONTyped(json, false);
}

export function TemplateTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateTask {
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
        'uses': UsesFromJSON(json['uses']),
    };
}

export function TemplateTaskToJSON(value?: TemplateTask | null): any {
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
        'uses': UsesToJSON(value.uses),
    };
}

