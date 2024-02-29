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
} from './';

/**
 * 
 * @export
 * @interface ETLLocalInboxAllOf
 */
export interface ETLLocalInboxAllOf {
    /**
     * 
     * @type {ETLEnumManifestGenerationPolicy}
     * @memberof ETLLocalInboxAllOf
     */
    manifest_generation_policy?: ETLEnumManifestGenerationPolicy;
}

export function ETLLocalInboxAllOfFromJSON(json: any): ETLLocalInboxAllOf {
    return ETLLocalInboxAllOfFromJSONTyped(json, false);
}

export function ETLLocalInboxAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ETLLocalInboxAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'manifest_generation_policy': !exists(json, 'manifest_generation_policy') ? undefined : ETLEnumManifestGenerationPolicyFromJSON(json['manifest_generation_policy']),
    };
}

export function ETLLocalInboxAllOfToJSON(value?: ETLLocalInboxAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'manifest_generation_policy': ETLEnumManifestGenerationPolicyToJSON(value.manifest_generation_policy),
    };
}
