/*
Developer API

At Sqala, we believe that everyone deserves access to financial services, and we are committed to providing secure and reliable payment solutions to clients who may have been overlooked by traditional financial institutions.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { QrCodeListAllResponseDataInner } from './qr-code-list-all-response-data-inner';
import { QrCodeListAllResponsePaging } from './qr-code-list-all-response-paging';

/**
 * 
 * @export
 * @interface QrCodeListAllResponse
 */
export interface QrCodeListAllResponse {
    /**
     * 
     * @type {Array<QrCodeListAllResponseDataInner>}
     * @memberof QrCodeListAllResponse
     */
    'data'?: Array<QrCodeListAllResponseDataInner>;
    /**
     * 
     * @type {QrCodeListAllResponsePaging}
     * @memberof QrCodeListAllResponse
     */
    'paging'?: QrCodeListAllResponsePaging;
}
