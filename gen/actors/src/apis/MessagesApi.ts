/* tslint:disable */
/* eslint-disable */
/**
 * Abaco API
 * Abaco (Actor Based Containers) is an API and distributed computing platform funded by the National Science Foundation to provide Functions-as-a-service to the research computing community. Abaco leverages Docker containers and the Actor Model of Concurrent Computation to provide generic function primitives that are portable, composable and scalable.
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
    BinaryMessage,
    BinaryMessageFromJSON,
    BinaryMessageToJSON,
    JSONMessage,
    JSONMessageFromJSON,
    JSONMessageToJSON,
    RespDeletePendingMessages,
    RespDeletePendingMessagesFromJSON,
    RespDeletePendingMessagesToJSON,
    RespGetMessages,
    RespGetMessagesFromJSON,
    RespGetMessagesToJSON,
    RespSendBinaryMessage,
    RespSendBinaryMessageFromJSON,
    RespSendBinaryMessageToJSON,
    RespSendJsonMessage,
    RespSendJsonMessageFromJSON,
    RespSendJsonMessageToJSON,
    RespSendMessage,
    RespSendMessageFromJSON,
    RespSendMessageToJSON,
} from '../models';

export interface DeletePendingMessagesRequest {
    actorId: string;
}

export interface GetMessagesRequest {
    actorId: string;
}

export interface SendBinaryMessageRequest {
    actorId: string;
    binaryMessage: BinaryMessage;
    abacoSynchronous?: SendBinaryMessageAbacoSynchronousEnum;
}

export interface SendJsonMessageRequest {
    actorId: string;
    jSONMessage: JSONMessage;
    abacoSynchronous?: SendJsonMessageAbacoSynchronousEnum;
}

export interface SendMessageRequest {
    actorId: string;
    jSONMessage: JSONMessage;
    abacoSynchronous?: SendMessageAbacoSynchronousEnum;
}

/**
 * 
 */
export class MessagesApi extends runtime.BaseAPI {

    /**
     * Delete all pending messages actor\'s inbox.
     * delete_pending_messages
     */
    async deletePendingMessagesRaw(requestParameters: DeletePendingMessagesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespDeletePendingMessages>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling deletePendingMessages.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x-nonce"] = this.configuration.apiKey("x-nonce"); // nonce authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-JWT-Assertion-DEV"] = this.configuration.apiKey("X-JWT-Assertion-DEV"); // wso2jwtDevAuth authentication
        }

        const response = await this.request({
            path: `/v3/actors/{actor_id}/messages`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespDeletePendingMessagesFromJSON(jsonValue));
    }

    /**
     * Delete all pending messages actor\'s inbox.
     * delete_pending_messages
     */
    async deletePendingMessages(requestParameters: DeletePendingMessagesRequest, initOverrides?: RequestInit): Promise<RespDeletePendingMessages> {
        const response = await this.deletePendingMessagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get number of pending messages for an actor.
     * get_messages
     */
    async getMessagesRaw(requestParameters: GetMessagesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespGetMessages>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling getMessages.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x-nonce"] = this.configuration.apiKey("x-nonce"); // nonce authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-JWT-Assertion-DEV"] = this.configuration.apiKey("X-JWT-Assertion-DEV"); // wso2jwtDevAuth authentication
        }

        const response = await this.request({
            path: `/v3/actors/{actor_id}/messages`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespGetMessagesFromJSON(jsonValue));
    }

    /**
     * Get number of pending messages for an actor.
     * get_messages
     */
    async getMessages(requestParameters: GetMessagesRequest, initOverrides?: RequestInit): Promise<RespGetMessages> {
        const response = await this.getMessagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Send an actor a binary message
     * send_binary_message
     */
    async sendBinaryMessageRaw(requestParameters: SendBinaryMessageRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespSendBinaryMessage>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling sendBinaryMessage.');
        }

        if (requestParameters.binaryMessage === null || requestParameters.binaryMessage === undefined) {
            throw new runtime.RequiredError('binaryMessage','Required parameter requestParameters.binaryMessage was null or undefined when calling sendBinaryMessage.');
        }

        const queryParameters: any = {};

        if (requestParameters.abacoSynchronous !== undefined) {
            queryParameters['_abaco_synchronous'] = requestParameters.abacoSynchronous;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/octet-stream';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x-nonce"] = this.configuration.apiKey("x-nonce"); // nonce authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-JWT-Assertion-DEV"] = this.configuration.apiKey("X-JWT-Assertion-DEV"); // wso2jwtDevAuth authentication
        }

        const response = await this.request({
            path: `/actors/{actor_id}//messages`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BinaryMessageToJSON(requestParameters.binaryMessage),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespSendBinaryMessageFromJSON(jsonValue));
    }

    /**
     * Send an actor a binary message
     * send_binary_message
     */
    async sendBinaryMessage(requestParameters: SendBinaryMessageRequest, initOverrides?: RequestInit): Promise<RespSendBinaryMessage> {
        const response = await this.sendBinaryMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Send an actor a JSON message
     * send_json_message
     */
    async sendJsonMessageRaw(requestParameters: SendJsonMessageRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespSendJsonMessage>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling sendJsonMessage.');
        }

        if (requestParameters.jSONMessage === null || requestParameters.jSONMessage === undefined) {
            throw new runtime.RequiredError('jSONMessage','Required parameter requestParameters.jSONMessage was null or undefined when calling sendJsonMessage.');
        }

        const queryParameters: any = {};

        if (requestParameters.abacoSynchronous !== undefined) {
            queryParameters['_abaco_synchronous'] = requestParameters.abacoSynchronous;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x-nonce"] = this.configuration.apiKey("x-nonce"); // nonce authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-JWT-Assertion-DEV"] = this.configuration.apiKey("X-JWT-Assertion-DEV"); // wso2jwtDevAuth authentication
        }

        const response = await this.request({
            path: `/actors/{actor_id}///messages`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: JSONMessageToJSON(requestParameters.jSONMessage),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespSendJsonMessageFromJSON(jsonValue));
    }

    /**
     * Send an actor a JSON message
     * send_json_message
     */
    async sendJsonMessage(requestParameters: SendJsonMessageRequest, initOverrides?: RequestInit): Promise<RespSendJsonMessage> {
        const response = await this.sendJsonMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Send an actor a string message
     * send_message
     */
    async sendMessageRaw(requestParameters: SendMessageRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespSendMessage>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling sendMessage.');
        }

        if (requestParameters.jSONMessage === null || requestParameters.jSONMessage === undefined) {
            throw new runtime.RequiredError('jSONMessage','Required parameter requestParameters.jSONMessage was null or undefined when calling sendMessage.');
        }

        const queryParameters: any = {};

        if (requestParameters.abacoSynchronous !== undefined) {
            queryParameters['_abaco_synchronous'] = requestParameters.abacoSynchronous;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x-nonce"] = this.configuration.apiKey("x-nonce"); // nonce authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-JWT-Assertion-DEV"] = this.configuration.apiKey("X-JWT-Assertion-DEV"); // wso2jwtDevAuth authentication
        }

        const response = await this.request({
            path: `/v3/actors/{actor_id}/messages`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: JSONMessageToJSON(requestParameters.jSONMessage),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespSendMessageFromJSON(jsonValue));
    }

    /**
     * Send an actor a string message
     * send_message
     */
    async sendMessage(requestParameters: SendMessageRequest, initOverrides?: RequestInit): Promise<RespSendMessage> {
        const response = await this.sendMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum SendBinaryMessageAbacoSynchronousEnum {
    True = 'true',
    False = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum SendJsonMessageAbacoSynchronousEnum {
    True = 'true',
    False = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum SendMessageAbacoSynchronousEnum {
    True = 'true',
    False = 'false'
}
