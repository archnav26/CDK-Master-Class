
import { App } from "aws-cdk-lib";
import {DataStack} from './stacks/DataStack'
import { Lambda } from "aws-cdk-lib/aws-ses-actions";
import { LambdaStack } from "./stacks/lambdaStack";
import { ApiStack } from "./stacks/ApiStack";

const app= new App();
const dynamodbStack = new DataStack(app, 'DataStack');
const lambdaStack= new LambdaStack(app,'LambdaStack',{
    spacesTable : dynamodbStack.spacesTable
});
new ApiStack(app,'ApiStack',{
    helloLambdaIntegration: lambdaStack.helloLambdaIntegration
})
