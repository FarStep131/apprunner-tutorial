import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as assets from "aws-cdk-lib/aws-ecr-assets";
import * as apprunner from "@aws-cdk/aws-apprunner-alpha";

export class ApprunnerTutorialStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const asset = new assets.DockerImageAsset(this, "ImageAssets", {
      directory: "./app",
      platform: assets.Platform.LINUX_AMD64,
    });

    new apprunner.Service(this, "Service", {
      source: apprunner.Source.fromAsset({
        asset: asset,
        imageConfiguration: {
          port: 8080,
        },
      }),
    });

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'ApprunnerTutorialQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
