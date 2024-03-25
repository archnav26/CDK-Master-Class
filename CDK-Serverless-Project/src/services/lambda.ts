import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";
import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from "aws-lambda";
import { json } from "node:stream/consumers";
import { v4 } from "uuid";

const s3Client = new S3Client({});

async function handler(event:APIGatewayProxyEvent, context: Context) {

    const command = new ListBucketsCommand({});
    const listBucketsCommand = (await s3Client.send(command)).Buckets;

    const response: APIGatewayProxyResult ={
        statusCode: 200,
        body: JSON.stringify('Hello from lambda, this is the Id:'+ v4()+' List of buckets'+ JSON.stringify( listBucketsCommand))

    }
    console.log(event);
    return response;
}

export{handler}