module.exports = {
    "postcss": [],
    "svg": {
        "active": true,
        "workflow": "symbols",
        "symbolsConfig": {
            "loadingType": "separate-file-with-link",
            "usePolyfillForExternalSymbols": false,
            "pathToExternalSymbolsFile": ""
        }
    },
    "css": {
        "workflow": "manual"
    },
    "js": {
        "workflow": "modular",
        "bundler": "webpack",
        "lint": false,
        "useBabel": true,
        "removeConsoleLog": true,
        "webpack": {
            "useHMR": true
        },
        "jsPathsToConcatBeforeModulesJs": [],
        "lintJsCodeBeforeModules": false,
        "jsPathsToConcatAfterModulesJs": [],
        "lintJsCodeAfterModules": false
    },
    "sourcemaps": {
        "js": {
            "active": true,
            "inline": true
        },
        "css": {
            "active": true,
            "inline": true
        }
    },
    "notifyConfig": {
        "useNotify": true,
        "title": "TARS notification",
        "sounds": {},
        "taskFinishedText": "Task finished at: "
    },
    "minifyHtml": false,
    "generateStaticPath": true,
    "buildPath": "./builds/",
    "useBuildVersioning": false,
    "useArchiver": true,
    "ulimit": 4096,
    "templater": "jade",
    "cssPreprocessor": "scss",
    "useImagesForDisplayWithDpi": [
        96
    ],
    "fs": {
        "staticFolderName": "static",
        "imagesFolderName": "img",
        "componentsFolderName": "components"
    }
};