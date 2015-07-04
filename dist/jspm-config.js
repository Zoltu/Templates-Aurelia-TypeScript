System.config({
  "baseURL": "/",
  "transpiler": "typescript",
  "defaultJSExtensions": true,
  "paths": {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  "packages": {
    "source": {
      "defaultExtension": "ts"
    }
  }
});

System.config({
  "map": {
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.14.0",
    "typescript": "github:mhegazy/typescript@v1.5-beta2",
    "github:aurelia/binding@0.8.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/bootstrapper@0.14.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.0",
      "aurelia-framework": "github:aurelia/framework@0.13.1",
      "aurelia-history": "github:aurelia/history@0.6.0",
      "aurelia-history-browser": "github:aurelia/history-browser@0.6.0",
      "aurelia-loader-default": "github:aurelia/loader-default@0.9.0",
      "aurelia-logging-console": "github:aurelia/logging-console@0.6.0",
      "aurelia-router": "github:aurelia/router@0.10.0",
      "aurelia-templating": "github:aurelia/templating@0.13.1",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.13.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.13.0",
      "aurelia-templating-router": "github:aurelia/templating-router@0.14.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/dependency-injection@0.9.0": {
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/event-aggregator@0.6.0": {
      "aurelia-logging": "github:aurelia/logging@0.6.0"
    },
    "github:aurelia/framework@0.13.1": {
      "aurelia-binding": "github:aurelia/binding@0.8.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-loader": "github:aurelia/loader@0.8.0",
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.13.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/history-browser@0.6.0": {
      "aurelia-history": "github:aurelia/history@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/loader-default@0.9.0": {
      "aurelia-loader": "github:aurelia/loader@0.8.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0"
    },
    "github:aurelia/loader@0.8.0": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "core-js": "npm:core-js@0.9.18",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.6.3"
    },
    "github:aurelia/metadata@0.7.0": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/route-recognizer@0.6.0": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/router@0.10.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.0",
      "aurelia-history": "github:aurelia/history@0.6.0",
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-binding@0.13.0": {
      "aurelia-binding": "github:aurelia/binding@0.8.0",
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.13.1"
    },
    "github:aurelia/templating-resources@0.13.0": {
      "aurelia-binding": "github:aurelia/binding@0.8.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.13.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-router@0.14.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-router": "github:aurelia/router@0.10.0",
      "aurelia-templating": "github:aurelia/templating@0.13.1"
    },
    "github:aurelia/templating@0.13.1": {
      "aurelia-binding": "github:aurelia/binding@0.8.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-loader": "github:aurelia/loader@0.8.0",
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.6.15": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});
