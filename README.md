# UI5 Firebase Sample App

Serverless web app using the UI5 framework, with an example serverside api. API triggers Firebase Functions to retrieve data from Firestore as JSON. This data is then cached client and serverside in a CDN and bound with a JSON model in the frontend.

## Description

This app demonstrates a setup for developing UI5 applications. 
Hosted in firebase hosting with functions to access access to firestore.

## Preparation

Use `npm` (or `yarn`) to install the dependencies:

```sh
npm install
```

(To use yarn, just do `yarn` instead.)

Also perform npm install in /functions directory

## Firebase setup
```sh
npm install -g firebase-tools
```

Create a firebase project (Free Blaze Plan is required for Functions).

```sh
firebase login
```

If you want to emulate create API key and place key.json in project directory.

To run a local cloud service emulator:
```sh
set GOOGLE_APPLICATION_CREDENTIALS=key.json
firebase emulators:start
```

## Firebase deploy
Github Action workflow provided in this repo only deploys hosting, to deploy from local run following command:
```sh
firebase deploy --only "hosting,functions"
```

## Run the App

Execute the following command to run the app locally for development in watch mode (the browser reloads the app automatically when there are changes in the source code):

```sh
npm start
```

As shown in the terminal after executing this command, the app is then running on http://localhost:8080/index.html. A browser window with this URL should automatically open.

(When using yarn, do `yarn start` instead.)

## Build the App

### Unoptimized (but quick)

Execute the following command to build the project and get an app that can be deployed:

```sh
npm run build
```

The result is placed into the `dist` folder. To start the generated package, just run

```sh
npm run start:dist
```

Note that `index.html` still loads the UI5 framework from the relative URL `resources/...`, which does not physically exist, but is only provided dynamically by the UI5 tooling. So for an actual deployment you should change this URL to either [the CDN](https://sdk.openui5.org/#/topic/2d3eb2f322ea4a82983c1c62a33ec4ae) or your local deployment of UI5.

(When using yarn, do `yarn build` and `yarn start:dist` instead.)

### Optimized

For an optimized self-contained build (takes longer because the UI5 resources are built, too), do:

```sh
npm run build:opt
```

To start the generated package, again just run:

```sh
npm run start:dist
```

In this case, all UI5 framework resources are also available within the `dist` folder, so the folder can be deployed as-is to any static web server, without changing the bootstrap URL.

With the self-contained build, the bootstrap URL in `index.html` has already been modified to load the newly created `sap-ui-custom.js` for bootstrapping, which contains all app resources as well as all needed UI5 JavaScript resources. Most UI5 resources inside the `dist` folder are for this reason actually **not** needed to run the app. Only the non-JS-files, like translation texts and CSS files, are used and must also be deployed. (Only when for some reason JS files are missing from the optimized self-contained bundle, they are also loaded separately.)

(When using yarn, do `yarn build:opt` and `yarn start:dist` instead.)

## Check the Code

To lint the code, do:

```sh
npm run lint
```

(Again, when using yarn, do `yarn lint` instead.)

## Recreate project
- https://www.npmjs.com/package/create-easy-ui5
```sh
npm install easy-ui5
npm init easy-ui5
```
- https://firebase.google.com/docs/cli?hl=de
```sh
npm install -g firebase-tools
npm init firebase
```

## License

This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
