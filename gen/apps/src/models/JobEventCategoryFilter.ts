/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 1.6.2
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum JobEventCategoryFilter {
    All = 'ALL',
    JobNewStatus = 'JOB_NEW_STATUS',
    JobInputTransactionId = 'JOB_INPUT_TRANSACTION_ID',
    JobArchiveTransactionId = 'JOB_ARCHIVE_TRANSACTION_ID',
    JobErrorMessage = 'JOB_ERROR_MESSAGE',
    JobSubscription = 'JOB_SUBSCRIPTION'
}

export function JobEventCategoryFilterFromJSON(json: any): JobEventCategoryFilter {
    return JobEventCategoryFilterFromJSONTyped(json, false);
}

export function JobEventCategoryFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobEventCategoryFilter {
    return json as JobEventCategoryFilter;
}

export function JobEventCategoryFilterToJSON(value?: JobEventCategoryFilter | null): any {
    return value as any;
}

