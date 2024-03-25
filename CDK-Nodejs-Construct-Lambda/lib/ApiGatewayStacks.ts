import { Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

interface ApiGatewayStackProps extends StackProps{

    _LambdaIntegration: LambdaIntegration

}

export class ApiGatewayStacks extends Stack{
    constructor(scope:Construct, id: string, props:ApiGatewayStackProps ){
        super(scope,id,props);

       const api = new RestApi(this,'cdkapi');
       const addResource = api.root.addResource('demoProject');
       addResource.addMethod('GET', props._LambdaIntegration);

    }

}