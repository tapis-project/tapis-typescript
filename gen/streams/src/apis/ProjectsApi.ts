/* tslint:disable */
/* eslint-disable */
/**
 * Streams API
 * Manage Tapis Streams API.
 *
 * The version of the OpenAPI document: 1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    BasicResponse,
    BasicResponseFromJSON,
    BasicResponseToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ReqCreateProject,
    ReqCreateProjectFromJSON,
    ReqCreateProjectToJSON,
} from '../models';

export interface CreateProjectRequest {
    reqCreateProject: ReqCreateProject;
}

export interface DeleteProjectRequest {
    projectUuid: string;
}

export interface GetProjectRequest {
    projectUuid: string;
}

export interface ListProjectsRequest {
    query?: string;
    limit?: number;
    offset?: number;
}

export interface UpdateProjectRequest {
    projectUuid: string;
    reqCreateProject: ReqCreateProject;
}

/**
 * 
 */
export class ProjectsApi extends runtime.BaseAPI {

    /**
     * Create a project.
     * Create a project.
     */
    async createProjectRaw(requestParameters: CreateProjectRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.reqCreateProject === null || requestParameters.reqCreateProject === undefined) {
            throw new runtime.RequiredError('reqCreateProject','Required parameter requestParameters.reqCreateProject was null or undefined when calling createProject.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/streams/projects`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateProjectToJSON(requestParameters.reqCreateProject),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Create a project.
     * Create a project.
     */
    async createProject(requestParameters: CreateProjectRequest): Promise<BasicResponse> {
        const response = await this.createProjectRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete a project
     * Delete a project
     */
    async deleteProjectRaw(requestParameters: DeleteProjectRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.projectUuid === null || requestParameters.projectUuid === undefined) {
            throw new runtime.RequiredError('projectUuid','Required parameter requestParameters.projectUuid was null or undefined when calling deleteProject.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/streams/projects/{project_uuid}`.replace(`{${"project_uuid"}}`, encodeURIComponent(String(requestParameters.projectUuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Delete a project
     * Delete a project
     */
    async deleteProject(requestParameters: DeleteProjectRequest): Promise<BasicResponse> {
        const response = await this.deleteProjectRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get project details.
     * Get project details.
     */
    async getProjectRaw(requestParameters: GetProjectRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.projectUuid === null || requestParameters.projectUuid === undefined) {
            throw new runtime.RequiredError('projectUuid','Required parameter requestParameters.projectUuid was null or undefined when calling getProject.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/streams/projects/{project_uuid}`.replace(`{${"project_uuid"}}`, encodeURIComponent(String(requestParameters.projectUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Get project details.
     * Get project details.
     */
    async getProject(requestParameters: GetProjectRequest): Promise<BasicResponse> {
        const response = await this.getProjectRaw(requestParameters);
        return await response.value();
    }

    /**
     * List projects.
     * List projects.
     */
    async listProjectsRaw(requestParameters: ListProjectsRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        const queryParameters: any = {};

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/streams/projects`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * List projects.
     * List projects.
     */
    async listProjects(requestParameters: ListProjectsRequest): Promise<BasicResponse> {
        const response = await this.listProjectsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update a project
     * Update a project
     */
    async updateProjectRaw(requestParameters: UpdateProjectRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.projectUuid === null || requestParameters.projectUuid === undefined) {
            throw new runtime.RequiredError('projectUuid','Required parameter requestParameters.projectUuid was null or undefined when calling updateProject.');
        }

        if (requestParameters.reqCreateProject === null || requestParameters.reqCreateProject === undefined) {
            throw new runtime.RequiredError('reqCreateProject','Required parameter requestParameters.reqCreateProject was null or undefined when calling updateProject.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/streams/projects/{project_uuid}`.replace(`{${"project_uuid"}}`, encodeURIComponent(String(requestParameters.projectUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateProjectToJSON(requestParameters.reqCreateProject),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Update a project
     * Update a project
     */
    async updateProject(requestParameters: UpdateProjectRequest): Promise<BasicResponse> {
        const response = await this.updateProjectRaw(requestParameters);
        return await response.value();
    }

}
