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
/**
 * Object with fields that users are allowed to specify for the Image class.
 * @export
 * @interface NewImage
 */
export interface NewImage {
    /**
     * Name of image to allow.
     * @type {string}
     * @memberof NewImage
     */
    image: string;
    /**
     * Tenants that can use this image.
     * @type {Array<string>}
     * @memberof NewImage
     */
    tenants?: Array<string>;
    /**
     * Description of image.
     * @type {string}
     * @memberof NewImage
     */
    description?: string;
}

export function NewImageFromJSON(json: any): NewImage {
    return NewImageFromJSONTyped(json, false);
}

export function NewImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'image': json['image'],
        'tenants': !exists(json, 'tenants') ? undefined : json['tenants'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function NewImageToJSON(value?: NewImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'image': value.image,
        'tenants': value.tenants,
        'description': value.description,
    };
}

