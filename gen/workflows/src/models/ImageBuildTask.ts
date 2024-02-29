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
    Context,
    ContextFromJSON,
    ContextFromJSONTyped,
    ContextToJSON,
    Destination,
    DestinationFromJSON,
    DestinationFromJSONTyped,
    DestinationToJSON,
    EnumBuilder,
    EnumBuilderFromJSON,
    EnumBuilderFromJSONTyped,
    EnumBuilderToJSON,
    EnumTaskType,
    EnumTaskTypeFromJSON,
    EnumTaskTypeFromJSONTyped,
    EnumTaskTypeToJSON,
    ImageBuildTaskAllOf,
    ImageBuildTaskAllOfFromJSON,
    ImageBuildTaskAllOfFromJSONTyped,
    ImageBuildTaskAllOfToJSON,
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
 * @interface ImageBuildTask
 */
export interface ImageBuildTask {
    /**
     * 
     * @type {string}
     * @memberof ImageBuildTask
     */
    id: string;
    /**
     * 
     * @type {EnumTaskType}
     * @memberof ImageBuildTask
     */
    type: EnumTaskType;
    /**
     * 
     * @type {Array<TaskDependency>}
     * @memberof ImageBuildTask
     */
    depends_on?: Array<TaskDependency>;
    /**
     * 
     * @type {string}
     * @memberof ImageBuildTask
     */
    description?: string;
    /**
     * 
     * @type {TaskExecutionProfile}
     * @memberof ImageBuildTask
     */
    execution_profile?: TaskExecutionProfile;
    /**
     * 
     * @type {{ [key: string]: SpecWithValue; }}
     * @memberof ImageBuildTask
     */
    input?: { [key: string]: SpecWithValue; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ImageBuildTask
     */
    output?: { [key: string]: object; };
    /**
     * 
     * @type {EnumBuilder}
     * @memberof ImageBuildTask
     */
    builder?: EnumBuilder;
    /**
     * 
     * @type {boolean}
     * @memberof ImageBuildTask
     */
    cache?: boolean;
    /**
     * 
     * @type {Context}
     * @memberof ImageBuildTask
     */
    context?: Context;
    /**
     * 
     * @type {Destination}
     * @memberof ImageBuildTask
     */
    destination?: Destination;
}

export function ImageBuildTaskFromJSON(json: any): ImageBuildTask {
    return ImageBuildTaskFromJSONTyped(json, false);
}

export function ImageBuildTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageBuildTask {
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
        'builder': !exists(json, 'builder') ? undefined : EnumBuilderFromJSON(json['builder']),
        'cache': !exists(json, 'cache') ? undefined : json['cache'],
        'context': !exists(json, 'context') ? undefined : ContextFromJSON(json['context']),
        'destination': !exists(json, 'destination') ? undefined : DestinationFromJSON(json['destination']),
    };
}

export function ImageBuildTaskToJSON(value?: ImageBuildTask | null): any {
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
        'builder': EnumBuilderToJSON(value.builder),
        'cache': value.cache,
        'context': ContextToJSON(value.context),
        'destination': DestinationToJSON(value.destination),
    };
}
