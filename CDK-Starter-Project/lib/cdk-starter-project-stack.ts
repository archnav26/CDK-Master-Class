import * as cdk from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { Parameter } from 'aws-cdk-lib/aws-appconfig';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';


class L3Bucket extends Construct {

  constructor(scope: Construct, id: string, expiration: number){
    super(scope, id);
     
    new Bucket(this, 'MyL3Bucket',{
        lifecycleRules:[{
          expiration: Duration.days(expiration)
        }]

    });

  }

}

export class CdkStarterProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
   
    // create an s3 bucket in 3 ways:
    new CfnBucket(this,'MyL1BucketCDK',{
      lifecycleConfiguration:{
        rules:[{
          expirationInDays: 1,
          status: 'Enabled' 
        }]

      }
    })

    const duration = new cdk.CfnParameter(this, 'duration',{
      default:  6,
      minValue: 1,
      maxValue: 10,
      type: 'Number'
    })

   const MyL2BucketCDK = new Bucket(this,'MyL2BucketCDK',{
      lifecycleRules:[{
         expiration: Duration.days(duration.valueAsNumber)
      }]
    });

    new cdk.CfnOutput(this,'MyL2BucketName',{
      value: MyL2BucketCDK.bucketName
    })

    new L3Bucket(this,'MyL3BucketCDK', 2);
    
  }
}
