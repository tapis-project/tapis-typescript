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


import * as runtime from '../runtime';
import {
    HTTPValidationError,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    NewTemplate,
    NewTemplateFromJSON,
    NewTemplateToJSON,
    NewTemplateTag,
    NewTemplateTagFromJSON,
    NewTemplateTagToJSON,
    TemplateDeleteResponse,
    TemplateDeleteResponseFromJSON,
    TemplateDeleteResponseToJSON,
    TemplateResponse,
    TemplateResponseFromJSON,
    TemplateResponseToJSON,
    TemplateTagResponse,
    TemplateTagResponseFromJSON,
    TemplateTagResponseToJSON,
    TemplateTagsResponse,
    TemplateTagsResponseFromJSON,
    TemplateTagsResponseToJSON,
    TemplatesResponse,
    TemplatesResponseFromJSON,
    TemplatesResponseToJSON,
    UpdateTemplate,
    UpdateTemplateFromJSON,
    UpdateTemplateToJSON,
} from '../models';

export interface AddTemplateRequest {
    newTemplate: NewTemplate;
}

export interface AddTemplateTagRequest {
    templateId: string;
    newTemplateTag: NewTemplateTag;
}

export interface DeleteTemplateRequest {
    templateId: any;
}

export interface GetTemplateRequest {
    templateId: any;
}

export interface GetTemplateTagRequest {
    templateId: string;
    tagId: string;
}

export interface ListTemplateTagsRequest {
    templateId: string;
    full?: boolean;
}

export interface ListTemplatesAndTagsRequest {
    full?: boolean;
}

export interface UpdateTemplateRequest {
    templateId: any;
    updateTemplate: UpdateTemplate;
}

/**
 * 
 */
export class TemplatesApi extends runtime.BaseAPI {

    /**
     * Add a template with inputted information.  Returns new template object.
     * add_template
     */
    async addTemplateRaw(requestParameters: AddTemplateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TemplateResponse>> {
        if (requestParameters.newTemplate === null || requestParameters.newTemplate === undefined) {
            throw new runtime.RequiredError('newTemplate','Required parameter requestParameters.newTemplate was null or undefined when calling addTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/pods/templates`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewTemplateToJSON(requestParameters.newTemplate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TemplateResponseFromJSON(jsonValue));
    }

    /**
     * Add a template with inputted information.  Returns new template object.
     * add_template
     */
    async addTemplate(requestParameters: AddTemplateRequest, initOverrides?: RequestInit): Promise<TemplateResponse> {
        const response = await this.addTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * add_template_tag
     */
    async addTemplateTagRaw(requestParameters: AddTemplateTagRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TemplateTagResponse>> {
        if (requestParameters.templateId === null || requestParameters.templateId === undefined) {
            throw new runtime.RequiredError('templateId','Required parameter requestParameters.templateId was null or undefined when calling addTemplateTag.');
        }

        if (requestParameters.newTemplateTag === null || requestParameters.newTemplateTag === undefined) {
            throw new runtime.RequiredError('newTemplateTag','Required parameter requestParameters.newTemplateTag was null or undefined when calling addTemplateTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/pods/templates/{template_id}/tags`.replace(`{${"template_id"}}`, encodeURIComponent(String(requestParameters.templateId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewTemplateTagToJSON(requestParameters.newTemplateTag),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TemplateTagResponseFromJSON(jsonValue));
    }

    /**
     * add_template_tag
     */
    async addTemplateTag(requestParameters: AddTemplateTagRequest, initOverrides?: RequestInit): Promise<TemplateTagResponse> {
        const response = await this.addTemplateTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a template.  Returns \"\".
     * delete_template
     */
    async deleteTemplateRaw(requestParameters: DeleteTemplateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TemplateDeleteResponse>> {
        if (requestParameters.templateId === null || requestParameters.templateId === undefined) {
            throw new runtime.RequiredError('templateId','Required parameter requestParameters.templateId was null or undefined when calling deleteTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/pods/templates/{template_id}`.replace(`{${"template_id"}}`, encodeURIComponent(String(requestParameters.templateId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TemplateDeleteResponseFromJSON(jsonValue));
    }

    /**
     * Delete a template.  Returns \"\".
     * delete_template
     */
    async deleteTemplate(requestParameters: DeleteTemplateRequest, initOverrides?: RequestInit): Promise<TemplateDeleteResponse> {
        const response = await this.deleteTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a templates.  Returns retrieved templates object.
     * get_template
     */
    async getTemplateRaw(requestParameters: GetTemplateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TemplateResponse>> {
        if (requestParameters.templateId === null || requestParameters.templateId === undefined) {
            throw new runtime.RequiredError('templateId','Required parameter requestParameters.templateId was null or undefined when calling getTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/pods/templates/{template_id}`.replace(`{${"template_id"}}`, encodeURIComponent(String(requestParameters.templateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TemplateResponseFromJSON(jsonValue));
    }

    /**
     * Get a templates.  Returns retrieved templates object.
     * get_template
     */
    async getTemplate(requestParameters: GetTemplateRequest, initOverrides?: RequestInit): Promise<TemplateResponse> {
        const response = await this.getTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a specific tag entry the template has  Returns the tag entry
     * get_template_tag
     */
    async getTemplateTagRaw(requestParameters: GetTemplateTagRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TemplateTagsResponse>> {
        if (requestParameters.templateId === null || requestParameters.templateId === undefined) {
            throw new runtime.RequiredError('templateId','Required parameter requestParameters.templateId was null or undefined when calling getTemplateTag.');
        }

        if (requestParameters.tagId === null || requestParameters.tagId === undefined) {
            throw new runtime.RequiredError('tagId','Required parameter requestParameters.tagId was null or undefined when calling getTemplateTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/pods/templates/{template_id}/tags/{tag_id}`.replace(`{${"template_id"}}`, encodeURIComponent(String(requestParameters.templateId))).replace(`{${"tag_id"}}`, encodeURIComponent(String(requestParameters.tagId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TemplateTagsResponseFromJSON(jsonValue));
    }

    /**
     * Get a specific tag entry the template has  Returns the tag entry
     * get_template_tag
     */
    async getTemplateTag(requestParameters: GetTemplateTagRequest, initOverrides?: RequestInit): Promise<TemplateTagsResponse> {
        const response = await this.getTemplateTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List tag entries the template has  Returns the ledger of template tags
     * list_template_tags
     */
    async listTemplateTagsRaw(requestParameters: ListTemplateTagsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TemplateTagsResponse>> {
        if (requestParameters.templateId === null || requestParameters.templateId === undefined) {
            throw new runtime.RequiredError('templateId','Required parameter requestParameters.templateId was null or undefined when calling listTemplateTags.');
        }

        const queryParameters: any = {};

        if (requestParameters.full !== undefined) {
            queryParameters['full'] = requestParameters.full;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/pods/templates/{template_id}/tags`.replace(`{${"template_id"}}`, encodeURIComponent(String(requestParameters.templateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TemplateTagsResponseFromJSON(jsonValue));
    }

    /**
     * List tag entries the template has  Returns the ledger of template tags
     * list_template_tags
     */
    async listTemplateTags(requestParameters: ListTemplateTagsRequest, initOverrides?: RequestInit): Promise<TemplateTagsResponse> {
        const response = await this.listTemplateTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all templates allowed globally + in respective tenant + for specific user. Returns a list of templates.
     * list_templates
     */
    async listTemplatesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<TemplatesResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/pods/templates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TemplatesResponseFromJSON(jsonValue));
    }

    /**
     * Get all templates allowed globally + in respective tenant + for specific user. Returns a list of templates.
     * list_templates
     */
    async listTemplates(initOverrides?: RequestInit): Promise<TemplatesResponse> {
        const response = await this.listTemplatesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get all templates and their tags for the user. Returns a dictionary with templates and their tags.
     * list_templates_and_tags
     */
    async listTemplatesAndTagsRaw(requestParameters: ListTemplatesAndTagsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        if (requestParameters.full !== undefined) {
            queryParameters['full'] = requestParameters.full;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/pods/templates/tags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get all templates and their tags for the user. Returns a dictionary with templates and their tags.
     * list_templates_and_tags
     */
    async listTemplatesAndTags(requestParameters: ListTemplatesAndTagsRequest, initOverrides?: RequestInit): Promise<object> {
        const response = await this.listTemplatesAndTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a template.  Note: - Fields that change template id cannot be modified. Please recreate your template in that case.  Returns updated template object.
     * update_template
     */
    async updateTemplateRaw(requestParameters: UpdateTemplateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TemplateResponse>> {
        if (requestParameters.templateId === null || requestParameters.templateId === undefined) {
            throw new runtime.RequiredError('templateId','Required parameter requestParameters.templateId was null or undefined when calling updateTemplate.');
        }

        if (requestParameters.updateTemplate === null || requestParameters.updateTemplate === undefined) {
            throw new runtime.RequiredError('updateTemplate','Required parameter requestParameters.updateTemplate was null or undefined when calling updateTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/pods/templates/{template_id}`.replace(`{${"template_id"}}`, encodeURIComponent(String(requestParameters.templateId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateTemplateToJSON(requestParameters.updateTemplate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TemplateResponseFromJSON(jsonValue));
    }

    /**
     * Update a template.  Note: - Fields that change template id cannot be modified. Please recreate your template in that case.  Returns updated template object.
     * update_template
     */
    async updateTemplate(requestParameters: UpdateTemplateRequest, initOverrides?: RequestInit): Promise<TemplateResponse> {
        const response = await this.updateTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
