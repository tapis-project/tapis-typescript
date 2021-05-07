/* tslint:disable */
/* eslint-disable */
/**
 * Tenants API
 * Manage Tapis Tenants.
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
    ReqCreateSite,
    ReqCreateSiteFromJSON,
    ReqCreateSiteToJSON,
    RespCreateSite,
    RespCreateSiteFromJSON,
    RespCreateSiteToJSON,
    RespDeleteSite,
    RespDeleteSiteFromJSON,
    RespDeleteSiteToJSON,
    RespGetSite,
    RespGetSiteFromJSON,
    RespGetSiteToJSON,
    RespListSites,
    RespListSitesFromJSON,
    RespListSitesToJSON,
} from '../models';

export interface CreateSiteRequest {
    reqCreateSite: ReqCreateSite;
}

export interface DeleteSiteRequest {
    siteId: string;
}

export interface GetSiteRequest {
    siteId: string;
}

export interface ListSitesRequest {
    limit?: number;
    offset?: number;
}

/**
 * 
 */
export class SitesApi extends runtime.BaseAPI {

    /**
     * Create a site.
     * Create a site.
     */
    async createSiteRaw(requestParameters: CreateSiteRequest): Promise<runtime.ApiResponse<RespCreateSite>> {
        if (requestParameters.reqCreateSite === null || requestParameters.reqCreateSite === undefined) {
            throw new runtime.RequiredError('reqCreateSite','Required parameter requestParameters.reqCreateSite was null or undefined when calling createSite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/sites`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateSiteToJSON(requestParameters.reqCreateSite),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespCreateSiteFromJSON(jsonValue));
    }

    /**
     * Create a site.
     * Create a site.
     */
    async createSite(requestParameters: CreateSiteRequest): Promise<RespCreateSite> {
        const response = await this.createSiteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Permenantly delete a site.
     * Delete a site
     */
    async deleteSiteRaw(requestParameters: DeleteSiteRequest): Promise<runtime.ApiResponse<RespDeleteSite>> {
        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling deleteSite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/sites/{site_id}`.replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespDeleteSiteFromJSON(jsonValue));
    }

    /**
     * Permenantly delete a site.
     * Delete a site
     */
    async deleteSite(requestParameters: DeleteSiteRequest): Promise<RespDeleteSite> {
        const response = await this.deleteSiteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details of a specific site by its id.
     * Get site details
     */
    async getSiteRaw(requestParameters: GetSiteRequest): Promise<runtime.ApiResponse<RespGetSite>> {
        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling getSite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/sites/{site_id}`.replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespGetSiteFromJSON(jsonValue));
    }

    /**
     * Get details of a specific site by its id.
     * Get site details
     */
    async getSite(requestParameters: GetSiteRequest): Promise<RespGetSite> {
        const response = await this.getSiteRaw(requestParameters);
        return await response.value();
    }

    /**
     * List sites.
     * List sites.
     */
    async listSitesRaw(requestParameters: ListSitesRequest): Promise<runtime.ApiResponse<RespListSites>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/sites`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespListSitesFromJSON(jsonValue));
    }

    /**
     * List sites.
     * List sites.
     */
    async listSites(requestParameters: ListSitesRequest): Promise<RespListSites> {
        const response = await this.listSitesRaw(requestParameters);
        return await response.value();
    }

}
