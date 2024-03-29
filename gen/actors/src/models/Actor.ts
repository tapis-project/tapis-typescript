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

import { exists, mapValues } from '../runtime';
import {
    ActorMount,
    ActorMountFromJSON,
    ActorMountFromJSONTyped,
    ActorMountToJSON,
} from './';

/**
 * 
 * @export
 * @interface Actor
 */
export interface Actor {
    /**
     * The unique identifier of the actor.
     * @type {string}
     * @memberof Actor
     */
    id?: string;
    /**
     * Time (in UTC) the actor was created.
     * @type {string}
     * @memberof Actor
     */
    create_time?: string;
    /**
     * The Docker image associated with the actor.
     * @type {string}
     * @memberof Actor
     */
    image?: string;
    /**
     * The default environment variables and values for the actor.
     * @type {object}
     * @memberof Actor
     */
    default_environment?: object;
    /**
     * User provided description of the actor.
     * @type {string}
     * @memberof Actor
     */
    description?: string;
    /**
     * Time (in UTC) the actor was last updated.
     * @type {string}
     * @memberof Actor
     */
    last_update_time?: string;
    /**
     * Actor identifier of actor to link this actor's events too. May be an actor id or an alias. Cycles not permitted.
     * @type {string}
     * @memberof Actor
     */
    link?: string;
    /**
     * 
     * @type {Array<ActorMount>}
     * @memberof Actor
     */
    mounts?: Array<ActorMount>;
    /**
     * The user who created this actor.
     * @type {string}
     * @memberof Actor
     */
    owner?: string;
    /**
     * Whether the actor runs in privileged mode.
     * @type {boolean}
     * @memberof Actor
     */
    privileged?: boolean;
    /**
     * The command channel that this actor uses.
     * @type {string}
     * @memberof Actor
     */
    queue?: string;
    /**
     * Current state for the actor.
     * @type {object}
     * @memberof Actor
     */
    state?: object;
    /**
     * Whether the actor stores private state between executions.
     * @type {boolean}
     * @memberof Actor
     */
    stateless?: boolean;
    /**
     * Whether this actor requires an OAuth token.
     * @type {boolean}
     * @memberof Actor
     */
    token?: boolean;
    /**
     * Current status of the actor.
     * @type {string}
     * @memberof Actor
     */
    status?: string;
    /**
     * Explanation of status.
     * @type {string}
     * @memberof Actor
     */
    status_message?: string;
    /**
     * String of 'yyyy-mm-dd hh + <number> <unit of time>' format. Turns on cron feature for actor so that at the specified times the actor with execute with a generic static message.
     * @type {string}
     * @memberof Actor
     */
    cron_schedule?: string;
    /**
     * Variable to turn on or off the cron schedule feature for the actor.
     * @type {boolean}
     * @memberof Actor
     */
    cron_on?: boolean;
    /**
     * Next cron execution time for the actor. Only used when `cronOn` is set to True.
     * @type {string}
     * @memberof Actor
     */
    cron_next_ex?: string;
    /**
     * Return type (none, bin, json) for this actor. Default is none.
     * @type {string}
     * @memberof Actor
     */
    type?: ActorTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum ActorTypeEnum {
    None = 'none',
    Bin = 'bin',
    Json = 'json'
}

export function ActorFromJSON(json: any): Actor {
    return ActorFromJSONTyped(json, false);
}

export function ActorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Actor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'create_time': !exists(json, 'create_time') ? undefined : json['create_time'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'default_environment': !exists(json, 'default_environment') ? undefined : json['default_environment'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'last_update_time': !exists(json, 'last_update_time') ? undefined : json['last_update_time'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'mounts': !exists(json, 'mounts') ? undefined : ((json['mounts'] as Array<any>).map(ActorMountFromJSON)),
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'privileged': !exists(json, 'privileged') ? undefined : json['privileged'],
        'queue': !exists(json, 'queue') ? undefined : json['queue'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'stateless': !exists(json, 'stateless') ? undefined : json['stateless'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'status_message': !exists(json, 'status_message') ? undefined : json['status_message'],
        'cron_schedule': !exists(json, 'cron_schedule') ? undefined : json['cron_schedule'],
        'cron_on': !exists(json, 'cron_on') ? undefined : json['cron_on'],
        'cron_next_ex': !exists(json, 'cron_next_ex') ? undefined : json['cron_next_ex'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ActorToJSON(value?: Actor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'create_time': value.create_time,
        'image': value.image,
        'default_environment': value.default_environment,
        'description': value.description,
        'last_update_time': value.last_update_time,
        'link': value.link,
        'mounts': value.mounts === undefined ? undefined : ((value.mounts as Array<any>).map(ActorMountToJSON)),
        'owner': value.owner,
        'privileged': value.privileged,
        'queue': value.queue,
        'state': value.state,
        'stateless': value.stateless,
        'token': value.token,
        'status': value.status,
        'status_message': value.status_message,
        'cron_schedule': value.cron_schedule,
        'cron_on': value.cron_on,
        'cron_next_ex': value.cron_next_ex,
        'type': value.type,
    };
}

