# onlineved-gui
Prerequisities
	1. install node and npm
		https://nodejs.org/en/
		Guide - http://blog.teamtreehouse.com/install-node-js-npm-windows

Configuration
	Make a new folder and add the necessary JSON files
		package.json
			1. Navigate the the folder using a command prompt and "npm init"
			2. Add the angular dependencies (https://www.npmjs.com/~angular)
				* npm install --save rxjs (https://www.npmjs.com/package/rxjs)
				* npm install --save zone.js (https://www.npmjs.com/package/zone.js)
				* npm install --save core-js (https://github.com/zloirock/core-js)
				* npm install ts-helpers --save (https://github.com/ngParty/ts-helpers)
				* npm install --save @angular/common
				* npm install --save @angular/core
				* npm install --save @angular/compiler
				* npm install --save @angular/forms
				* npm install --save @angular/http
				* npm install --save @angular/router
				* npm install --save @angular/platform-browser
					contains code shared for browser execution (DOM thread, WebWorker)
				* npm install --save @angular/platform-browser-dynamic
					contains the client side code that processes templates (bindings, components, ...) and reflective dependency injection

			3. Install some devDependencies
				* npm install @angular/cli --save-dev
				* npm install @angular/compiler-cli --save-dev
				* npm install @types/node --save-dev (https://www.npmjs.com/~types)
				* npm install tslint --save-dev (https://www.npmjs.com/package/tslint)
				* npm install typescript --save-dev (https://www.npmjs.com/package/typescript)
				* npm install codelyzer --save-dev (https://www.npmjs.com/package/codelyzer)


Setup (premade 7z file)
	1. Add a new folder in your project root directory called src
	2. Inside src, add a folder called app and assets
		Theese folder names can be changed to your prefrences
	3. Extract the files in the 7z file, the structure is obvious
	4. tsconfig.json (https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
		Add this file to your src folder. The presence of a tsconfig.json file in a directory indicates that the directory
		is the root of a TypeScript project
	5. tslint.json (https://palantir.github.io/tslint/usage/tslint-json/)
		TypeScript lint configuration
	6. angular-cli.json (https://github.com/angular/angular-cli)
		Generating and serving an Angular2 project via a development server
	7. Add scripts to package.json
		"ng": "ng",
		"start": "ng serve",
