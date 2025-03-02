# How to run

### Open a terminal and run the following commands

```bash
export DB_NAME=
export COLLECTION_NAME=
export ATLAS_CONNECTION_STRING=
```


### Once you have set the env variables run the following command to simulate a sandbox environment

```bash
npx ampx sandbox
```

### Once the sandbox environment is created, open another terminal and run the following commands

```bash
npm run dev
```

### Sample Output

```
npx ampx sandbox
[Sandbox] Pattern !.vscode/extensions.json found in .gitignore. ".vscode/extensions.json" will not be watched if other patterns in .gitignore are excluding it.

 Amplify Sandbox

 Identifier:   babusrinivasan
 Stack:        amplify-amplifyvitereacttemplate-babusrinivasan-sandbox-db2189c06b

 To specify a different sandbox identifier, use --identifier
{"collection":"Todos","database":"Integration","dataSource":"Cluster0"}


✨  Synthesis time: 2.17s

⚠️ The --hotswap and --hotswap-fallback flags deliberately introduce CloudFormation drift to speed up deployments
⚠️ They should only be used for development - never use them for your production Stacks!

......
.....
```
