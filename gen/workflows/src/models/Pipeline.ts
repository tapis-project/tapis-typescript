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
    EnvSpec,
    EnvSpecFromJSON,
    EnvSpecFromJSONTyped,
    EnvSpecToJSON,
    PipelineExecutionProfile,
    PipelineExecutionProfileFromJSON,
    PipelineExecutionProfileFromJSONTyped,
    PipelineExecutionProfileToJSON,
    Spec,
    SpecFromJSON,
    SpecFromJSONTyped,
    SpecToJSON,
    Task,
    TaskFromJSON,
    TaskFromJSONTyped,
    TaskToJSON,
    Uses,
    UsesFromJSON,
    UsesFromJSONTyped,
    UsesToJSON,
} from './';

/**
 * 
 * @export
 * @interface Pipeline
 */
export interface Pipeline {
    /**
     * 
     * @type {string}
     * @memberof Pipeline
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Pipeline
     */
    description?: string;
    /**
     * 
     * @type {Uses}
     * @memberof Pipeline
     */
    uses?: Uses;
    /**
     * 
     * @type {{ [key: string]: EnvSpec; }}
     * @memberof Pipeline
     */
    env?: { [key: string]: EnvSpec; };
    /**
     * 
     * @type {{ [key: string]: Spec; }}
     * @memberof Pipeline
     */
    params?: { [key: string]: Spec; };
    /**
     * 
     * @type {string}
     * @memberof Pipeline
     */
    group?: string;
    /**
     * 
     * @type {string}
     * @memberof Pipeline
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof Pipeline
     */
    uuid?: string;
    /**
     * 
     * @type {PipelineExecutionProfile}
     * @memberof Pipeline
     */
    execution_profile?: PipelineExecutionProfile;
    /**
     * 
     * @type {string}
     * @memberof Pipeline
     */
    current_run?: string;
    /**
     * 
     * @type {string}
     * @memberof Pipeline
     */
    last_run?: string;
    /**
     * 
     * @type {Array<Task>}
     * @memberof Pipeline
     */
    tasks?: Array<Task>;
}

export function PipelineFromJSON(json: any): Pipeline {
    return PipelineFromJSONTyped(json, false);
}

export function PipelineFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pipeline {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'uses': !exists(json, 'uses') ? undefined : UsesFromJSON(json['uses']),
        'env': !exists(json, 'env') ? undefined : (mapValues(json['env'], EnvSpecFromJSON)),
        'params': !exists(json, 'params') ? undefined : (mapValues(json['params'], SpecFromJSON)),
        'group': !exists(json, 'group') ? undefined : json['group'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'execution_profile': !exists(json, 'execution_profile') ? undefined : PipelineExecutionProfileFromJSON(json['execution_profile']),
        'current_run': !exists(json, 'current_run') ? undefined : json['current_run'],
        'last_run': !exists(json, 'last_run') ? undefined : json['last_run'],
        'tasks': !exists(json, 'tasks') ? undefined : ((json['tasks'] as Array<any>).map(TaskFromJSON)),
    };
}

export function PipelineToJSON(value?: Pipeline | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'description': value.description,
        'uses': UsesToJSON(value.uses),
        'env': value.env === undefined ? undefined : (mapValues(value.env, EnvSpecToJSON)),
        'params': value.params === undefined ? undefined : (mapValues(value.params, SpecToJSON)),
        'group': value.group,
        'owner': value.owner,
        'uuid': value.uuid,
        'execution_profile': PipelineExecutionProfileToJSON(value.execution_profile),
        'current_run': value.current_run,
        'last_run': value.last_run,
        'tasks': value.tasks === undefined ? undefined : ((value.tasks as Array<any>).map(TaskToJSON)),
    };
}

