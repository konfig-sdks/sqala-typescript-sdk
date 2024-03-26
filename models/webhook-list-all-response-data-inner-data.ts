/*
Developer API

At Sqala, we believe that everyone deserves access to financial services, and we are committed to providing secure and reliable payment solutions to clients who may have been overlooked by traditional financial institutions.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebhookListAllResponseDataInnerDataDestination } from './webhook-list-all-response-data-inner-data-destination';
import { WebhookListAllResponseDataInnerDataPayer } from './webhook-list-all-response-data-inner-data-payer';
import { WebhookListAllResponseDataInnerDataSource } from './webhook-list-all-response-data-inner-data-source';

/**
 * 
 * @export
 * @interface WebhookListAllResponseDataInnerData
 */
export interface WebhookListAllResponseDataInnerData {
    /**
     * 
     * @type {string}
     * @memberof WebhookListAllResponseDataInnerData
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookListAllResponseDataInnerData
     */
    'code'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookListAllResponseDataInnerData
     */
    'transactionId'?: string;
    /**
     * 
     * @type {number}
     * @memberof WebhookListAllResponseDataInnerData
     */
    'amount'?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhookListAllResponseDataInnerData
     */
    'paidAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof WebhookListAllResponseDataInnerData
     */
    'method'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookListAllResponseDataInnerData
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookListAllResponseDataInnerData
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookListAllResponseDataInnerData
     */
    'processedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookListAllResponseDataInnerData
     */
    'paidAt'?: string;
    /**
     * 
     * @type {any}
     * @memberof WebhookListAllResponseDataInnerData
     */
    'failedAt'?: any;
    /**
     * 
     * @type {Array<any>}
     * @memberof WebhookListAllResponseDataInnerData
     */
    'split'?: Array<any>;
    /**
     * 
     * @type {WebhookListAllResponseDataInnerDataPayer}
     * @memberof WebhookListAllResponseDataInnerData
     */
    'payer'?: WebhookListAllResponseDataInnerDataPayer;
    /**
     * 
     * @type {WebhookListAllResponseDataInnerDataSource}
     * @memberof WebhookListAllResponseDataInnerData
     */
    'source'?: WebhookListAllResponseDataInnerDataSource;
    /**
     * 
     * @type {WebhookListAllResponseDataInnerDataDestination}
     * @memberof WebhookListAllResponseDataInnerData
     */
    'destination'?: WebhookListAllResponseDataInnerDataDestination;
}

