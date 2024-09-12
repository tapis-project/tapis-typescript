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
import {
    TemplateTagPodDefinition,
    TemplateTagPodDefinitionFromJSON,
    TemplateTagPodDefinitionFromJSONTyped,
    TemplateTagPodDefinitionToJSON,
} from './';

/**
 * Object with fields that users are allowed to specify for the Template class.
 * @export
 * @interface NewTemplateTag
 */
export interface NewTemplateTag {
    /**
     * Pod definition for this template tag.
     * @type {TemplateTagPodDefinition}
     * @memberof NewTemplateTag
     */
    pod_definition: TemplateTagPodDefinition | null;
    /**
     * Commit message for this template tag.
     * @type {string}
     * @memberof NewTemplateTag
     */
    commit_message: string;
    /**
     * Tag for this template. Default is 'latest'.
     * @type {string}
     * @memberof NewTemplateTag
     */
    tag?: string;
}

export function NewTemplateTagFromJSON(json: any): NewTemplateTag {
    return NewTemplateTagFromJSONTyped(json, false);
}

export function NewTemplateTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewTemplateTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pod_definition': TemplateTagPodDefinitionFromJSON(json['pod_definition']),
        'commit_message': json['commit_message'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
    };
}

export function NewTemplateTagToJSON(value?: NewTemplateTag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pod_definition': TemplateTagPodDefinitionToJSON(value.pod_definition),
        'commit_message': value.commit_message,
        'tag': value.tag,
    };
}
