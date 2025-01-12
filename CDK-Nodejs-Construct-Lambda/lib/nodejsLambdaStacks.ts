import { Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

//interface LambdaStackProps extends StackProps{}

export class nodejsLambdaStacks extends Stack{

    public readonly helloLambdaIntegration: LambdaIntegration

    constructor(scope: Construct, id: string, props?: StackProps){
        super(scope,id,props)

        const helloLambda= new NodejsFunction(this, 'HelloLambda',{
            runtime: Runtime.NODEJS_18_X,
            handler: 'handler',
            entry: (join(__dirname,'..','lambdaCode','hello.ts'))
        })

        this.helloLambdaIntegration = new LambdaIntegration(helloLambda)
    }


}