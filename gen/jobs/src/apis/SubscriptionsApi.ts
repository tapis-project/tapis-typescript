/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Jobs API
 * The Tapis Jobs API executes jobs on Tapis systems.
 *
 * The version of the OpenAPI document: 0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ReqSubscribe,
    ReqSubscribeFromJSON,
    ReqSubscribeToJSON,
    RespBasic,
    RespBasicFromJSON,
    RespBasicToJSON,
    RespGetSubscriptions,
    RespGetSubscriptionsFromJSON,
    RespGetSubscriptionsToJSON,
    RespResourceUrl,
    RespResourceUrlFromJSON,
    RespResourceUrlToJSON,
    ResultChangeCount,
    ResultChangeCountFromJSON,
    ResultChangeCountToJSON,
} from '../models';

export interface DeleteSubscriptionsRequest {
    uuid: string;
    pretty?: boolean;
}

export interface GetSubscriptionsRequest {
    jobUuid: string;
    limit?: number;
    skip?: number;
    pretty?: boolean;
}

export interface SubscribeRequest {
    jobUuid: string;
    reqSubscribe: ReqSubscribe;
    pretty?: boolean;
}

/**
 * 
 */
export class SubscriptionsApi extends runtime.BaseAPI {

    /**
     * Depending on the UUID provide, this API either deletes a single subscription from a job or all subscriptions from a job. To delete single subscription, provide the UUID of that subscription as listed in the subscription retrieval result for the job.  To delete all a job\'s subscriptions, specify the job UUID.  Like all Job subscription APIs, modifications only affect running jobs and never change the saved job definition. As a consequence, job resubmissions are not affected by runtime subscription changes.
     */
    async deleteSubscriptionsRaw(requestParameters: DeleteSubscriptionsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResultChangeCount>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteSubscriptions.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/jobs/subscribe/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultChangeCountFromJSON(jsonValue));
    }

    /**
     * Depending on the UUID provide, this API either deletes a single subscription from a job or all subscriptions from a job. To delete single subscription, provide the UUID of that subscription as listed in the subscription retrieval result for the job.  To delete all a job\'s subscriptions, specify the job UUID.  Like all Job subscription APIs, modifications only affect running jobs and never change the saved job definition. As a consequence, job resubmissions are not affected by runtime subscription changes.
     */
    async deleteSubscriptions(requestParameters: DeleteSubscriptionsRequest, initOverrides?: RequestInit): Promise<ResultChangeCount> {
        const response = await this.deleteSubscriptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a job\'s subscriptions fom the Notifications service. After subscriptions expire or are deleted by user action they may no longer be listed in Notification service. To inspect the initial set of subscriptions assigned to a job, retrieve the job definition.
     */
    async getSubscriptionsRaw(requestParameters: GetSubscriptionsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespGetSubscriptions>> {
        if (requestParameters.jobUuid === null || requestParameters.jobUuid === undefined) {
            throw new runtime.RequiredError('jobUuid','Required parameter requestParameters.jobUuid was null or undefined when calling getSubscriptions.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.skip !== undefined) {
            queryParameters['skip'] = requestParameters.skip;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/jobs/subscribe/{jobUuid}`.replace(`{${"jobUuid"}}`, encodeURIComponent(String(requestParameters.jobUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespGetSubscriptionsFromJSON(jsonValue));
    }

    /**
     * Retrieve a job\'s subscriptions fom the Notifications service. After subscriptions expire or are deleted by user action they may no longer be listed in Notification service. To inspect the initial set of subscriptions assigned to a job, retrieve the job definition.
     */
    async getSubscriptions(requestParameters: GetSubscriptionsRequest, initOverrides?: RequestInit): Promise<RespGetSubscriptions> {
        const response = await this.getSubscriptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Subcribe to a running job identified by it\'s UUID. The caller must be the job owner or a tenant administrator.  Like all Job subscription APIs, modifications only affect running jobs and never change the saved job definition. As a consequence, job resubmissions are not affected by runtime subscription changes.  The events to which one can subscribe are:  - JOB_NEW_STATUS - the job has transitioned to a new status - JOB_INPUT_TRANSACTION_ID - a request to stage job input files has been submitted - JOB_ARCHIVE_TRANSACTION_ID - a request to archive job output files has been submitted - JOB_SUBSCRIPTION - a change to the job\'s subscriptions has occurred - JOB_SHARE_EVENT - a job resource has been shared or unshared - JOB_ERROR_MESSAGE - the job experienced an error - JOB_USER_EVENT - user generated events - ALL - all job event categories 
     */
    async subscribeRaw(requestParameters: SubscribeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespResourceUrl>> {
        if (requestParameters.jobUuid === null || requestParameters.jobUuid === undefined) {
            throw new runtime.RequiredError('jobUuid','Required parameter requestParameters.jobUuid was null or undefined when calling subscribe.');
        }

        if (requestParameters.reqSubscribe === null || requestParameters.reqSubscribe === undefined) {
            throw new runtime.RequiredError('reqSubscribe','Required parameter requestParameters.reqSubscribe was null or undefined when calling subscribe.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/jobs/subscribe/{jobUuid}`.replace(`{${"jobUuid"}}`, encodeURIComponent(String(requestParameters.jobUuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqSubscribeToJSON(requestParameters.reqSubscribe),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespResourceUrlFromJSON(jsonValue));
    }

    /**
     * Subcribe to a running job identified by it\'s UUID. The caller must be the job owner or a tenant administrator.  Like all Job subscription APIs, modifications only affect running jobs and never change the saved job definition. As a consequence, job resubmissions are not affected by runtime subscription changes.  The events to which one can subscribe are:  - JOB_NEW_STATUS - the job has transitioned to a new status - JOB_INPUT_TRANSACTION_ID - a request to stage job input files has been submitted - JOB_ARCHIVE_TRANSACTION_ID - a request to archive job output files has been submitted - JOB_SUBSCRIPTION - a change to the job\'s subscriptions has occurred - JOB_SHARE_EVENT - a job resource has been shared or unshared - JOB_ERROR_MESSAGE - the job experienced an error - JOB_USER_EVENT - user generated events - ALL - all job event categories 
     */
    async subscribe(requestParameters: SubscribeRequest, initOverrides?: RequestInit): Promise<RespResourceUrl> {
        const response = await this.subscribeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
