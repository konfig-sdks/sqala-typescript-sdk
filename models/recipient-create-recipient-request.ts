/*
Developer API

At Sqala, we believe that everyone deserves access to financial services, and we are committed to providing secure and reliable payment solutions to clients who may have been overlooked by traditional financial institutions.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { QrCodeGenerateQrCodeRequestMetadataInner } from './qr-code-generate-qr-code-request-metadata-inner';

/**
 * 
 * @export
 * @interface RecipientCreateRecipientRequest
 */
export interface RecipientCreateRecipientRequest {
    /**
     * Unique identifier for the object in your system.
     * @type {string}
     * @memberof RecipientCreateRecipientRequest
     */
    'code'?: string;
    /**
     * The name of the recipient.
     * @type {string}
     * @memberof RecipientCreateRecipientRequest
     */
    'name': string;
    /**
     * The tax ID of the recipient (CPF for individual recipients or CNPJ for businesses recipients).
     * @type {string}
     * @memberof RecipientCreateRecipientRequest
     */
    'taxId': string;
    /**
     * The type of the recipient.
     * @type {string}
     * @memberof RecipientCreateRecipientRequest
     */
    'type': RecipientCreateRecipientRequestTypeEnum;
    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     * @type {Array<QrCodeGenerateQrCodeRequestMetadataInner>}
     * @memberof RecipientCreateRecipientRequest
     */
    'metadata'?: Array<QrCodeGenerateQrCodeRequestMetadataInner>;
}

type RecipientCreateRecipientRequestTypeEnum = 'INDIVIDUAL' | 'COMPANY'

