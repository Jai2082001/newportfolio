// app/api/start-backend/route.js
import { NextResponse } from 'next/server';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { Sha256 } from '@aws-crypto/sha256-browser';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { parse } from 'url';
import crypto from 'crypto';

export async function GET() {

    const LAMBDA_URL = new URL("https://ow5ruxrk2r4nod67kdzmw4qawi0ztgyi.lambda-url.ca-central-1.on.aws/");

    const credentials = {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    };

    const signer = new SignatureV4({
        credentials,
        region: process.env.AWS_REGION || 'ca-central-1',
        service: 'lambda',
        sha256: Sha256,
    });

    const request = new HttpRequest({
        method: 'GET',
        protocol: LAMBDA_URL.protocol,
        hostname: LAMBDA_URL.hostname,
        path: LAMBDA_URL.pathname,
        headers: {
            host: LAMBDA_URL.hostname,
        },
    });

    try {
        const signedRequest = await signer.sign(request);

        const response = await fetch(LAMBDA_URL, {
            method: signedRequest.method,
            headers: signedRequest.headers,
        });

        if (!response.ok) {
            throw new Error(`Lambda returned ${response.status}`);
        }

        const data = await response.json();
        console.log(data)
        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error invoking Lambda:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
