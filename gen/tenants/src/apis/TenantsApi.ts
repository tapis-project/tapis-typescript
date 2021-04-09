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
    BasicResponse,
    BasicResponseFromJSON,
    BasicResponseToJSON,
    Owner,
    OwnerFromJSON,
    OwnerToJSON,
    ReqCreateLdap,
    ReqCreateLdapFromJSON,
    ReqCreateLdapToJSON,
    ReqCreateTenant,
    ReqCreateTenantFromJSON,
    ReqCreateTenantToJSON,
} from '../models';

export interface CreateLdapRequest {
    reqCreateLdap: ReqCreateLdap;
}

export interface CreateOwnerRequest {
    owner: Owner;
}

export interface CreateTenantRequest {
    reqCreateTenant: ReqCreateTenant;
}

export interface DeleteLdapRequest {
    ldapId: string;
}

export interface DeleteOwnerRequest {
    email: string;
}

export interface DeleteTenantRequest {
    tenantId: string;
}

export interface GetLdapRequest {
    ldapId: string;
}

export interface GetOwnerRequest {
    email: string;
}

export interface GetTenantRequest {
    tenantId: string;
}

export interface ListLdapsRequest {
    limit?: number;
    offset?: number;
}

export interface ListOwnersRequest {
    limit?: number;
    offset?: number;
}

export interface ListTenantsRequest {
    limit?: number;
    offset?: number;
}

/**
 * 
 */
export class TenantsApi extends runtime.BaseAPI {

    /**
     * Create an ldap
     * Create an ldap
     */
    async createLdapRaw(requestParameters: CreateLdapRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.reqCreateLdap === null || requestParameters.reqCreateLdap === undefined) {
            throw new runtime.RequiredError('reqCreateLdap','Required parameter requestParameters.reqCreateLdap was null or undefined when calling createLdap.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/tenants/ldaps`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateLdapToJSON(requestParameters.reqCreateLdap),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Create an ldap
     * Create an ldap
     */
    async createLdap(requestParameters: CreateLdapRequest): Promise<BasicResponse> {
        const response = await this.createLdapRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create an owner
     * Create an owner
     */
    async createOwnerRaw(requestParameters: CreateOwnerRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createOwner.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/tenants/owners`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OwnerToJSON(requestParameters.owner),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Create an owner
     * Create an owner
     */
    async createOwner(requestParameters: CreateOwnerRequest): Promise<BasicResponse> {
        const response = await this.createOwnerRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a tenant.
     * Create a tenant.
     */
    async createTenantRaw(requestParameters: CreateTenantRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.reqCreateTenant === null || requestParameters.reqCreateTenant === undefined) {
            throw new runtime.RequiredError('reqCreateTenant','Required parameter requestParameters.reqCreateTenant was null or undefined when calling createTenant.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/tenants`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateTenantToJSON(requestParameters.reqCreateTenant),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Create a tenant.
     * Create a tenant.
     */
    async createTenant(requestParameters: CreateTenantRequest): Promise<BasicResponse> {
        const response = await this.createTenantRaw(requestParameters);
        return await response.value();
    }

    /**
     * Permenantly delete an ldap.
     * Delete ldap
     */
    async deleteLdapRaw(requestParameters: DeleteLdapRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.ldapId === null || requestParameters.ldapId === undefined) {
            throw new runtime.RequiredError('ldapId','Required parameter requestParameters.ldapId was null or undefined when calling deleteLdap.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/tenants/ldaps/{ldap_id}`.replace(`{${"ldap_id"}}`, encodeURIComponent(String(requestParameters.ldapId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Permenantly delete an ldap.
     * Delete ldap
     */
    async deleteLdap(requestParameters: DeleteLdapRequest): Promise<BasicResponse> {
        const response = await this.deleteLdapRaw(requestParameters);
        return await response.value();
    }

    /**
     * Permenantly delete an owner.
     * Delete owner
     */
    async deleteOwnerRaw(requestParameters: DeleteOwnerRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.email === null || requestParameters.email === undefined) {
            throw new runtime.RequiredError('email','Required parameter requestParameters.email was null or undefined when calling deleteOwner.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/tenants/owners/{email}`.replace(`{${"email"}}`, encodeURIComponent(String(requestParameters.email))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Permenantly delete an owner.
     * Delete owner
     */
    async deleteOwner(requestParameters: DeleteOwnerRequest): Promise<BasicResponse> {
        const response = await this.deleteOwnerRaw(requestParameters);
        return await response.value();
    }

    /**
     * Permenantly delete a tenant.
     * Delete a tenant
     */
    async deleteTenantRaw(requestParameters: DeleteTenantRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.tenantId === null || requestParameters.tenantId === undefined) {
            throw new runtime.RequiredError('tenantId','Required parameter requestParameters.tenantId was null or undefined when calling deleteTenant.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/tenants/{tenant_id}`.replace(`{${"tenant_id"}}`, encodeURIComponent(String(requestParameters.tenantId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Permenantly delete a tenant.
     * Delete a tenant
     */
    async deleteTenant(requestParameters: DeleteTenantRequest): Promise<BasicResponse> {
        const response = await this.deleteTenantRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details of a specific ldap by its id.
     * Get ldap details
     */
    async getLdapRaw(requestParameters: GetLdapRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.ldapId === null || requestParameters.ldapId === undefined) {
            throw new runtime.RequiredError('ldapId','Required parameter requestParameters.ldapId was null or undefined when calling getLdap.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/tenants/ldaps/{ldap_id}`.replace(`{${"ldap_id"}}`, encodeURIComponent(String(requestParameters.ldapId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Get details of a specific ldap by its id.
     * Get ldap details
     */
    async getLdap(requestParameters: GetLdapRequest): Promise<BasicResponse> {
        const response = await this.getLdapRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details of a specific owner by its email address.
     * Get owner details
     */
    async getOwnerRaw(requestParameters: GetOwnerRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.email === null || requestParameters.email === undefined) {
            throw new runtime.RequiredError('email','Required parameter requestParameters.email was null or undefined when calling getOwner.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/tenants/owners/{email}`.replace(`{${"email"}}`, encodeURIComponent(String(requestParameters.email))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Get details of a specific owner by its email address.
     * Get owner details
     */
    async getOwner(requestParameters: GetOwnerRequest): Promise<BasicResponse> {
        const response = await this.getOwnerRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details of a specific tenant by its id.
     * Get tenant details
     */
    async getTenantRaw(requestParameters: GetTenantRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.tenantId === null || requestParameters.tenantId === undefined) {
            throw new runtime.RequiredError('tenantId','Required parameter requestParameters.tenantId was null or undefined when calling getTenant.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/tenants/{tenant_id}`.replace(`{${"tenant_id"}}`, encodeURIComponent(String(requestParameters.tenantId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Get details of a specific tenant by its id.
     * Get tenant details
     */
    async getTenant(requestParameters: GetTenantRequest): Promise<BasicResponse> {
        const response = await this.getTenantRaw(requestParameters);
        return await response.value();
    }

    /**
     * List ldaps
     * List ldaps
     */
    async listLdapsRaw(requestParameters: ListLdapsRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/tenants/ldaps`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * List ldaps
     * List ldaps
     */
    async listLdaps(requestParameters: ListLdapsRequest): Promise<BasicResponse> {
        const response = await this.listLdapsRaw(requestParameters);
        return await response.value();
    }

    /**
     * List owners
     * List owners
     */
    async listOwnersRaw(requestParameters: ListOwnersRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/tenants/owners`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * List owners
     * List owners
     */
    async listOwners(requestParameters: ListOwnersRequest): Promise<BasicResponse> {
        const response = await this.listOwnersRaw(requestParameters);
        return await response.value();
    }

    /**
     * List tenants.
     * List tenants.
     */
    async listTenantsRaw(requestParameters: ListTenantsRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/tenants`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * List tenants.
     * List tenants.
     */
    async listTenants(requestParameters: ListTenantsRequest): Promise<BasicResponse> {
        const response = await this.listTenantsRaw(requestParameters);
        return await response.value();
    }

}
