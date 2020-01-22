# Project setup and basic documentations

## Install Typescript
  * Make sure `node` is installed, install `typescript` and run `tsc -v` to make sure typescript is successfully installed.
    ```
    Yus-MacBook-Pro:TypescriptAxios yyu196$ npm -v
    6.1.0
    Yus-MacBook-Pro:TypescriptAxios yyu196$ npm install -g typescript
    // Successfully install `typescript`
    Yus-MacBook-Pro:~ yyu196$ tsc -v
    Version 3.7.2
    ```

## Basic Typescript Knowledge
  ### [Basic Types](./BasicTypescript/BasicTypes.md)
  ### [Variable Declarations](./BasicTypescript/VariableDeclarations.md)
  ### [Interfaces](./BasicTypescript/Interfaces.md)
  ### [Classes](./BasicTypescript/Classes.md)
  ### [Functions](./BasicTypescript/Functions.md)
  ### [Generics](./BasicTypescript/Generics.md)
  ### [Type Inference](./BasicTypescript/TypeInference.md)

## Features
  * Make `XMLHTTPRequests` from the browser
    * Transform URL (especially all parameters), Request Data (body), headers (normalize `Content-Type` field name and pass the correct field value) into correct form before `XMLHttpRequest` opens and sends data from browser.
    * Define `AxiosResponse` type and wrap it into `AxiosPromise` type. Handle `XMLHTTPRequestResponse` in a `AxiosPromise` for asynchronization purpose.
      * Convert `response.headers` from a string to a `json` object. 
      * Convert `response.data` from a string into a `json` object when possible.
  * Error Handling
    * Handle response with wrong Network Error, Timeout and Non-200 response status
    * Encapsulate error into an `AxiosError` class object.
  * Define an Axios interface with methods `request`, `get`, `delete`, `delete`, `head`, `options`, `post`, `put` and `patch`.
    * Encapsulate axios into an `Axios` class and an `AxiosInterface` that has one method. Mixin the class and the interface with request method in the `Axios` class binded to the interface's method.
    * Support `axios()` overloads as `axios(config)` and `axios(url, config)`.
    * Support generic types for response data.
  * Interceptor: Axios in typescript also support intercepting requests or responses before they are handled by `then` or `catch`.
    * Diagram demonstrating how this works.

      <img src="./Images/interceptor.png" height=80% width=80%>
    
    * Define an `InterceptorManager` interface, and expose `resolve` and `eject` methods. In the `InterceptorManager` class implementation, define an `Interceptor` interface and store all interceptors as an `Array<Interceptor>`.
    * Add member `interceptors` into `Axios` class as a `PromiseChain`, when `sendRequest`, going through all Promises in the chain before sending request to the backend.
  * Merge default and user-customized configurations
    * Define some default configurations and pass the default configuration into Axios object when the instance is created.


## Create Typescript project using `typescript-library-starter`
  ```
  git clone https://github.com/alexjoverm/typescript-library-starter.git src
  cd src

  # Run npm install and write your library name when asked. That's all!
  npm install
  ```

## Setup Demo for the project
  * Setup `SourceCodes/examples` directory and add `"dev": "node examples/server.js"` to `package.json` scripts section.
  * Setup routing to `simple`, `basic`, `basic_promise`, `error_handle`, `extend`, `extend_overload` and `extend_generic` directory in `SourceCodes/examples/index.html` and `SourceCodes/examples/server.js`.
  * Add demo examples of `simple`, `basic`, `basic_promise`, `error_handle`, `extend`, `extend_overload` and `extend_generic` directory under `SourceCodes/examples` and let axios  send Request via calling `axios` function or its exposed APIs defined in the interface.
  * Run `npm run dev`, go to `http://localhost:8080/` and check Network Response in Chrome.