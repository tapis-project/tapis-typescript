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
    EnumBuilder,
    EnumBuilderFromJSON,
    EnumBuilderFromJSONTyped,
    EnumBuilderToJSON,
    EnumTaskType,
    EnumTaskTypeFromJSON,
    EnumTaskTypeFromJSONTyped,
    EnumTaskTypeToJSON,
    ReqBaseTask,
    ReqBaseTaskFromJSON,
    ReqBaseTaskFromJSONTyped,
    ReqBaseTaskToJSON,
    ReqContext,
    ReqContextFromJSON,
    ReqContextFromJSONTyped,
    ReqContextToJSON,
    ReqDestination,
    ReqDestinationFromJSON,
    ReqDestinationFromJSONTyped,
    ReqDestinationToJSON,
    ReqImageBuildTaskAllOf,
    ReqImageBuildTaskAllOfFromJSON,
    ReqImageBuildTaskAllOfFromJSONTyped,
    ReqImageBuildTaskAllOfToJSON,
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
 * @interface ReqImageBuildTask
 */
export interface ReqImageBuildTask {
    /**
     * 
     * @type {string}
     * @memberof ReqImageBuildTask
     */
    id: string;
    /**
     * 
     * @type {EnumTaskType}
     * @memberof ReqImageBuildTask
     */
    type: EnumTaskType;
    /**
     * 
     * @type {Array<TaskDependency>}
     * @memberof ReqImageBuildTask
     */
    depends_on?: Array<TaskDependency>;
    /**
     * 
     * @type {string}
     * @memberof ReqImageBuildTask
     */
    description?: string;
    /**
     * 
     * @type {TaskExecutionProfile}
     * @memberof ReqImageBuildTask
     */
    execution_profile?: TaskExecutionProfile;
    /**
     * 
     * @type {{ [key: string]: SpecWithValue; }}
     * @memberof ReqImageBuildTask
     */
    input?: { [key: string]: SpecWithValue; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ReqImageBuildTask
     */
    output?: { [key: string]: object; };
    /**
     * 
     * @type {EnumBuilder}
     * @memberof ReqImageBuildTask
     */
    builder: EnumBuilder;
    /**
     * 
     * @type {boolean}
     * @memberof ReqImageBuildTask
     */
    cache?: boolean;
    /**
     * 
     * @type {ReqContext}
     * @memberof ReqImageBuildTask
     */
    context: ReqContext;
    /**
     * 
     * @type {ReqDestination}
     * @memberof ReqImageBuildTask
     */
    destination: ReqDestination;
}

export function ReqImageBuildTaskFromJSON(json: any): ReqImageBuildTask {
    return ReqImageBuildTaskFromJSONTyped(json, false);
}

export function ReqImageBuildTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqImageBuildTask {
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
        'builder': EnumBuilderFromJSON(json['builder']),
        'cache': !exists(json, 'cache') ? undefined : json['cache'],
        'context': ReqContextFromJSON(json['context']),
        'destination': ReqDestinationFromJSON(json['destination']),
    };
}

export function ReqImageBuildTaskToJSON(value?: ReqImageBuildTask | null): any {
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
        'context': ReqContextToJSON(value.context),
        'destination': ReqDestinationToJSON(value.destination),
    };
}

