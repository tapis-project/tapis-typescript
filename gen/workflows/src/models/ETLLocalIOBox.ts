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
    ETLEnumManifestGenerationPolicy,
    ETLEnumManifestGenerationPolicyFromJSON,
    ETLEnumManifestGenerationPolicyFromJSONTyped,
    ETLEnumManifestGenerationPolicyToJSON,
    ETLEnumManifestPriority,
    ETLEnumManifestPriorityFromJSON,
    ETLEnumManifestPriorityFromJSONTyped,
    ETLEnumManifestPriorityToJSON,
} from './';

/**
 * 
 * @export
 * @interface ETLLocalIOBox
 */
export interface ETLLocalIOBox {
    /**
     * 
     * @type {string}
     * @memberof ETLLocalIOBox
     */
    system_id: string;
    /**
     * 
     * @type {string}
     * @memberof ETLLocalIOBox
     */
    data_path: string;
    /**
     * 
     * @type {string}
     * @memberof ETLLocalIOBox
     */
    manifests_path?: string;
    /**
     * 
     * @type {ETLEnumManifestGenerationPolicy}
     * @memberof ETLLocalIOBox
     */
    manifest_generation_policy?: ETLEnumManifestGenerationPolicy;
    /**
     * 
     * @type {ETLEnumManifestPriority}
     * @memberof ETLLocalIOBox
     */
    manifest_priority?: ETLEnumManifestPriority;
    /**
     * 
     * @type {Array<string>}
     * @memberof ETLLocalIOBox
     */
    exclude_pattern?: Array<string>;
}

export function ETLLocalIOBoxFromJSON(json: any): ETLLocalIOBox {
    return ETLLocalIOBoxFromJSONTyped(json, false);
}

export function ETLLocalIOBoxFromJSONTyped(json: any, ignoreDiscriminator: boolean): ETLLocalIOBox {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'system_id': json['system_id'],
        'data_path': json['data_path'],
        'manifests_path': !exists(json, 'manifests_path') ? undefined : json['manifests_path'],
        'manifest_generation_policy': !exists(json, 'manifest_generation_policy') ? undefined : ETLEnumManifestGenerationPolicyFromJSON(json['manifest_generation_policy']),
        'manifest_priority': !exists(json, 'manifest_priority') ? undefined : ETLEnumManifestPriorityFromJSON(json['manifest_priority']),
        'exclude_pattern': !exists(json, 'exclude_pattern') ? undefined : json['exclude_pattern'],
    };
}

export function ETLLocalIOBoxToJSON(value?: ETLLocalIOBox | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'system_id': value.system_id,
        'data_path': value.data_path,
        'manifests_path': value.manifests_path,
        'manifest_generation_policy': ETLEnumManifestGenerationPolicyToJSON(value.manifest_generation_policy),
        'manifest_priority': ETLEnumManifestPriorityToJSON(value.manifest_priority),
        'exclude_pattern': value.exclude_pattern,
    };
}
