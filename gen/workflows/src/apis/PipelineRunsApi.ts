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


import * as runtime from '../runtime';
import {
    EnumRunStatus,
    EnumRunStatusFromJSON,
    EnumRunStatusToJSON,
    ReqPatchPipelineRun,
    ReqPatchPipelineRunFromJSON,
    ReqPatchPipelineRunToJSON,
    ReqPipelineLock,
    ReqPipelineLockFromJSON,
    ReqPipelineLockToJSON,
    RespPipelineLockAcquisition,
    RespPipelineLockAcquisitionFromJSON,
    RespPipelineLockAcquisitionToJSON,
    RespPipelineRun,
    RespPipelineRunFromJSON,
    RespPipelineRunToJSON,
    RespPipelineRunList,
    RespPipelineRunListFromJSON,
    RespPipelineRunListToJSON,
    RespString,
    RespStringFromJSON,
    RespStringToJSON,
} from '../models';

export interface AcquirePipelineLockRequest {
    groupId: string;
    pipelineId: string;
    pipelineRunUuid: string;
    reqPipelineLock: ReqPipelineLock;
}

export interface GetPipelineRunRequest {
    groupId: string;
    pipelineId: string;
    pipelineRunUuid: string;
}

export interface ListPipelineRunsRequest {
    groupId: string;
    pipelineId: string;
}

export interface TerminatePipelineRequest {
    groupId: string;
    pipelineId: string;
    pipelineRunUuid: string;
}

export interface UpdatePipelineRunStatusRequest {
    xWORKFLOWEXECUTORTOKEN: string;
    pipelineRunUuid: string;
    status: EnumRunStatus;
    reqPatchPipelineRun?: ReqPatchPipelineRun;
}

/**
 * 
 */
export class PipelineRunsApi extends runtime.BaseAPI {

    /**
     * Attempt to acquire a lock on a Pipeline
     * PipelineRuns
     */
    async acquirePipelineLockRaw(requestParameters: AcquirePipelineLockRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespPipelineLockAcquisition>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling acquirePipelineLock.');
        }

        if (requestParameters.pipelineId === null || requestParameters.pipelineId === undefined) {
            throw new runtime.RequiredError('pipelineId','Required parameter requestParameters.pipelineId was null or undefined when calling acquirePipelineLock.');
        }

        if (requestParameters.pipelineRunUuid === null || requestParameters.pipelineRunUuid === undefined) {
            throw new runtime.RequiredError('pipelineRunUuid','Required parameter requestParameters.pipelineRunUuid was null or undefined when calling acquirePipelineLock.');
        }

        if (requestParameters.reqPipelineLock === null || requestParameters.reqPipelineLock === undefined) {
            throw new runtime.RequiredError('reqPipelineLock','Required parameter requestParameters.reqPipelineLock was null or undefined when calling acquirePipelineLock.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/groups/{group_id}/pipelines/{pipeline_id}/runs/{pipeline_run_uuid}/locks`.replace(`{${"group_id"}}`, encodeURIComponent(String(requestParameters.groupId))).replace(`{${"pipeline_id"}}`, encodeURIComponent(String(requestParameters.pipelineId))).replace(`{${"pipeline_run_uuid"}}`, encodeURIComponent(String(requestParameters.pipelineRunUuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqPipelineLockToJSON(requestParameters.reqPipelineLock),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespPipelineLockAcquisitionFromJSON(jsonValue));
    }

    /**
     * Attempt to acquire a lock on a Pipeline
     * PipelineRuns
     */
    async acquirePipelineLock(requestParameters: AcquirePipelineLockRequest, initOverrides?: RequestInit): Promise<RespPipelineLockAcquisition> {
        const response = await this.acquirePipelineLockRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a pipeline run 
     * Pipeline Runs
     */
    async getPipelineRunRaw(requestParameters: GetPipelineRunRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespPipelineRun>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling getPipelineRun.');
        }

        if (requestParameters.pipelineId === null || requestParameters.pipelineId === undefined) {
            throw new runtime.RequiredError('pipelineId','Required parameter requestParameters.pipelineId was null or undefined when calling getPipelineRun.');
        }

        if (requestParameters.pipelineRunUuid === null || requestParameters.pipelineRunUuid === undefined) {
            throw new runtime.RequiredError('pipelineRunUuid','Required parameter requestParameters.pipelineRunUuid was null or undefined when calling getPipelineRun.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/groups/{group_id}/pipelines/{pipeline_id}/runs/{pipeline_run_uuid}`.replace(`{${"group_id"}}`, encodeURIComponent(String(requestParameters.groupId))).replace(`{${"pipeline_id"}}`, encodeURIComponent(String(requestParameters.pipelineId))).replace(`{${"pipeline_run_uuid"}}`, encodeURIComponent(String(requestParameters.pipelineRunUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespPipelineRunFromJSON(jsonValue));
    }

    /**
     * Get a pipeline run 
     * Pipeline Runs
     */
    async getPipelineRun(requestParameters: GetPipelineRunRequest, initOverrides?: RequestInit): Promise<RespPipelineRun> {
        const response = await this.getPipelineRunRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List runs for a pipeline 
     * Pipeline Runs
     */
    async listPipelineRunsRaw(requestParameters: ListPipelineRunsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespPipelineRunList>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling listPipelineRuns.');
        }

        if (requestParameters.pipelineId === null || requestParameters.pipelineId === undefined) {
            throw new runtime.RequiredError('pipelineId','Required parameter requestParameters.pipelineId was null or undefined when calling listPipelineRuns.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/groups/{group_id}/pipelines/{pipeline_id}/runs`.replace(`{${"group_id"}}`, encodeURIComponent(String(requestParameters.groupId))).replace(`{${"pipeline_id"}}`, encodeURIComponent(String(requestParameters.pipelineId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespPipelineRunListFromJSON(jsonValue));
    }

    /**
     * List runs for a pipeline 
     * Pipeline Runs
     */
    async listPipelineRuns(requestParameters: ListPipelineRunsRequest, initOverrides?: RequestInit): Promise<RespPipelineRunList> {
        const response = await this.listPipelineRunsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Terminate a running pipeline
     * Terminate a running pipeline
     */
    async terminatePipelineRaw(requestParameters: TerminatePipelineRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespPipelineRun>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling terminatePipeline.');
        }

        if (requestParameters.pipelineId === null || requestParameters.pipelineId === undefined) {
            throw new runtime.RequiredError('pipelineId','Required parameter requestParameters.pipelineId was null or undefined when calling terminatePipeline.');
        }

        if (requestParameters.pipelineRunUuid === null || requestParameters.pipelineRunUuid === undefined) {
            throw new runtime.RequiredError('pipelineRunUuid','Required parameter requestParameters.pipelineRunUuid was null or undefined when calling terminatePipeline.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/groups/{group_id}/pipelines/{pipeline_id}/runs/{pipeline_run_uuid}`.replace(`{${"group_id"}}`, encodeURIComponent(String(requestParameters.groupId))).replace(`{${"pipeline_id"}}`, encodeURIComponent(String(requestParameters.pipelineId))).replace(`{${"pipeline_run_uuid"}}`, encodeURIComponent(String(requestParameters.pipelineRunUuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespPipelineRunFromJSON(jsonValue));
    }

    /**
     * Terminate a running pipeline
     * Terminate a running pipeline
     */
    async terminatePipeline(requestParameters: TerminatePipelineRequest, initOverrides?: RequestInit): Promise<RespPipelineRun> {
        const response = await this.terminatePipelineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Endpoints that update pipeline runs are only accessible to the Workflow Executor 
     * Pipeline Runs
     */
    async updatePipelineRunStatusRaw(requestParameters: UpdatePipelineRunStatusRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespString>> {
        if (requestParameters.xWORKFLOWEXECUTORTOKEN === null || requestParameters.xWORKFLOWEXECUTORTOKEN === undefined) {
            throw new runtime.RequiredError('xWORKFLOWEXECUTORTOKEN','Required parameter requestParameters.xWORKFLOWEXECUTORTOKEN was null or undefined when calling updatePipelineRunStatus.');
        }

        if (requestParameters.pipelineRunUuid === null || requestParameters.pipelineRunUuid === undefined) {
            throw new runtime.RequiredError('pipelineRunUuid','Required parameter requestParameters.pipelineRunUuid was null or undefined when calling updatePipelineRunStatus.');
        }

        if (requestParameters.status === null || requestParameters.status === undefined) {
            throw new runtime.RequiredError('status','Required parameter requestParameters.status was null or undefined when calling updatePipelineRunStatus.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xWORKFLOWEXECUTORTOKEN !== undefined && requestParameters.xWORKFLOWEXECUTORTOKEN !== null) {
            headerParameters['X-WORKFLOW-EXECUTOR-TOKEN'] = String(requestParameters.xWORKFLOWEXECUTORTOKEN);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/executor/runs/{pipeline_run_uuid}/{status}`.replace(`{${"pipeline_run_uuid"}}`, encodeURIComponent(String(requestParameters.pipelineRunUuid))).replace(`{${"status"}}`, encodeURIComponent(String(requestParameters.status))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ReqPatchPipelineRunToJSON(requestParameters.reqPatchPipelineRun),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespStringFromJSON(jsonValue));
    }

    /**
     * Endpoints that update pipeline runs are only accessible to the Workflow Executor 
     * Pipeline Runs
     */
    async updatePipelineRunStatus(requestParameters: UpdatePipelineRunStatusRequest, initOverrides?: RequestInit): Promise<RespString> {
        const response = await this.updatePipelineRunStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
