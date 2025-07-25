/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Pods Service
 *  The Pods Service is a web service and distributed computing platform providing pods-as-a-service (PaaS). The service  implements a message broker and processor model that requests pods, alongside a health module to poll for pod data, including logs, status, and health. The primary use of this service is to have quick to deploy long-lived services based on Docker images that are exposed via HTTP or TCP endpoints listed by the API.  **The Pods service provides functionality for two types of pod solutions:**  * **Templated Pods** for run-as-is popular images. Neo4J is one example, the template manages TCP ports, user creation, and permissions.  * **Custom Pods** for arbitrary docker images with less functionality. In this case we will expose port 5000 and do nothing else.   The live-docs act as the most up-to-date API reference. Visit the [documentation for more information](https://tapis.readthedocs.io/en/latest/technical/pods.html). 
 *
 * The version of the OpenAPI document: 1.8.4
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ModelsPodsNetworking,
    ModelsPodsNetworkingFromJSON,
    ModelsPodsNetworkingFromJSONTyped,
    ModelsPodsNetworkingToJSON,
    ModelsPodsResources,
    ModelsPodsResourcesFromJSON,
    ModelsPodsResourcesFromJSONTyped,
    ModelsPodsResourcesToJSON,
    ModelsPodsVolumeMount,
    ModelsPodsVolumeMountFromJSON,
    ModelsPodsVolumeMountFromJSONTyped,
    ModelsPodsVolumeMountToJSON,
} from './';

/**
 * Object with fields that users are allowed to specify for the Pod class.
 * @export
 * @interface NewPod
 */
export interface NewPod {
    /**
     * Name of this pod.
     * @type {string}
     * @memberof NewPod
     */
    pod_id: string;
    /**
     * Which docker image to use, must be on allowlist, check /pods/images for list.
     * @type {string}
     * @memberof NewPod
     */
    image?: string;
    /**
     * Which pod template to use as base of pod fields. User set attributes will overwrite template fields.
     * @type {string}
     * @memberof NewPod
     */
    template?: string;
    /**
     * Description of this pod.
     * @type {string}
     * @memberof NewPod
     */
    description?: string;
    /**
     * Command to run in pod. ex. `["sleep", "5000"]` or `["/bin/bash", "-c", "(exec myscript.sh)"]`
     * @type {Array<string>}
     * @memberof NewPod
     */
    command?: Array<string>;
    /**
     * Arguments for the Pod's command.
     * @type {Array<string>}
     * @memberof NewPod
     */
    arguments?: Array<string>;
    /**
     * Environment variables to inject into k8 pod; Only for custom pods.
     * @type {object}
     * @memberof NewPod
     */
    environment_variables?: object;
    /**
     * Status requested by user, `ON`, `OFF`, or `RESTART`.
     * @type {string}
     * @memberof NewPod
     */
    status_requested?: string;
    /**
     * Key: Volume name. Value: List of strs specifying volume folders/files to mount in pod
     * @type {{ [key: string]: ModelsPodsVolumeMount; }}
     * @memberof NewPod
     */
    volume_mounts?: { [key: string]: ModelsPodsVolumeMount; };
    /**
     * Default time (sec) for pod to run from instance start. -1 for unlimited. 12 hour default.
     * @type {number}
     * @memberof NewPod
     */
    time_to_stop_default?: number;
    /**
     * Time (sec) for pod to run from instance start. Reset each time instance is started. -1 for unlimited. None uses default.
     * @type {number}
     * @memberof NewPod
     */
    time_to_stop_instance?: number;
    /**
     * Networking information. `{"url_suffix": {"protocol": "http"  "tcp", "port": int}}`
     * @type {{ [key: string]: ModelsPodsNetworking; }}
     * @memberof NewPod
     */
    networking?: { [key: string]: ModelsPodsNetworking; };
    /**
     * Pod resource management `{"cpu_limit": 3000, "mem_limit": 3000, "cpu_request": 500, "mem_limit": 500, "gpus": 0}`
     * @type {ModelsPodsResources}
     * @memberof NewPod
     */
    resources?: ModelsPodsResources | null;
    /**
     * Queue to run pod in. `default` is the default queue.
     * @type {string}
     * @memberof NewPod
     */
    compute_queue?: string;
}

export function NewPodFromJSON(json: any): NewPod {
    return NewPodFromJSONTyped(json, false);
}

export function NewPodFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewPod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pod_id': json['pod_id'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'template': !exists(json, 'template') ? undefined : json['template'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'command': !exists(json, 'command') ? undefined : json['command'],
        'arguments': !exists(json, 'arguments') ? undefined : json['arguments'],
        'environment_variables': !exists(json, 'environment_variables') ? undefined : json['environment_variables'],
        'status_requested': !exists(json, 'status_requested') ? undefined : json['status_requested'],
        'volume_mounts': !exists(json, 'volume_mounts') ? undefined : (mapValues(json['volume_mounts'], ModelsPodsVolumeMountFromJSON)),
        'time_to_stop_default': !exists(json, 'time_to_stop_default') ? undefined : json['time_to_stop_default'],
        'time_to_stop_instance': !exists(json, 'time_to_stop_instance') ? undefined : json['time_to_stop_instance'],
        'networking': !exists(json, 'networking') ? undefined : (mapValues(json['networking'], ModelsPodsNetworkingFromJSON)),
        'resources': !exists(json, 'resources') ? undefined : ModelsPodsResourcesFromJSON(json['resources']),
        'compute_queue': !exists(json, 'compute_queue') ? undefined : json['compute_queue'],
    };
}

export function NewPodToJSON(value?: NewPod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pod_id': value.pod_id,
        'image': value.image,
        'template': value.template,
        'description': value.description,
        'command': value.command,
        'arguments': value.arguments,
        'environment_variables': value.environment_variables,
        'status_requested': value.status_requested,
        'volume_mounts': value.volume_mounts === undefined ? undefined : (mapValues(value.volume_mounts, ModelsPodsVolumeMountToJSON)),
        'time_to_stop_default': value.time_to_stop_default,
        'time_to_stop_instance': value.time_to_stop_instance,
        'networking': value.networking === undefined ? undefined : (mapValues(value.networking, ModelsPodsNetworkingToJSON)),
        'resources': ModelsPodsResourcesToJSON(value.resources),
        'compute_queue': value.compute_queue,
    };
}

