/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions, credentials and Scheduler Profiles.
 *
 * The version of the OpenAPI document: 1.3.3
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AuthnEnum,
    AuthnEnumFromJSON,
    AuthnEnumFromJSONTyped,
    AuthnEnumToJSON,
    Capability,
    CapabilityFromJSON,
    CapabilityFromJSONTyped,
    CapabilityToJSON,
    JobRuntime,
    JobRuntimeFromJSON,
    JobRuntimeFromJSONTyped,
    JobRuntimeToJSON,
    KeyValuePair,
    KeyValuePairFromJSON,
    KeyValuePairFromJSONTyped,
    KeyValuePairToJSON,
    LogicalQueue,
    LogicalQueueFromJSON,
    LogicalQueueFromJSONTyped,
    LogicalQueueToJSON,
    ReqPostPutCredential,
    ReqPostPutCredentialFromJSON,
    ReqPostPutCredentialFromJSONTyped,
    ReqPostPutCredentialToJSON,
    SchedulerTypeEnum,
    SchedulerTypeEnumFromJSON,
    SchedulerTypeEnumFromJSONTyped,
    SchedulerTypeEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqPutSystem
 */
export interface ReqPutSystem {
    /**
     * 
     * @type {string}
     * @memberof ReqPutSystem
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqPutSystem
     */
    host?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqPutSystem
     */
    effectiveUserId?: string;
    /**
     * 
     * @type {AuthnEnum}
     * @memberof ReqPutSystem
     */
    defaultAuthnMethod?: AuthnEnum;
    /**
     * 
     * @type {ReqPostPutCredential}
     * @memberof ReqPutSystem
     */
    authnCredential?: ReqPostPutCredential;
    /**
     * 
     * @type {number}
     * @memberof ReqPutSystem
     */
    port?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ReqPutSystem
     */
    useProxy?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReqPutSystem
     */
    proxyHost?: string;
    /**
     * 
     * @type {number}
     * @memberof ReqPutSystem
     */
    proxyPort?: number;
    /**
     * 
     * @type {string}
     * @memberof ReqPutSystem
     */
    dtnSystemId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqPutSystem
     */
    dtnMountPoint?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqPutSystem
     */
    dtnMountSourcePath?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReqPutSystem
     */
    canRunBatch?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReqPutSystem
     */
    enableCmdPrefix?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReqPutSystem
     */
    mpiCmd?: string;
    /**
     * 
     * @type {Array<JobRuntime>}
     * @memberof ReqPutSystem
     */
    jobRuntimes?: Array<JobRuntime>;
    /**
     * 
     * @type {string}
     * @memberof ReqPutSystem
     */
    jobWorkingDir?: string;
    /**
     * 
     * @type {Array<KeyValuePair>}
     * @memberof ReqPutSystem
     */
    jobEnvVariables?: Array<KeyValuePair>;
    /**
     * 
     * @type {number}
     * @memberof ReqPutSystem
     */
    jobMaxJobs?: number;
    /**
     * 
     * @type {number}
     * @memberof ReqPutSystem
     */
    jobMaxJobsPerUser?: number;
    /**
     * 
     * @type {SchedulerTypeEnum}
     * @memberof ReqPutSystem
     */
    batchScheduler?: SchedulerTypeEnum;
    /**
     * 
     * @type {Array<LogicalQueue>}
     * @memberof ReqPutSystem
     */
    batchLogicalQueues?: Array<LogicalQueue>;
    /**
     * 
     * @type {string}
     * @memberof ReqPutSystem
     */
    batchDefaultLogicalQueue?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqPutSystem
     */
    batchSchedulerProfile?: string;
    /**
     * 
     * @type {Array<Capability>}
     * @memberof ReqPutSystem
     */
    jobCapabilities?: Array<Capability>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReqPutSystem
     */
    tags?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof ReqPutSystem
     */
    notes?: object;
    /**
     * 
     * @type {string}
     * @memberof ReqPutSystem
     */
    importRefId?: string;
}

export function ReqPutSystemFromJSON(json: any): ReqPutSystem {
    return ReqPutSystemFromJSONTyped(json, false);
}

export function ReqPutSystemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqPutSystem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'host': !exists(json, 'host') ? undefined : json['host'],
        'effectiveUserId': !exists(json, 'effectiveUserId') ? undefined : json['effectiveUserId'],
        'defaultAuthnMethod': !exists(json, 'defaultAuthnMethod') ? undefined : AuthnEnumFromJSON(json['defaultAuthnMethod']),
        'authnCredential': !exists(json, 'authnCredential') ? undefined : ReqPostPutCredentialFromJSON(json['authnCredential']),
        'port': !exists(json, 'port') ? undefined : json['port'],
        'useProxy': !exists(json, 'useProxy') ? undefined : json['useProxy'],
        'proxyHost': !exists(json, 'proxyHost') ? undefined : json['proxyHost'],
        'proxyPort': !exists(json, 'proxyPort') ? undefined : json['proxyPort'],
        'dtnSystemId': !exists(json, 'dtnSystemId') ? undefined : json['dtnSystemId'],
        'dtnMountPoint': !exists(json, 'dtnMountPoint') ? undefined : json['dtnMountPoint'],
        'dtnMountSourcePath': !exists(json, 'dtnMountSourcePath') ? undefined : json['dtnMountSourcePath'],
        'canRunBatch': !exists(json, 'canRunBatch') ? undefined : json['canRunBatch'],
        'enableCmdPrefix': !exists(json, 'enableCmdPrefix') ? undefined : json['enableCmdPrefix'],
        'mpiCmd': !exists(json, 'mpiCmd') ? undefined : json['mpiCmd'],
        'jobRuntimes': !exists(json, 'jobRuntimes') ? undefined : ((json['jobRuntimes'] as Array<any>).map(JobRuntimeFromJSON)),
        'jobWorkingDir': !exists(json, 'jobWorkingDir') ? undefined : json['jobWorkingDir'],
        'jobEnvVariables': !exists(json, 'jobEnvVariables') ? undefined : ((json['jobEnvVariables'] as Array<any>).map(KeyValuePairFromJSON)),
        'jobMaxJobs': !exists(json, 'jobMaxJobs') ? undefined : json['jobMaxJobs'],
        'jobMaxJobsPerUser': !exists(json, 'jobMaxJobsPerUser') ? undefined : json['jobMaxJobsPerUser'],
        'batchScheduler': !exists(json, 'batchScheduler') ? undefined : SchedulerTypeEnumFromJSON(json['batchScheduler']),
        'batchLogicalQueues': !exists(json, 'batchLogicalQueues') ? undefined : ((json['batchLogicalQueues'] as Array<any>).map(LogicalQueueFromJSON)),
        'batchDefaultLogicalQueue': !exists(json, 'batchDefaultLogicalQueue') ? undefined : json['batchDefaultLogicalQueue'],
        'batchSchedulerProfile': !exists(json, 'batchSchedulerProfile') ? undefined : json['batchSchedulerProfile'],
        'jobCapabilities': !exists(json, 'jobCapabilities') ? undefined : ((json['jobCapabilities'] as Array<any>).map(CapabilityFromJSON)),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'importRefId': !exists(json, 'importRefId') ? undefined : json['importRefId'],
    };
}

export function ReqPutSystemToJSON(value?: ReqPutSystem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'host': value.host,
        'effectiveUserId': value.effectiveUserId,
        'defaultAuthnMethod': AuthnEnumToJSON(value.defaultAuthnMethod),
        'authnCredential': ReqPostPutCredentialToJSON(value.authnCredential),
        'port': value.port,
        'useProxy': value.useProxy,
        'proxyHost': value.proxyHost,
        'proxyPort': value.proxyPort,
        'dtnSystemId': value.dtnSystemId,
        'dtnMountPoint': value.dtnMountPoint,
        'dtnMountSourcePath': value.dtnMountSourcePath,
        'canRunBatch': value.canRunBatch,
        'enableCmdPrefix': value.enableCmdPrefix,
        'mpiCmd': value.mpiCmd,
        'jobRuntimes': value.jobRuntimes === undefined ? undefined : ((value.jobRuntimes as Array<any>).map(JobRuntimeToJSON)),
        'jobWorkingDir': value.jobWorkingDir,
        'jobEnvVariables': value.jobEnvVariables === undefined ? undefined : ((value.jobEnvVariables as Array<any>).map(KeyValuePairToJSON)),
        'jobMaxJobs': value.jobMaxJobs,
        'jobMaxJobsPerUser': value.jobMaxJobsPerUser,
        'batchScheduler': SchedulerTypeEnumToJSON(value.batchScheduler),
        'batchLogicalQueues': value.batchLogicalQueues === undefined ? undefined : ((value.batchLogicalQueues as Array<any>).map(LogicalQueueToJSON)),
        'batchDefaultLogicalQueue': value.batchDefaultLogicalQueue,
        'batchSchedulerProfile': value.batchSchedulerProfile,
        'jobCapabilities': value.jobCapabilities === undefined ? undefined : ((value.jobCapabilities as Array<any>).map(CapabilityToJSON)),
        'tags': value.tags,
        'notes': value.notes,
        'importRefId': value.importRefId,
    };
}
