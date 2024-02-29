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
    TapisActorTaskAllOf,
    TapisActorTaskAllOfFromJSON,
    TapisActorTaskAllOfFromJSONTyped,
    TapisActorTaskAllOfToJSON,
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
 * @interface TapisActorTask
 */
export interface TapisActorTask {
    /**
     * 
     * @type {string}
     * @memberof TapisActorTask
     */
    id: string;
    /**
     * 
     * @type {EnumTaskType}
     * @memberof TapisActorTask
     */
    type: EnumTaskType;
    /**
     * 
     * @type {Array<TaskDependency>}
     * @memberof TapisActorTask
     */
    depends_on?: Array<TaskDependency>;
    /**
     * 
     * @type {string}
     * @memberof TapisActorTask
     */
    description?: string;
    /**
     * 
     * @type {TaskExecutionProfile}
     * @memberof TapisActorTask
     */
    execution_profile?: TaskExecutionProfile;
    /**
     * 
     * @type {{ [key: string]: SpecWithValue; }}
     * @memberof TapisActorTask
     */
    input?: { [key: string]: SpecWithValue; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof TapisActorTask
     */
    output?: { [key: string]: object; };
    /**
     * 
     * @type {boolean}
     * @memberof TapisActorTask
     */
    poll?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TapisActorTask
     */
    tapis_actor_id?: string;
    /**
     * 
     * @type {string}
     * @memberof TapisActorTask
     */
    tapis_actor_message?: string | null;
}

export function TapisActorTaskFromJSON(json: any): TapisActorTask {
    return TapisActorTaskFromJSONTyped(json, false);
}

export function TapisActorTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): TapisActorTask {
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
        'poll': !exists(json, 'poll') ? undefined : json['poll'],
        'tapis_actor_id': !exists(json, 'tapis_actor_id') ? undefined : json['tapis_actor_id'],
        'tapis_actor_message': !exists(json, 'tapis_actor_message') ? undefined : json['tapis_actor_message'],
    };
}

export function TapisActorTaskToJSON(value?: TapisActorTask | null): any {
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
        'poll': value.poll,
        'tapis_actor_id': value.tapis_actor_id,
        'tapis_actor_message': value.tapis_actor_message,
    };
}
