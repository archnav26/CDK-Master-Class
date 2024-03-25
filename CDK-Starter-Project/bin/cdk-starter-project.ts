#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {PhotosStack} from '../lib/PhotosStack';
import {LambdaHandlerStack} from '../lib/LambdaHandlerStack';
import {InterfaceHandlerStack} from '../lib/InterfaceHandlerStack';
//import { CdkStarterProjectStack } from '../lib/cdk-starter-project-stack';

const app = new cdk.App();
// new CdkStarterProjectStack(app, 'CdkStarterProjectStack', {
const FirstPhotosStack =  new PhotosStack(app,'PhotosStack',{
  env: { account: '654654224463', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
const SecondLambdaStack =new LambdaHandlerStack(app,'LambdaHandlerStack',{
  env: { account: '654654224463', region: 'us-east-1' },
  
  
});

SecondLambdaStack.addDependency(FirstPhotosStack);

new InterfaceHandlerStack(app, 'InterfaceHandlerStack',{
  env: { account: '654654224463', region: 'us-east-1' },
  targetBucketArn: FirstPhotosStack.photosBucketArn,
})