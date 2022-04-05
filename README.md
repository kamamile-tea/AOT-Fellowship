<!--
title: 'AWS NodeJS Example'
description: 'This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework AWS NodeJS Example

This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework. The deployed function does not include any event definitions as well as any kind of persistence (database). For more advanced configurations check out the [examples repo](https://github.com/serverless/examples/) which includes integrations with SQS, DynamoDB or examples of functions that are triggered in `cron`-like manner. For details about configuration of specific `events`, please refer to our [documentation](https://www.serverless.com/framework/docs/providers/aws/events/).

## Usage

### Local development

1. Run npm install

2. Set up local DynamoDB

- sls dynamodb install

3. Start local sever

- sls offline start

4. Use Postman to call your local server

### AWS Configuration

1. If not already installed, get the AWS CLI tools following the instructions here pertaining to your OS: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
2. Configure you aws account using the instruction here. You will need to create a new key pair if you do not already have one: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html
3. Update the profile setting in the serverless.yml file to "default" if you only have one profile. Otherwise follow the instructions here for creating a named profile https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

After running deploy, you should see output similar to:

```bash
Deploying aot-fellowship-demo to stage dev (us-east-1)

✔ Service deployed to stack aot-fellowship-demo-dev (112s)

functions:
  showtime: aot-fellowship-demo-dev-showtime (1.5 kB)
```

### Invocation

After successful deployment, the url for your api will be in the command line

- example: https://gp1ux2he8d.execute-api.us-east-1.amazonaws.com/dev/

Use Postman to call your api endpoints
