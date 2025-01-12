import { Stack, StackProps } from "aws-cdk-lib";
import { Function as LambdaFunction, Runtime, Code } from "aws-cdk-lib/aws-lambda";

import { Construct } from "constructs";
import { join } from "path";

export class LambdaStack extends Stack{

    constructor(scope: Construct, id: string, props?: StackProps){
        super(scope,id,props);

        new LambdaFunction(this, 'HelloLambda', {
            runtime: Runtime.NODEJS_16_X,
            handler: 'hello.main',
            code: Code.fromAsset(join(__dirname, '..', '..', 'services'))
        })

        
        

    }

}