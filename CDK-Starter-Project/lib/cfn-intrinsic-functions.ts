import * as cdk from 'aws-cdk-lib';
import {Bucket, CfnBucket} from 'aws-cdk-lib/aws-s3';
import {CfnOutput,Fn} from  'aws-cdk-lib'; 
import { Construct } from 'constructs';


export class intrinsicFunction extends cdk.Stack{

    private stackSuffix: string;

constructor(scope: Construct, id : string, props?: cdk.StackProps){
    super(scope, id,props);

     this.initalizeSuffix();

   const photosBucket= new Bucket(this, 'TestBucketintrinsic',{
        bucketName: `intrinsic-bucket-${this.stackSuffix}`
    });

    new CfnOutput(this,'photos-bucket',{
        value: photosBucket.bucketArn,
        exportName: 'photos-bucket'
    })

}

private initalizeSuffix(){
    const shortStackId = Fn.select( 2, Fn.split('/', this.stackId))
    this.stackSuffix = Fn.select(4, Fn.split('-',this.stackId))
}

}
