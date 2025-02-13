/*
Developer API

At Sqala, we believe that everyone deserves access to financial services, and we are committed to providing secure and reliable payment solutions to clients who may have been overlooked by traditional financial institutions.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { QrCodeGenerateQrCodeRequestMetadataInner } from './qr-code-generate-qr-code-request-metadata-inner';
import { RecipientCreateWithdrawalRequestBankAccount } from './recipient-create-withdrawal-request-bank-account';

/**
 * 
 * @export
 * @interface RecipientCreateWithdrawalRequest
 */
export interface RecipientCreateWithdrawalRequest {
    /**
     * Unique identifier for the object in your system.
     * @type {string}
     * @memberof RecipientCreateWithdrawalRequest
     */
    'code'?: string;
    /**
     * Amount in cents to be transferred.
     * @type {number}
     * @memberof RecipientCreateWithdrawalRequest
     */
    'amount': number;
    /**
     * The method of the withdrawal.
     * @type {string}
     * @memberof RecipientCreateWithdrawalRequest
     */
    'method': RecipientCreateWithdrawalRequestMethodEnum;
    /**
     * The PIX key of the destination bank account. Required if method is PIX
     * @type {string}
     * @memberof RecipientCreateWithdrawalRequest
     */
    'pixKey'?: string;
    /**
     * 
     * @type {RecipientCreateWithdrawalRequestBankAccount}
     * @memberof RecipientCreateWithdrawalRequest
     */
    'bankAccount'?: RecipientCreateWithdrawalRequestBankAccount;
    /**
     * The ID of the destination bank account. Required if method is STANDARD.
     * @type {string}
     * @memberof RecipientCreateWithdrawalRequest
     */
    'bankAccountId'?: string;
    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     * @type {Array<QrCodeGenerateQrCodeRequestMetadataInner>}
     * @memberof RecipientCreateWithdrawalRequest
     */
    'metadata'?: Array<QrCodeGenerateQrCodeRequestMetadataInner>;
}

type RecipientCreateWithdrawalRequestMethodEnum = 'STANDARD' | 'PIX'


