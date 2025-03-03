# CryptoMMO SDK

This is a simple SDK that helps you connect and interact with the CryptoMMO API. The SDK includes modules to handle tasks related to transactions and merchant information. It is built on top of axios, supports both CommonJS and ESM, and is written in TypeScript.

## Features

- **Transaction API**

  - Create a new transaction
  - Retrieve a list of transactions
  - Get transaction details

- **Merchant API**

  - Retrieve the merchant's list of payment methods
  - Get detailed merchant information

- **Multi-module Support:**
  - Built outputs for both CommonJS and ESM
  - Generate TypeScript declaration files (`.d.ts`) for use in TypeScript projects

## Installation

You can install the SDK via npm or yarn:

```bash
npm install crypto-mmo-sdk
```

Or using yarn:

```bash
yarn add crypto-mmo-sdk
```

## Usage

To use the SDK, you need a valid API key from CryptoMMO. Below is a basic example for initializing and using the API:

```typescript
import { PayLinkSDK } from "crypto-mmo-sdk";

const apiKey = "YOUR_API_KEY_HERE";
const sdk = new PayLinkSDK(apiKey);

// Example: Create a new transaction
const transactionData = {
  networkCode: "eth",
  orderId: "pop990811",
  amount: 20,
  urlCallback: "https://www.google.com/", // Optional - Payment page URL will be returned if provided
};

sdk.transaction
  .createTransaction(transactionData)
  .then((transaction) => {
    console.log("Transaction created:", transaction);
  })
  .catch((error) => {
    console.error("Error creating transaction:", error);
  });

// Example Response without urlCallback:
/*
{
  "transactionId": "de3148d3-22fe-4d97-8f10-d98b008c5e4a",
  "walletId": "06a9044c-86b3-4bb4-acee-33cc4f1683c3",
  "merchantId": "75ff4eff-164c-4b13-adde-1118f8277a54",
  "paymentMethodId": "b2f26627-adbe-4233-99bd-bd547f754af6",
  "orderId": "ORD121212",
  "amount": 30.5,
  "createdAt": "2025-02-21T04:11:27.946361+00:00",
  "wallet": {
    "walletId": "06a9044c-86b3-4bb4-acee-33cc4f1683c3",
    "address": "0x4035bb59573acf9ff6c428667f3b1f4af7d68a80"
  },
  "paymentMethod": {
    "paymentMethodId": "b2f26627-adbe-4233-99bd-bd547f754af6",
    "networkCode": "eth",
    "chainId": 1,
    "vmType": "evm"
  }
}
*/

// Example Response with urlCallback:
/*
{
  "transactionId": "de3148d3-22fe-4d97-8f10-d98b008c5e4a",
  "walletId": "06a9044c-86b3-4bb4-acee-33cc4f1683c3",
  "merchantId": "75ff4eff-164c-4b13-adde-1118f8277a54",
  "paymentMethodId": "b2f26627-adbe-4233-99bd-bd547f754af6",
  "orderId": "ORD121212",
  "amount": 30.5,
  "createdAt": "2025-02-21T04:11:27.946361+00:00",
  "wallet": {
    "walletId": "06a9044c-86b3-4bb4-acee-33cc4f1683c3",
    "address": "0x4035bb59573acf9ff6c428667f3b1f4af7d68a80"
  },
  "paymentMethod": {
    "paymentMethodId": "b2f26627-adbe-4233-99bd-bd547f754af6",
    "networkCode": "eth",
    "chainId": 1,
    "vmType": "evm"
  },
  "paymentPageUrl": "https://payment.crbgroup.live/API-c7e33cde-8ea2-4393-a21b-c0c8e330f463/107f7a3c-4f0a-4123-a63b-8d15a2cce391/https%3A%2F%2Fwww.google.com%2F"
}
*/

// Note: When redirecting to paymentPageUrl, the payment page will:
// 1. Monitor the transaction for incoming payments
// 2. Automatically redirect back to the provided urlCallback once the required amount is received

// Example: Retrieve the transaction list
sdk.transaction
  .getTransactionList()
  .then((transactions) => {
    console.log("Transaction list:", transactions);
  })
  .catch((error) => {
    console.error("Error retrieving transactions:", error);
  });

// Example: Get Merchant information
sdk.merchant
  .getMerchantInfo()
  .then((merchantInfo) => {
    console.log("Merchant info:", merchantInfo);
  })
  .catch((error) => {
    console.error("Error retrieving merchant info:", error);
  });
```

## Configuration

The SDK is configured with the following default settings:

- **Base URL:**  
  By default, it is set to `https://paylinker-api.crbgroup.live/` in the `src/client.ts` file.

- **Headers:**  
  Every request includes the following headers:
  - `api-key`: Your API key
  - `Content-Type`: `application/json`

## Build

To build the SDK from the TypeScript source, use the script provided in the `package.json`:

```bash
npm run build
```

This script uses [tsup](https://tsup.egoist.dev/) to produce outputs for both CommonJS and ESM and to generate declaration files (`.d.ts`).

## Contributions

If you have suggestions, wish to report any bugs, or want to contribute code, please fork the repository and submit a Pull Request or open an Issue on the project's GitHub page.

## License

The SDK is licensed under the [ISC License](LICENSE).
