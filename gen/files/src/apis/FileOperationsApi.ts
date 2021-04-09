/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Files API
 * My API
 *
 * The version of the OpenAPI document: 0.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    FileListingResponse,
    FileListingResponseFromJSON,
    FileListingResponseToJSON,
    FileStringResponse,
    FileStringResponseFromJSON,
    FileStringResponseToJSON,
} from '../models';

export interface DeleteRequest {
    systemId: string;
    path: string;
}

export interface ListFilesRequest {
    systemId: string;
    path: string;
    limit?: number;
    offset?: number;
    meta?: boolean;
}

export interface MkdirRequest {
    systemId: string;
    path: string;
}

export interface RenameRequest {
    systemId: string;
    path: string;
    newName: string;
}

/**
 * 
 */
export class FileOperationsApi extends runtime.BaseAPI {

    /**
     * Delete a file in {systemID} at path {path}.
     * Delete a file or folder
     */
    async _deleteRaw(requestParameters: DeleteRequest): Promise<runtime.ApiResponse<FileStringResponse>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling _delete.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling _delete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/files/ops/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FileStringResponseFromJSON(jsonValue));
    }

    /**
     * Delete a file in {systemID} at path {path}.
     * Delete a file or folder
     */
    async _delete(requestParameters: DeleteRequest): Promise<FileStringResponse> {
        const response = await this._deleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * List files in a bucket
     * List files/objects in a storage system.
     */
    async listFilesRaw(requestParameters: ListFilesRequest): Promise<runtime.ApiResponse<FileListingResponse>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling listFiles.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling listFiles.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.meta !== undefined) {
            queryParameters['meta'] = requestParameters.meta;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/files/ops/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FileListingResponseFromJSON(jsonValue));
    }

    /**
     * List files in a bucket
     * List files/objects in a storage system.
     */
    async listFiles(requestParameters: ListFilesRequest): Promise<FileListingResponse> {
        const response = await this.listFilesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a directory in the system at path the given path
     * Create a directory
     */
    async mkdirRaw(requestParameters: MkdirRequest): Promise<runtime.ApiResponse<FileStringResponse>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling mkdir.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling mkdir.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/files/ops/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FileStringResponseFromJSON(jsonValue));
    }

    /**
     * Create a directory in the system at path the given path
     * Create a directory
     */
    async mkdir(requestParameters: MkdirRequest): Promise<FileStringResponse> {
        const response = await this.mkdirRaw(requestParameters);
        return await response.value();
    }

    /**
     * Move/Rename a file in {systemID} at path {path}.
     * Rename a file or folder
     */
    async renameRaw(requestParameters: RenameRequest): Promise<runtime.ApiResponse<FileStringResponse>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling rename.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling rename.');
        }

        if (requestParameters.newName === null || requestParameters.newName === undefined) {
            throw new runtime.RequiredError('newName','Required parameter requestParameters.newName was null or undefined when calling rename.');
        }

        const queryParameters: any = {};

        if (requestParameters.newName !== undefined) {
            queryParameters['newName'] = requestParameters.newName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/files/ops/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FileStringResponseFromJSON(jsonValue));
    }

    /**
     * Move/Rename a file in {systemID} at path {path}.
     * Rename a file or folder
     */
    async rename(requestParameters: RenameRequest): Promise<FileStringResponse> {
        const response = await this.renameRaw(requestParameters);
        return await response.value();
    }

}