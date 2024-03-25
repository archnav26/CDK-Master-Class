
import { App } from "aws-cdk-lib";
import {DataStack} from './stacks/DataStack'
import { Lambda } from "aws-cdk-lib/aws-ses-actions";
import { LambdaStack } from "./stacks/lambdaStack";
import { SpacesLambdaStack } from "./stacks/SpacesLambdaStack";
import {ApiStack} from "./stacks/ApiStack";


const app= new App();
new DataStack(app, 'DataStack');
new LambdaStack(app,'LambdaStack');

const spaceLambda = new SpacesLambdaStack(app,'SpacesLambdaStack');
new ApiStack(app,'SpaceApiStack',{ spaceLambdaIntegration: spaceLambda.spacesLambdaIntegration });