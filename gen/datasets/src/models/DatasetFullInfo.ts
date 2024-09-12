/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Machine Learning Hub - Datasets API
 * The Tapis Machine Learning Hub - Datasets API provides users access to datasets from HuggingFace within the Tapis framework.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    DatasetShortInfo,
    DatasetShortInfoFromJSON,
    DatasetShortInfoFromJSONTyped,
    DatasetShortInfoToJSON,
} from './';

/**
 * 
 * @export
 * @interface DatasetFullInfo
 */
export interface DatasetFullInfo {
    /**
     * 
     * @type {string}
     * @memberof DatasetFullInfo
     */
    description?: string;
    /**
     * 
     * @type {object}
     * @memberof DatasetFullInfo
     */
    card_data?: object | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetFullInfo
     */
    citation?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof DatasetFullInfo
     */
    repository_content?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DatasetFullInfo
     */
    sha?: string;
    /**
     * 
     * @type {string}
     * @memberof DatasetFullInfo
     */
    paperswithcode_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetFullInfo
     */
    dataset_id?: string;
    /**
     * 
     * @type {string}
     * @memberof DatasetFullInfo
     */
    _id?: string;
    /**
     * 
     * @type {string}
     * @memberof DatasetFullInfo
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof DatasetFullInfo
     */
    last_modified?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetFullInfo
     */
    author?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetFullInfo
     */
    disabled?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof DatasetFullInfo
     */
    downloads?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetFullInfo
     */
    gated?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetFullInfo
     */
    _private?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof DatasetFullInfo
     */
    tags?: Array<string>;
}

export function DatasetFullInfoFromJSON(json: any): DatasetFullInfo {
    return DatasetFullInfoFromJSONTyped(json, false);
}

export function DatasetFullInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetFullInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'card_data': !exists(json, 'card_data') ? undefined : json['card_data'],
        'citation': !exists(json, 'citation') ? undefined : json['citation'],
        'repository_content': !exists(json, 'repository_content') ? undefined : json['repository_content'],
        'sha': !exists(json, 'sha') ? undefined : json['sha'],
        'paperswithcode_id': !exists(json, 'paperswithcode_id') ? undefined : json['paperswithcode_id'],
        'dataset_id': !exists(json, 'dataset_id') ? undefined : json['dataset_id'],
        '_id': !exists(json, '_id') ? undefined : json['_id'],
        'created_at': !exists(json, 'created_at') ? undefined : json['created_at'],
        'last_modified': !exists(json, 'last_modified') ? undefined : json['last_modified'],
        'author': !exists(json, 'author') ? undefined : json['author'],
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
        'downloads': !exists(json, 'downloads') ? undefined : json['downloads'],
        'gated': !exists(json, 'gated') ? undefined : json['gated'],
        '_private': !exists(json, 'private') ? undefined : json['private'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function DatasetFullInfoToJSON(value?: DatasetFullInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'card_data': value.card_data,
        'citation': value.citation,
        'repository_content': value.repository_content,
        'sha': value.sha,
        'paperswithcode_id': value.paperswithcode_id,
        'dataset_id': value.dataset_id,
        '_id': value._id,
        'created_at': value.created_at,
        'last_modified': value.last_modified,
        'author': value.author,
        'disabled': value.disabled,
        'downloads': value.downloads,
        'gated': value.gated,
        'private': value._private,
        'tags': value.tags,
    };
}
