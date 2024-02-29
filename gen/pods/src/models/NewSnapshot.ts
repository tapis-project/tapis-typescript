/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Pods Service
 *  The Pods Service is a web service and distributed computing platform providing pods-as-a-service (PaaS). The service  implements a message broker and processor model that requests pods, alongside a health module to poll for pod data, including logs, status, and health. The primary use of this service is to have quick to deploy long-lived services based on Docker images that are exposed via HTTP or TCP endpoints listed by the API.  **The Pods service provides functionality for two types of pod solutions:**  * **Templated Pods** for run-as-is popular images. Neo4J is one example, the template manages TCP ports, user creation, and permissions.  * **Custom Pods** for arbitrary docker images with less functionality. In this case we will expose port 5000 and do nothing else.   The live-docs act as the most up-to-date API reference. Visit the [documentation for more information](https://tapis.readthedocs.io/en/latest/technical/pods.html). 
 *
 * The version of the OpenAPI document: 1.6.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Object with fields that users are allowed to specify for the Snapshot class.
 * @export
 * @interface NewSnapshot
 */
export interface NewSnapshot {
    /**
     * Name of this snapshot.
     * @type {string}
     * @memberof NewSnapshot
     */
    snapshot_id: string;
    /**
     * The volume_id to use as source of snapshot.
     * @type {string}
     * @memberof NewSnapshot
     */
    source_volume_id: string;
    /**
     * Path in source volume_id to make snapshot of
     * @type {string}
     * @memberof NewSnapshot
     */
    source_volume_path: string;
    /**
     * Path to copy to. Snapshots of singular files require destination_path.
     * @type {string}
     * @memberof NewSnapshot
     */
    destination_path?: string;
    /**
     * Description of this snapshot.
     * @type {string}
     * @memberof NewSnapshot
     */
    description?: string;
    /**
     * Size in MB to limit snapshot to. We'll start warning if you've gone past the limit.
     * @type {number}
     * @memberof NewSnapshot
     */
    size_limit?: number;
    /**
     * cron bits
     * @type {string}
     * @memberof NewSnapshot
     */
    cron?: string;
    /**
     * retention_policy bits
     * @type {string}
     * @memberof NewSnapshot
     */
    retention_policy?: string;
}

export function NewSnapshotFromJSON(json: any): NewSnapshot {
    return NewSnapshotFromJSONTyped(json, false);
}

export function NewSnapshotFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewSnapshot {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'snapshot_id': json['snapshot_id'],
        'source_volume_id': json['source_volume_id'],
        'source_volume_path': json['source_volume_path'],
        'destination_path': !exists(json, 'destination_path') ? undefined : json['destination_path'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'size_limit': !exists(json, 'size_limit') ? undefined : json['size_limit'],
        'cron': !exists(json, 'cron') ? undefined : json['cron'],
        'retention_policy': !exists(json, 'retention_policy') ? undefined : json['retention_policy'],
    };
}

export function NewSnapshotToJSON(value?: NewSnapshot | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'snapshot_id': value.snapshot_id,
        'source_volume_id': value.source_volume_id,
        'source_volume_path': value.source_volume_path,
        'destination_path': value.destination_path,
        'description': value.description,
        'size_limit': value.size_limit,
        'cron': value.cron,
        'retention_policy': value.retention_policy,
    };
}
