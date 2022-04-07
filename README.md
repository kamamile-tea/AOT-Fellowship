# AOT Fellowship Lab

## Usage

### Prerequisites

1. Download node and npm: https://nodejs.org/en/download/

2. Download Postman: https://www.postman.com/downloads/

3. Download Git https://git-scm.com/downloads

4. Create a github account (if you don't already have one) https://github.com/

5. Go to the project repo: https://github.com/ajohnson10209/AOT-Fellowship and fork the repo (Slide 36).

6. Clone the repo

```
$ git clone https://github.com/your-repo
```

7. Mac users, Install Java: https://www.java.com/en/download/help/mac_install.html

### AWS Configuration

1. If not already installed, get the AWS CLI tools following the instructions here pertaining to your OS: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
2. Configure you aws account using the instruction here. You will need to create a new key pair if you do not already have one: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html
3. Update the profile setting in the serverless.yml file to "default" if you only have one profile. Otherwise follow the instructions here for creating a named profile https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

### Local development

1. Run the following command in your terminal

```
$ npm install -g serverless
```

2. In your terminal, change your directory into the project directory

```
$ cd AOT-Fellowship
```

3. Run the following command in your terminal to install all dependencies

```
$ npm install
```

4. Set up local DynamoDB

```
$ sls dynamodb install
```

5. Start local sever

```
$ sls offline start
```

6. Use Postman to call your local server

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

### Commiting Code to Github

Once you are finished, you will send your code into your github account

1. Run the following commands in your terminal

```
$ git add .
$ git commit -m "Add a description of your work"
$ git push origin master
```
