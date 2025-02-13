/*
Developer API

At Sqala, we believe that everyone deserves access to financial services, and we are committed to providing secure and reliable payment solutions to clients who may have been overlooked by traditional financial institutions.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { QrCodeGenerateQrCodeResponseMetadataInner } from './qr-code-generate-qr-code-response-metadata-inner';
import { QrCodeGenerateQrCodeResponsePayer } from './qr-code-generate-qr-code-response-payer';
import { QrCodeGenerateQrCodeResponseSplitInner } from './qr-code-generate-qr-code-response-split-inner';

/**
 * 
 * @export
 * @interface QrCodeGenerateQrCodeResponse
 */
export interface QrCodeGenerateQrCodeResponse {
    /**
     * 
     * @type {string}
     * @memberof QrCodeGenerateQrCodeResponse
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof QrCodeGenerateQrCodeResponse
     */
    'code'?: string;
    /**
     * 
     * @type {string}
     * @memberof QrCodeGenerateQrCodeResponse
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof QrCodeGenerateQrCodeResponse
     */
    'amount'?: number;
    /**
     * 
     * @type {any}
     * @memberof QrCodeGenerateQrCodeResponse
     */
    'paidAmount'?: any;
    /**
     * 
     * @type {string}
     * @memberof QrCodeGenerateQrCodeResponse
     */
    'payload'?: string;
    /**
     * 
     * @type {QrCodeGenerateQrCodeResponsePayer}
     * @memberof QrCodeGenerateQrCodeResponse
     */
    'payer'?: QrCodeGenerateQrCodeResponsePayer;
    /**
     * 
     * @type {Array<QrCodeGenerateQrCodeResponseSplitInner>}
     * @memberof QrCodeGenerateQrCodeResponse
     */
    'split'?: Array<QrCodeGenerateQrCodeResponseSplitInner>;
    /**
     * 
     * @type {string}
     * @memberof QrCodeGenerateQrCodeResponse
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof QrCodeGenerateQrCodeResponse
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof QrCodeGenerateQrCodeResponse
     */
    'processedAt'?: string;
    /**
     * 
     * @type {any}
     * @memberof QrCodeGenerateQrCodeResponse
     */
    'paidAt'?: any;
    /**
     * 
     * @type {any}
     * @memberof QrCodeGenerateQrCodeResponse
     */
    'failedAt'?: any;
    /**
     * 
     * @type {Array<QrCodeGenerateQrCodeResponseMetadataInner>}
     * @memberof QrCodeGenerateQrCodeResponse
     */
    'metadata'?: Array<QrCodeGenerateQrCodeResponseMetadataInner>;
}

