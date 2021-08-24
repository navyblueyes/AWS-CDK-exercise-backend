import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Code, Function as LambdaFunction, Runtime } from 'aws-cdk-lib/lib/aws-lambda';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/lib/aws-apigateway'
import { join } from 'path';
import { GenericTable } from './GenericTable';

export class SpaceStack extends Stack{

  private api = new RestApi(this, 'SpaceApi');
  private spaceTable = new GenericTable(
    'SpaceTable',
    'spaceid',
    this
  )

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props)

    const helloFromLambda = new LambdaFunction(this, 'helloLambda', {
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset(join(__dirname, '..', 'services', 'hello')),
      handler: 'hello.main'
    })

    const helloLambdaIntegration = new LambdaIntegration(helloFromLambda);
    const helloLambdaResource = this.api.root.addResource('hello');
    helloLambdaResource.addMethod('GET', helloLambdaIntegration);
  }

}
