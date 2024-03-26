type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/bank-transfer-payments/{bankTransferId}-GET': {
        parameters: [
            {
                name: 'bankTransferId'
            },
        ]
    },
    '/bank-transfer-payments-GET': {
        parameters: [
            {
                name: 'limit'
            },
            {
                name: 'before'
            },
            {
                name: 'after'
            },
        ]
    },
    '/itp-payments-POST': {
        parameters: [
            {
                name: 'amount'
            },
            {
                name: 'payer'
            },
            {
                name: 'code'
            },
            {
                name: 'split'
            },
            {
                name: 'metadata'
            },
        ]
    },
    '/itp-payments/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/itp-payments-GET': {
        parameters: [
            {
                name: 'limit'
            },
            {
                name: 'before'
            },
            {
                name: 'after'
            },
        ]
    },
    '/pix-qrcode-payments-POST': {
        parameters: [
            {
                name: 'amount'
            },
            {
                name: 'code'
            },
            {
                name: 'payer'
            },
            {
                name: 'split'
            },
            {
                name: 'metadata'
            },
        ]
    },
    '/pix-qrcode-payments/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/pix-qrcode-payments-GET': {
        parameters: [
            {
                name: 'limit'
            },
            {
                name: 'before'
            },
            {
                name: 'after'
            },
        ]
    },
    '/recipients/{recipientId}/bank-accounts-POST': {
        parameters: [
            {
                name: 'holderName'
            },
            {
                name: 'holderTaxId'
            },
            {
                name: 'holderType'
            },
            {
                name: 'branchNumber'
            },
            {
                name: 'accountNumber'
            },
            {
                name: 'bankId'
            },
            {
                name: 'recipientId'
            },
            {
                name: 'type'
            },
        ]
    },
    '/recipients-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'taxId'
            },
            {
                name: 'type'
            },
            {
                name: 'code'
            },
            {
                name: 'metadata'
            },
        ]
    },
    '/recipients/{recipientId}/withdrawals-POST': {
        parameters: [
            {
                name: 'amount'
            },
            {
                name: 'method'
            },
            {
                name: 'recipientId'
            },
            {
                name: 'code'
            },
            {
                name: 'pixKey'
            },
            {
                name: 'bankAccount'
            },
            {
                name: 'bankAccountId'
            },
            {
                name: 'metadata'
            },
        ]
    },
    '/recipients/{recipientId}/bank-accounts/{bankAccountId}-DELETE': {
        parameters: [
            {
                name: 'recipientId'
            },
            {
                name: 'bankAccountId'
            },
        ]
    },
    '/recipients/{recipientId}/balance-GET': {
        parameters: [
            {
                name: 'recipientId'
            },
        ]
    },
    '/recipients/{recipientId}/bank-accounts/{bankAccountId}-GET': {
        parameters: [
            {
                name: 'recipientId'
            },
            {
                name: 'bankAccountId'
            },
        ]
    },
    '/recipients/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/recipients/{recipientId}/withdrawals/{withdrawalId}-GET': {
        parameters: [
            {
                name: 'recipientId'
            },
            {
                name: 'withdrawalId'
            },
        ]
    },
    '/recipients-GET': {
        parameters: [
            {
                name: 'limit'
            },
            {
                name: 'before'
            },
            {
                name: 'after'
            },
        ]
    },
    '/recipients/{recipientId}/bank-accounts-GET': {
        parameters: [
            {
                name: 'recipientId'
            },
        ]
    },
    '/recipients/{recipientId}/transactions-GET': {
        parameters: [
            {
                name: 'recipientId'
            },
            {
                name: 'limit'
            },
            {
                name: 'before'
            },
            {
                name: 'after'
            },
        ]
    },
    '/recipients/{recipientId}/withdrawals-GET': {
        parameters: [
            {
                name: 'recipientId'
            },
            {
                name: 'limit'
            },
            {
                name: 'before'
            },
            {
                name: 'after'
            },
        ]
    },
    '/recipients/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/access-tokens-POST': {
        parameters: [
            {
                name: 'refreshToken'
            },
        ]
    },
    '/webhooks/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/webhooks-GET': {
        parameters: [
            {
                name: 'status'
            },
            {
                name: 'event'
            },
            {
                name: 'endpointId'
            },
            {
                name: 'limit'
            },
            {
                name: 'before'
            },
            {
                name: 'after'
            },
        ]
    },
    '/webhooks/{id}/attempts-POST': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
}