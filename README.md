# sign-front

Frontend-side of Sign, web application to digitally signed file. For the backend-side, click [here](https://github.com/izharul-haq/sign-back).

## Requirements

1. [Node.JS](https://nodejs.org/en/)

2. [yarn](https://yarnpkg.com/) package manager

## How to Install

Install dependencies with

    yarn install

## How to Run

0. Make sure all dependencies already installed.

1. Run application in:

   - Development mode with

         yarn dev

   - Production mode with

         yarn build-production && yarn start

2. Open `localhost:8080` on your browser

## How to Use

0. Make sure [backend-side](https://github.com/izharul-haq/sign-back) of this web application is running.

1. Run this application (follow [How to Run](#how-to-run))

2. Go to key generation page to generate both public and private keys either using RSA algorithm or using DSA algorithm by clicking `KEY` icon in top right corner.

3. Go to digital signature page by clicking `SIGNATURE` icon in top right corner to generate or verify digital signature. Follow [How to Sign](#how-to-sign) to generate digital signature and [How to Verify](#how-to-verify) to verify digital signature.

## How to Sign

1. Choose public-key algorithm (RSA or DSA) used to generate digital signature.

2. Upload any file (`.txt`, `.jpg`, `.mp3`, etc.) that you want to sign.

3. Insert private key that has been generated from key generation page.

4. Choose whether you want to attach signature to your file or not.
   - If you choose attach it, app will return your file with digital signature attached in the end of the file.

   - If you choose not to attach it, digital signature will be shown in the `OUTPUT` field.

5. Click `Sign` button to generate digital signature.

## How to Verify

1. Choose the same public-key algorithm that you used to generate the signature.

2. Upload either original file or file with digital signature attached to it.

3. Insert digital signature that you want to verify. This step is necessary only if you upload the original file. If you upload file that has digital signature attached to it, this step is not necessary.

4. Insert public key that has been generated from key generation page.

5. Click `Verify` button to verify digital signature. Digital signature validity will be shown in `OUTPUT` field.

## Contributors

[![contributors](https://contrib.rocks/image?repo=izharul-haq/sign-front)](https://github.com/izharul-haq/sign-front/graphs/contributors)
