# ApplitoolsHackathon

This is [my](#Author) submission for the [Applitools Hackathon](https://applitools.com/hackathon).
It is a solution that uses the [WebdriverIO](https://webdriver.io/) v5 testrunner. I used [TypeScript](https://www.typescriptlang.org/) (a typed JavaScript superset) to write the code. I also set up some static analysis tools like [eslint](https://eslint.org/) and [prettier](https://prettier.io/).

All tests run headless and in parallel. This makes the test execution a lot faster. This is very useful for the visual tests since checking for visual differences takes some time. For this to work, I had to split the tests up in different files. I hope you don't mind. The traditional tests can be found in [here](./src/tests/traditional) and the visualAI tests in [here](./src/tests/visualAI).

The Applitools Eyes V1 results can be found [here](https://eyes.applitools.com/app/test-results/00000251828474225036).

The Applitools Eyes V2 results can be found [here](https://eyes.applitools.com/app/test-results/00001251828474044506).

## Prerequisites

Make sure you have the following installed:

- [NodeJS](https://nodejs.org/) version >= 10 (Created on 12.13.0)
- Make sure [Chrome](https://www.google.com/chrome/) is installed and updated to the latest version.

## How to run

- Clone this repository.
- On the commandline go to the `ApplitoolsHackathon` directory.
- Run `npm install` and wait until the installation is finished.
- Run `npm install -D chromedriver@latest` and wait until the installation is finished.
- Set the `APPLITOOLS_API_KEY` environment variable with your key. (only needed for visualAI tests)
- To run the tests, execute one of the following commands:
  - `npm run traditional:v1` to run the traditional tests against v1
  - `npm run traditional:v2` to run the traditional tests against v2
  - `npm run visualAI:v1` to run the visualAI tests against v1
  - `npm run visualAI:v2` to run the visualAI tests against v2
- Test output is reported to the terminal. Logging and screenshots (on error) can be found in the `logs` folder.

## General remarks

- There is an [image comparison service](https://github.com/wswebcreation/wdio-image-comparison-service) for WebdriverIO, which I would have normally used for an app like this with these requirements. I decided not to use this, because that seems to defeat the purpose of the hackathon.
- In the traditional tests I validate that the logos on the login page are correct by comparing the Base64 string of the online logo with the Base64 string from a local image. This validates that the image is actually the same image and not just another image with the same name.
- Since I am using the WebdriverIO v5 testrunner, all browser and element calls are automagically synchronous. However, calls to external async libraries are not and have to be wrapped in a 'call' command to make them synchronous. This is why all eyes methods are wrapped.
- [Visual Studio Code](https://code.visualstudio.com/) settings to have linting and prettier support are added to the repo. You can also run linting from commandline by running `npm run lint` and fixes can be auto-applied by running `npm run format`

## Issues

- Potentially, the chromedriver that was installed by following the [How to run](#How-to-run) steps does not support the Chrome browser version you are running. Remove the chromedriver package by running `npm uninstall chromedriver`. Download the correct chromedriver manually from [here](http://chromedriver.chromium.org/) and add the location of chromedriver to your `PATH` environment variable.
- `npm install` might fail if you do not have your systems' build tools installed. [Xcode](https://developer.apple.com/xcode/) and its Command Line tools for Mac and [Windows Build Tools](https://www.npmjs.com/package/windows-build-tools) for Windows. When on Linux, install the build-essential package for your linux version.

## Author

Arjan Blok - [Github](https://github.com/ablok)
