/*
Developer API

At Sqala, we believe that everyone deserves access to financial services, and we are committed to providing secure and reliable payment solutions to clients who may have been overlooked by traditional financial institutions.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ItpListAllResponseDataInner } from './itp-list-all-response-data-inner';
import { ItpListAllResponsePaging } from './itp-list-all-response-paging';

/**
 * 
 * @export
 * @interface ItpListAllResponse
 */
export interface ItpListAllResponse {
    /**
     * 
     * @type {Array<ItpListAllResponseDataInner>}
     * @memberof ItpListAllResponse
     */
    'data'?: Array<ItpListAllResponseDataInner>;
    /**
     * 
     * @type {ItpListAllResponsePaging}
     * @memberof ItpListAllResponse
     */
    'paging'?: ItpListAllResponsePaging;
}

