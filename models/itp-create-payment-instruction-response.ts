/*
Developer API

At Sqala, we believe that everyone deserves access to financial services, and we are committed to providing secure and reliable payment solutions to clients who may have been overlooked by traditional financial institutions.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ItpCreatePaymentInstructionResponseMetadataInner } from './itp-create-payment-instruction-response-metadata-inner';
import { ItpCreatePaymentInstructionResponsePayer } from './itp-create-payment-instruction-response-payer';
import { ItpCreatePaymentInstructionResponseSplitInner } from './itp-create-payment-instruction-response-split-inner';

/**
 * 
 * @export
 * @interface ItpCreatePaymentInstructionResponse
 */
export interface ItpCreatePaymentInstructionResponse {
    /**
     * 
     * @type {string}
     * @memberof ItpCreatePaymentInstructionResponse
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ItpCreatePaymentInstructionResponse
     */
    'code'?: string;
    /**
     * 
     * @type {string}
     * @memberof ItpCreatePaymentInstructionResponse
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof ItpCreatePaymentInstructionResponse
     */
    'amount'?: number;
    /**
     * 
     * @type {any}
     * @memberof ItpCreatePaymentInstructionResponse
     */
    'paidAmount'?: any;
    /**
     * 
     * @type {string}
     * @memberof ItpCreatePaymentInstructionResponse
     */
    'payload'?: string;
    /**
     * 
     * @type {ItpCreatePaymentInstructionResponsePayer}
     * @memberof ItpCreatePaymentInstructionResponse
     */
    'payer'?: ItpCreatePaymentInstructionResponsePayer;
    /**
     * 
     * @type {Array<ItpCreatePaymentInstructionResponseSplitInner>}
     * @memberof ItpCreatePaymentInstructionResponse
     */
    'split'?: Array<ItpCreatePaymentInstructionResponseSplitInner>;
    /**
     * 
     * @type {string}
     * @memberof ItpCreatePaymentInstructionResponse
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof ItpCreatePaymentInstructionResponse
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof ItpCreatePaymentInstructionResponse
     */
    'processedAt'?: string;
    /**
     * 
     * @type {any}
     * @memberof ItpCreatePaymentInstructionResponse
     */
    'paidAt'?: any;
    /**
     * 
     * @type {any}
     * @memberof ItpCreatePaymentInstructionResponse
     */
    'failedAt'?: any;
    /**
     * 
     * @type {Array<ItpCreatePaymentInstructionResponseMetadataInner>}
     * @memberof ItpCreatePaymentInstructionResponse
     */
    'metadata'?: Array<ItpCreatePaymentInstructionResponseMetadataInner>;
}

