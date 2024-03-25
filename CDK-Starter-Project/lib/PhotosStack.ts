import * as cdk from 'aws-cdk-lib';
import {Bucket, CfnBucket} from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class PhotosStack extends cdk.Stack{

  public readonly photosBucketArn:string;

    constructor(scope: Construct, id: string, props?: cdk.StackProps){
        super(scope, id, props);

       const myBucket= new Bucket(this, 'PhotosBucket',{
         bucketName: 'photosbucket-234j34'
       });
       
       this.photosBucketArn = myBucket.bucketArn;
        
       (myBucket.node.defaultChild as CfnBucket).overrideLogicalId('PhotosBucket635');

    }
}