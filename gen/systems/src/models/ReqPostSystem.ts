/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions, credentials and Scheduler Profiles.
 *
 * The version of the OpenAPI document: 1.7.0
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
    SystemTypeEnum,
    SystemTypeEnumFromJSON,
    SystemTypeEnumFromJSONTyped,
    SystemTypeEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqPostSystem
 */
export interface ReqPostSystem {
    /**
     * Short descriptive name for the system that is unique within the tenant.
     * @type {string}
     * @memberof ReqPostSystem
     */
    id: string;
    /**
     * Optional more verbose description.
     * @type {string}
     * @memberof ReqPostSystem
     */
    description?: string;
    /**
     * 
     * @type {SystemTypeEnum}
     * @memberof ReqPostSystem
     */
    systemType: SystemTypeEnum;
    /**
     * A specific user set at system creation.
     * @type {string}
     * @memberof ReqPostSystem
     */
    owner?: string;
    /**
     * FQDN, IP address, Globus endpoint ID or Globus collection ID.
     * @type {string}
     * @memberof ReqPostSystem
     */
    host: string;
    /**
     * Indicates if system is currently considered active and available for use.
     * @type {boolean}
     * @memberof ReqPostSystem
     */
    enabled?: boolean;
    /**
     * Username to use when accessing the system. A specific user (such as a service account) or the dynamic user ``${apiUserId}``.
     * @type {string}
     * @memberof ReqPostSystem
     */
    effectiveUserId?: string;
    /**
     * 
     * @type {AuthnEnum}
     * @memberof ReqPostSystem
     */
    defaultAuthnMethod: AuthnEnum;
    /**
     * 
     * @type {ReqPostPutCredential}
     * @memberof ReqPostSystem
     */
    authnCredential?: ReqPostPutCredential;
    /**
     * Name of the bucket for an S3 type system.
     * @type {string}
     * @memberof ReqPostSystem
     */
    bucketName?: string;
    /**
     * Effective root directory to be used when listing files or moving files to and from the system.
     * @type {string}
     * @memberof ReqPostSystem
     */
    rootDir?: string;
    /**
     * 
     * @type {number}
     * @memberof ReqPostSystem
     */
    port?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ReqPostSystem
     */
    useProxy?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReqPostSystem
     */
    proxyHost?: string;
    /**
     * 
     * @type {number}
     * @memberof ReqPostSystem
     */
    proxyPort?: number;
    /**
     * An alternate system to use as a Data Transfer Node (DTN) during job execution.
     * @type {string}
     * @memberof ReqPostSystem
     */
    dtnSystemId?: string;
    /**
     * Indicates if system can be used to execute jobs.
     * @type {boolean}
     * @memberof ReqPostSystem
     */
    canExec: boolean;
    /**
     * Indicates if system supports running jobs using a batch scheduler.
     * @type {boolean}
     * @memberof ReqPostSystem
     */
    canRunBatch?: boolean;
    /**
     * Indicates if system allows a job submission request to specify a *cmdPrefix*.
     * @type {boolean}
     * @memberof ReqPostSystem
     */
    enableCmdPrefix?: boolean;
    /**
     * Indicates if system allows for the creation of child systems.
     * @type {boolean}
     * @memberof ReqPostSystem
     */
    allowChildren?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReqPostSystem
     */
    mpiCmd?: string;
    /**
     * 
     * @type {Array<JobRuntime>}
     * @memberof ReqPostSystem
     */
    jobRuntimes?: Array<JobRuntime>;
    /**
     * 
     * @type {string}
     * @memberof ReqPostSystem
     */
    jobWorkingDir?: string;
    /**
     * 
     * @type {Array<KeyValuePair>}
     * @memberof ReqPostSystem
     */
    jobEnvVariables?: Array<KeyValuePair>;
    /**
     * 
     * @type {number}
     * @memberof ReqPostSystem
     */
    jobMaxJobs?: number;
    /**
     * 
     * @type {number}
     * @memberof ReqPostSystem
     */
    jobMaxJobsPerUser?: number;
    /**
     * 
     * @type {SchedulerTypeEnum}
     * @memberof ReqPostSystem
     */
    batchScheduler?: SchedulerTypeEnum;
    /**
     * 
     * @type {Array<LogicalQueue>}
     * @memberof ReqPostSystem
     */
    batchLogicalQueues?: Array<LogicalQueue>;
    /**
     * 
     * @type {string}
     * @memberof ReqPostSystem
     */
    batchDefaultLogicalQueue?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqPostSystem
     */
    batchSchedulerProfile?: string;
    /**
     * 
     * @type {Array<Capability>}
     * @memberof ReqPostSystem
     */
    jobCapabilities?: Array<Capability>;
    /**
     * List of tags as simple strings.
     * @type {Array<string>}
     * @memberof ReqPostSystem
     */
    tags?: Array<string>;
    /**
     * Metadata in the form of a Json object. Not used by Tapis.
     * @type {object}
     * @memberof ReqPostSystem
     */
    notes?: object;
}

export function ReqPostSystemFromJSON(json: any): ReqPostSystem {
    return ReqPostSystemFromJSONTyped(json, false);
}

export function ReqPostSystemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqPostSystem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'systemType': SystemTypeEnumFromJSON(json['systemType']),
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'host': json['host'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'effectiveUserId': !exists(json, 'effectiveUserId') ? undefined : json['effectiveUserId'],
        'defaultAuthnMethod': AuthnEnumFromJSON(json['defaultAuthnMethod']),
        'authnCredential': !exists(json, 'authnCredential') ? undefined : ReqPostPutCredentialFromJSON(json['authnCredential']),
        'bucketName': !exists(json, 'bucketName') ? undefined : json['bucketName'],
        'rootDir': !exists(json, 'rootDir') ? undefined : json['rootDir'],
        'port': !exists(json, 'port') ? undefined : json['port'],
        'useProxy': !exists(json, 'useProxy') ? undefined : json['useProxy'],
        'proxyHost': !exists(json, 'proxyHost') ? undefined : json['proxyHost'],
        'proxyPort': !exists(json, 'proxyPort') ? undefined : json['proxyPort'],
        'dtnSystemId': !exists(json, 'dtnSystemId') ? undefined : json['dtnSystemId'],
        'canExec': json['canExec'],
        'canRunBatch': !exists(json, 'canRunBatch') ? undefined : json['canRunBatch'],
        'enableCmdPrefix': !exists(json, 'enableCmdPrefix') ? undefined : json['enableCmdPrefix'],
        'allowChildren': !exists(json, 'allowChildren') ? undefined : json['allowChildren'],
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
    };
}

export function ReqPostSystemToJSON(value?: ReqPostSystem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'description': value.description,
        'systemType': SystemTypeEnumToJSON(value.systemType),
        'owner': value.owner,
        'host': value.host,
        'enabled': value.enabled,
        'effectiveUserId': value.effectiveUserId,
        'defaultAuthnMethod': AuthnEnumToJSON(value.defaultAuthnMethod),
        'authnCredential': ReqPostPutCredentialToJSON(value.authnCredential),
        'bucketName': value.bucketName,
        'rootDir': value.rootDir,
        'port': value.port,
        'useProxy': value.useProxy,
        'proxyHost': value.proxyHost,
        'proxyPort': value.proxyPort,
        'dtnSystemId': value.dtnSystemId,
        'canExec': value.canExec,
        'canRunBatch': value.canRunBatch,
        'enableCmdPrefix': value.enableCmdPrefix,
        'allowChildren': value.allowChildren,
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
    };
}

