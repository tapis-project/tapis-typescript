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

import { exists, mapValues } from '../runtime';
import {
    ReqCreateChannelTriggersWithActions,
    ReqCreateChannelTriggersWithActionsFromJSON,
    ReqCreateChannelTriggersWithActionsFromJSONTyped,
    ReqCreateChannelTriggersWithActionsToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqCreateChannel
 */
export interface ReqCreateChannel {
    /**
     * User defined channel id.
     * @type {string}
     * @memberof ReqCreateChannel
     */
    channel_id?: string;
    /**
     * User defined channel name.
     * @type {string}
     * @memberof ReqCreateChannel
     */
    channel_name?: string;
    /**
     * Template id.
     * @type {string}
     * @memberof ReqCreateChannel
     */
    template_id?: string;
    /**
     * 
     * @type {Array<ReqCreateChannelTriggersWithActions>}
     * @memberof ReqCreateChannel
     */
    triggers_with_actions?: Array<ReqCreateChannelTriggersWithActions>;
}

export function ReqCreateChannelFromJSON(json: any): ReqCreateChannel {
    return ReqCreateChannelFromJSONTyped(json, false);
}

export function ReqCreateChannelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqCreateChannel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channel_id': !exists(json, 'channel_id') ? undefined : json['channel_id'],
        'channel_name': !exists(json, 'channel_name') ? undefined : json['channel_name'],
        'template_id': !exists(json, 'template_id') ? undefined : json['template_id'],
        'triggers_with_actions': !exists(json, 'triggers_with_actions') ? undefined : ((json['triggers_with_actions'] as Array<any>).map(ReqCreateChannelTriggersWithActionsFromJSON)),
    };
}

export function ReqCreateChannelToJSON(value?: ReqCreateChannel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel_id': value.channel_id,
        'channel_name': value.channel_name,
        'template_id': value.template_id,
        'triggers_with_actions': value.triggers_with_actions === undefined ? undefined : ((value.triggers_with_actions as Array<any>).map(ReqCreateChannelTriggersWithActionsToJSON)),
    };
}

