import { Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import { Function as LambdaFunction, Runtime, Code } from "aws-cdk-lib/aws-lambda";

import { Construct } from "constructs";
import { join } from "path";


export class SpacesLambdaStack extends Stack{

    public readonly spacesLambdaIntegration: LambdaIntegration

    constructor(scope: Construct, id: string, props?: StackProps){
        super(scope,id,props);

        const spacesLamdba=new LambdaFunction(this, 'SpacesLambda', {
            runtime: Runtime.NODEJS_18_X,
            handler: 'handler',
            code: Code.fromAsset(join(__dirname, '..', '..', 'services','spaces'))
        })

        
       this.spacesLambdaIntegration= new LambdaIntegration(spacesLamdba);

    }

}