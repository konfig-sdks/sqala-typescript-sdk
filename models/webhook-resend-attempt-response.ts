/*
Developer API

At Sqala, we believe that everyone deserves access to financial services, and we are committed to providing secure and reliable payment solutions to clients who may have been overlooked by traditional financial institutions.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebhookResendAttemptResponseData } from './webhook-resend-attempt-response-data';
import { WebhookResendAttemptResponseObject } from './webhook-resend-attempt-response-object';
import { WebhookResendAttemptResponseResponsesInner } from './webhook-resend-attempt-response-responses-inner';

/**
 * 
 * @export
 * @interface WebhookResendAttemptResponse
 */
export interface WebhookResendAttemptResponse {
    /**
     * 
     * @type {Array<WebhookResendAttemptResponseResponsesInner>}
     * @memberof WebhookResendAttemptResponse
     */
    'responses'?: Array<WebhookResendAttemptResponseResponsesInner>;
    /**
     * 
     * @type {string}
     * @memberof WebhookResendAttemptResponse
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookResendAttemptResponse
     */
    'event'?: string;
    /**
     * 
     * @type {WebhookResendAttemptResponseObject}
     * @memberof WebhookResendAttemptResponse
     */
    'object'?: WebhookResendAttemptResponseObject;
    /**
     * 
     * @type {string}
     * @memberof WebhookResendAttemptResponse
     */
    'signature'?: string;
    /**
     * 
     * @type {WebhookResendAttemptResponseData}
     * @memberof WebhookResendAttemptResponse
     */
    'data'?: WebhookResendAttemptResponseData;
    /**
     * 
     * @type {string}
     * @memberof WebhookResendAttemptResponse
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookResendAttemptResponse
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookResendAttemptResponse
     */
    'queuedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookResendAttemptResponse
     */
    'deliveredAt'?: string;
    /**
     * 
     * @type {any}
     * @memberof WebhookResendAttemptResponse
     */
    'failedAt'?: any;
    /**
     * 
     * @type {string}
     * @memberof WebhookResendAttemptResponse
     */
    'lastAttemptAt'?: string;
    /**
     * 
     * @type {any}
     * @memberof WebhookResendAttemptResponse
     */
    'nextAttemptAt'?: any;
    /**
     * 
     * @type {string}
     * @memberof WebhookResendAttemptResponse
     */
    'endpointId'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookResendAttemptResponse
     */
    'organizationId'?: string;
}

