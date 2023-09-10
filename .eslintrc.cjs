"use strict";

const { join } = require("path");

module.exports = {
  root: true,
  extends: [
    "xicri/node",
  ],

  parserOptions: {
    sourceType: "module",
    project: join(__dirname, "tsconfig.json"),
  },

  rules: {
    "node/no-unpublished-import": "off",
    "jest/valid-expect": [ "error", { maxArgs: 2 }], // jest-expect-message requires two args for `expect()`
  },

  overrides: [
    {
      files: [ "*.cjs" ],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: [ "*.test.js", "*.test.mjs" ],
      extends: "xicri/jest",
    },
  ],
};
