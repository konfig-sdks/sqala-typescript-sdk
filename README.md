<div align="left">

[![Visit Sqala](./header.png)](https://www.sqala.tech&#x2F;)

# [Sqala](https://www.sqala.tech&#x2F;)<a id="sqala"></a>

At Sqala, we believe that everyone deserves access to financial services, and we are committed to providing secure and reliable payment solutions to clients who may have been overlooked by traditional financial institutions.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`sqala.bankTransfer.getBankTransfer`](#sqalabanktransfergetbanktransfer)
  * [`sqala.bankTransfer.listAllBankTransfers`](#sqalabanktransferlistallbanktransfers)
  * [`sqala.iTP.createPaymentInstruction`](#sqalaitpcreatepaymentinstruction)
  * [`sqala.iTP.getItp`](#sqalaitpgetitp)
  * [`sqala.iTP.listAll`](#sqalaitplistall)
  * [`sqala.qRCode.generateQrCode`](#sqalaqrcodegenerateqrcode)
  * [`sqala.qRCode.getQrCodeById`](#sqalaqrcodegetqrcodebyid)
  * [`sqala.qRCode.listAll`](#sqalaqrcodelistall)
  * [`sqala.recipient.createBankAccount`](#sqalarecipientcreatebankaccount)
  * [`sqala.recipient.createRecipient`](#sqalarecipientcreaterecipient)
  * [`sqala.recipient.createWithdrawal`](#sqalarecipientcreatewithdrawal)
  * [`sqala.recipient.deleteBankAccount`](#sqalarecipientdeletebankaccount)
  * [`sqala.recipient.getBalance`](#sqalarecipientgetbalance)
  * [`sqala.recipient.getBankAccount`](#sqalarecipientgetbankaccount)
  * [`sqala.recipient.getById`](#sqalarecipientgetbyid)
  * [`sqala.recipient.getWithdrawalById`](#sqalarecipientgetwithdrawalbyid)
  * [`sqala.recipient.listAll`](#sqalarecipientlistall)
  * [`sqala.recipient.listBankAccounts`](#sqalarecipientlistbankaccounts)
  * [`sqala.recipient.listTransactions`](#sqalarecipientlisttransactions)
  * [`sqala.recipient.listWithdrawals`](#sqalarecipientlistwithdrawals)
  * [`sqala.recipient.updateRecipientById`](#sqalarecipientupdaterecipientbyid)
  * [`sqala.token.generateAccessToken`](#sqalatokengenerateaccesstoken)
  * [`sqala.webhook.get`](#sqalawebhookget)
  * [`sqala.webhook.listAll`](#sqalawebhooklistall)
  * [`sqala.webhook.resendAttempt`](#sqalawebhookresendattempt)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Sqala&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Sqala } from "sqala-typescript-sdk";

const sqala = new Sqala({
  // Defining the base path is optional and defaults to https://api.sqala.tech/developer/v1
  // basePath: "https://api.sqala.tech/developer/v1",
});

const getBankTransferResponse = await sqala.bankTransfer.getBankTransfer({
  bankTransferId: "bankTransferId_example",
});

console.log(getBankTransferResponse);
```

## Reference<a id="reference"></a>


### `sqala.bankTransfer.getBankTransfer`<a id="sqalabanktransfergetbanktransfer"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBankTransferResponse = await sqala.bankTransfer.getBankTransfer({
  bankTransferId: "bankTransferId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bankTransferId: `string`<a id="banktransferid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/bank-transfer-payments/{bankTransferId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.bankTransfer.listAllBankTransfers`<a id="sqalabanktransferlistallbanktransfers"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllBankTransfersResponse =
  await sqala.bankTransfer.listAllBankTransfers({
    limit: "10",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `string`<a id="limit-string"></a>

A limit on the number of objects to be returned, between 1 and 50.

##### before: `string`<a id="before-string"></a>

A cursor for use in pagination. ```before``` is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, starting with ```obj_bar```, your subsequent call can include ```before=obj_bar``` in order to fetch the previous page of the list.

##### after: `string`<a id="after-string"></a>

A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/bank-transfer-payments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.iTP.createPaymentInstruction`<a id="sqalaitpcreatepaymentinstruction"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPaymentInstructionResponse =
  await sqala.iTP.createPaymentInstruction({
    amount: 1,
    payer: {},
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

Amount in cents to be paid.

##### payer: [`QrCodeGenerateQrCodeRequestPayer`](./models/qr-code-generate-qr-code-request-payer.ts)<a id="payer-qrcodegenerateqrcoderequestpayermodelsqr-code-generate-qr-code-request-payerts"></a>

##### code: `string`<a id="code-string"></a>

Unique identifier for the object in your system.

##### split: [`QrCodeGenerateQrCodeRequestSplitInner`](./models/qr-code-generate-qr-code-request-split-inner.ts)[]<a id="split-qrcodegenerateqrcoderequestsplitinnermodelsqr-code-generate-qr-code-request-split-innerts"></a>

This object represents a list of recipients who will receive part of the payment.

##### metadata: [`QrCodeGenerateQrCodeRequestMetadataInner`](./models/qr-code-generate-qr-code-request-metadata-inner.ts)[]<a id="metadata-qrcodegenerateqrcoderequestmetadatainnermodelsqr-code-generate-qr-code-request-metadata-innerts"></a>

Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

#### 🔄 Return<a id="🔄-return"></a>

[ItpCreatePaymentInstructionResponse](./models/itp-create-payment-instruction-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/itp-payments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.iTP.getItp`<a id="sqalaitpgetitp"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getItpResponse = await sqala.iTP.getItp({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Unique identifier for the object.

#### 🔄 Return<a id="🔄-return"></a>

[ItpGetItpResponse](./models/itp-get-itp-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/itp-payments/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.iTP.listAll`<a id="sqalaitplistall"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await sqala.iTP.listAll({
  limit: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

A limit on the number of objects to be returned, between 1 and 50.

##### before: `string`<a id="before-string"></a>

A cursor for use in pagination. ```before``` is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, starting with ```obj_bar```, your subsequent call can include ```before=obj_bar``` in order to fetch the previous page of the list.

##### after: `string`<a id="after-string"></a>

A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.

#### 🔄 Return<a id="🔄-return"></a>

[ItpListAllResponse](./models/itp-list-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/itp-payments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.qRCode.generateQrCode`<a id="sqalaqrcodegenerateqrcode"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateQrCodeResponse = await sqala.qRCode.generateQrCode({
  amount: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

Amount in cents to be paid.

##### code: `string`<a id="code-string"></a>

Unique identifier for the object in your system.

##### payer: [`QrCodeGenerateQrCodeRequestPayer`](./models/qr-code-generate-qr-code-request-payer.ts)<a id="payer-qrcodegenerateqrcoderequestpayermodelsqr-code-generate-qr-code-request-payerts"></a>

##### split: [`QrCodeGenerateQrCodeRequestSplitInner`](./models/qr-code-generate-qr-code-request-split-inner.ts)[]<a id="split-qrcodegenerateqrcoderequestsplitinnermodelsqr-code-generate-qr-code-request-split-innerts"></a>

This object represents a list of recipients who will receive part of the payment.

##### metadata: [`QrCodeGenerateQrCodeRequestMetadataInner`](./models/qr-code-generate-qr-code-request-metadata-inner.ts)[]<a id="metadata-qrcodegenerateqrcoderequestmetadatainnermodelsqr-code-generate-qr-code-request-metadata-innerts"></a>

Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

#### 🔄 Return<a id="🔄-return"></a>

[QrCodeGenerateQrCodeResponse](./models/qr-code-generate-qr-code-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/pix-qrcode-payments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.qRCode.getQrCodeById`<a id="sqalaqrcodegetqrcodebyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQrCodeByIdResponse = await sqala.qRCode.getQrCodeById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Unique identifier for the object.

#### 🔄 Return<a id="🔄-return"></a>

[QrCodeGetQrCodeByIdResponse](./models/qr-code-get-qr-code-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/pix-qrcode-payments/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.qRCode.listAll`<a id="sqalaqrcodelistall"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await sqala.qRCode.listAll({
  limit: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

A limit on the number of objects to be returned, between 1 and 50.

##### before: `string`<a id="before-string"></a>

A cursor for use in pagination. ```before``` is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, starting with ```obj_bar```, your subsequent call can include ```before=obj_bar``` in order to fetch the previous page of the list.

##### after: `string`<a id="after-string"></a>

A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.

#### 🔄 Return<a id="🔄-return"></a>

[QrCodeListAllResponse](./models/qr-code-list-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/pix-qrcode-payments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.recipient.createBankAccount`<a id="sqalarecipientcreatebankaccount"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBankAccountResponse = await sqala.recipient.createBankAccount({
  recipientId: "DEFAULT",
  type: "CHECKING",
  holderName: "holderName_example",
  holderTaxId: "holderTaxId_example",
  holderType: "INDIVIDUAL",
  branchNumber: "branchNumber_example",
  accountNumber: "accountNumber_example",
  bankId: "bankId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### holderName: `string`<a id="holdername-string"></a>

The name of the person or business that owns the bank account.

##### holderTaxId: `string`<a id="holdertaxid-string"></a>

The tax ID of the account holder (CPF for individual account holders or CNPJ for businesses account holders).

##### holderType: `string`<a id="holdertype-string"></a>

The type of entity that holds the account. Can be INDIVIDUAL or COMPANY.

##### branchNumber: `string`<a id="branchnumber-string"></a>

##### accountNumber: `string`<a id="accountnumber-string"></a>

##### bankId: `string`<a id="bankid-string"></a>

The ID of the bank associated with the account.

##### recipientId: `string`<a id="recipientid-string"></a>

##### type: `string`<a id="type-string"></a>

The type of bank account. Can be CHEKING or SAVINGS.

#### 🔄 Return<a id="🔄-return"></a>

[RecipientCreateBankAccountResponse](./models/recipient-create-bank-account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recipients/{recipientId}/bank-accounts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.recipient.createRecipient`<a id="sqalarecipientcreaterecipient"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRecipientResponse = await sqala.recipient.createRecipient({
  name: "name_example",
  taxId: "taxId_example",
  type: "INDIVIDUAL",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the recipient.

##### taxId: `string`<a id="taxid-string"></a>

The tax ID of the recipient (CPF for individual recipients or CNPJ for businesses recipients).

##### type: `string`<a id="type-string"></a>

The type of the recipient.

##### code: `string`<a id="code-string"></a>

Unique identifier for the object in your system.

##### metadata: [`QrCodeGenerateQrCodeRequestMetadataInner`](./models/qr-code-generate-qr-code-request-metadata-inner.ts)[]<a id="metadata-qrcodegenerateqrcoderequestmetadatainnermodelsqr-code-generate-qr-code-request-metadata-innerts"></a>

Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recipients` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.recipient.createWithdrawal`<a id="sqalarecipientcreatewithdrawal"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createWithdrawalResponse = await sqala.recipient.createWithdrawal({
  recipientId: "DEFAULT",
  amount: 1,
  method: "STANDARD",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

Amount in cents to be transferred.

##### method: `string`<a id="method-string"></a>

The method of the withdrawal.

##### recipientId: `string`<a id="recipientid-string"></a>

##### code: `string`<a id="code-string"></a>

Unique identifier for the object in your system.

##### pixKey: `string`<a id="pixkey-string"></a>

The PIX key of the destination bank account. Required if method is PIX

##### bankAccount: [`RecipientCreateWithdrawalRequestBankAccount`](./models/recipient-create-withdrawal-request-bank-account.ts)<a id="bankaccount-recipientcreatewithdrawalrequestbankaccountmodelsrecipient-create-withdrawal-request-bank-accountts"></a>

##### bankAccountId: `string`<a id="bankaccountid-string"></a>

The ID of the destination bank account. Required if method is STANDARD.

##### metadata: [`QrCodeGenerateQrCodeRequestMetadataInner`](./models/qr-code-generate-qr-code-request-metadata-inner.ts)[]<a id="metadata-qrcodegenerateqrcoderequestmetadatainnermodelsqr-code-generate-qr-code-request-metadata-innerts"></a>

Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

#### 🔄 Return<a id="🔄-return"></a>

[RecipientCreateWithdrawalResponse](./models/recipient-create-withdrawal-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recipients/{recipientId}/withdrawals` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.recipient.deleteBankAccount`<a id="sqalarecipientdeletebankaccount"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteBankAccountResponse = await sqala.recipient.deleteBankAccount({
  recipientId: "DEFAULT",
  bankAccountId: "bankAccountId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### recipientId: `string`<a id="recipientid-string"></a>

##### bankAccountId: `string`<a id="bankaccountid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[RecipientDeleteBankAccountResponse](./models/recipient-delete-bank-account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recipients/{recipientId}/bank-accounts/{bankAccountId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.recipient.getBalance`<a id="sqalarecipientgetbalance"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBalanceResponse = await sqala.recipient.getBalance({
  recipientId: "DEFAULT",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### recipientId: `string`<a id="recipientid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recipients/{recipientId}/balance` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.recipient.getBankAccount`<a id="sqalarecipientgetbankaccount"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBankAccountResponse = await sqala.recipient.getBankAccount({
  recipientId: "DEFAULT",
  bankAccountId: "bankAccountId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### recipientId: `string`<a id="recipientid-string"></a>

##### bankAccountId: `string`<a id="bankaccountid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[RecipientGetBankAccountResponse](./models/recipient-get-bank-account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recipients/{recipientId}/bank-accounts/{bankAccountId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.recipient.getById`<a id="sqalarecipientgetbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await sqala.recipient.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recipients/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.recipient.getWithdrawalById`<a id="sqalarecipientgetwithdrawalbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWithdrawalByIdResponse = await sqala.recipient.getWithdrawalById({
  recipientId: "DEFAULT",
  withdrawalId: "withdrawalId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### recipientId: `string`<a id="recipientid-string"></a>

##### withdrawalId: `string`<a id="withdrawalid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[RecipientGetWithdrawalByIdResponse](./models/recipient-get-withdrawal-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recipients/{recipientId}/withdrawals/{withdrawalId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.recipient.listAll`<a id="sqalarecipientlistall"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await sqala.recipient.listAll({
  limit: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

A limit on the number of objects to be returned, between 1 and 50.

##### before: `string`<a id="before-string"></a>

A cursor for use in pagination. ```before``` is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, starting with ```obj_bar```, your subsequent call can include ```before=obj_bar``` in order to fetch the previous page of the list.

##### after: `string`<a id="after-string"></a>

A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.

#### 🔄 Return<a id="🔄-return"></a>

[RecipientListAllResponse](./models/recipient-list-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recipients` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.recipient.listBankAccounts`<a id="sqalarecipientlistbankaccounts"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listBankAccountsResponse = await sqala.recipient.listBankAccounts({
  recipientId: "DEFAULT",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### recipientId: `string`<a id="recipientid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[RecipientListBankAccountsResponse](./models/recipient-list-bank-accounts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recipients/{recipientId}/bank-accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.recipient.listTransactions`<a id="sqalarecipientlisttransactions"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTransactionsResponse = await sqala.recipient.listTransactions({
  recipientId: "DEFAULT",
  limit: "10",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### recipientId: `string`<a id="recipientid-string"></a>

##### limit: `string`<a id="limit-string"></a>

A limit on the number of objects to be returned, between 1 and 50.

##### before: `string`<a id="before-string"></a>

A cursor for use in pagination. ```before``` is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, starting with ```obj_bar```, your subsequent call can include ```before=obj_bar``` in order to fetch the previous page of the list.

##### after: `string`<a id="after-string"></a>

A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recipients/{recipientId}/transactions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.recipient.listWithdrawals`<a id="sqalarecipientlistwithdrawals"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listWithdrawalsResponse = await sqala.recipient.listWithdrawals({
  recipientId: "DEFAULT",
  limit: "10",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### recipientId: `string`<a id="recipientid-string"></a>

##### limit: `string`<a id="limit-string"></a>

A limit on the number of objects to be returned, between 1 and 50.

##### before: `string`<a id="before-string"></a>

A cursor for use in pagination. ```before``` is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, starting with ```obj_bar```, your subsequent call can include ```before=obj_bar``` in order to fetch the previous page of the list.

##### after: `string`<a id="after-string"></a>

A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.

#### 🔄 Return<a id="🔄-return"></a>

[RecipientListWithdrawalsResponse](./models/recipient-list-withdrawals-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recipients/{recipientId}/withdrawals` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.recipient.updateRecipientById`<a id="sqalarecipientupdaterecipientbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRecipientByIdResponse = await sqala.recipient.updateRecipientById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recipients/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.token.generateAccessToken`<a id="sqalatokengenerateaccesstoken"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateAccessTokenResponse = await sqala.token.generateAccessToken({
  refreshToken: "refreshToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### refreshToken: `string`<a id="refreshtoken-string"></a>

The Refresh Token is used to get a new Access Token, when the old one expires.

#### 🔄 Return<a id="🔄-return"></a>

[TokenGenerateAccessTokenResponse](./models/token-generate-access-token-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/access-tokens` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.webhook.get`<a id="sqalawebhookget"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await sqala.webhook.get({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WebhookGetResponse](./models/webhook-get-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.webhook.listAll`<a id="sqalawebhooklistall"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await sqala.webhook.listAll({
  status: "PENDING",
  limit: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `'PENDING' | 'QUEUED' | 'DELIVERED' | 'FAILED'`<a id="status-pending--queued--delivered--failed"></a>

##### event: `string`<a id="event-string"></a>

##### endpointId: `string`<a id="endpointid-string"></a>

##### limit: `number`<a id="limit-number"></a>

A limit on the number of objects to be returned, between 1 and 50.

##### before: `string`<a id="before-string"></a>

A cursor for use in pagination. ```before``` is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, starting with ```obj_bar```, your subsequent call can include ```before=obj_bar``` in order to fetch the previous page of the list.

##### after: `string`<a id="after-string"></a>

A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.

#### 🔄 Return<a id="🔄-return"></a>

[WebhookListAllResponse](./models/webhook-list-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sqala.webhook.resendAttempt`<a id="sqalawebhookresendattempt"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resendAttemptResponse = await sqala.webhook.resendAttempt({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WebhookResendAttemptResponse](./models/webhook-resend-attempt-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{id}/attempts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
