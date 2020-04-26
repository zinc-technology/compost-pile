"use strict";

module.exports = {
  plugins: ["plugins/markdown"],
  source: {
    include: ["src", "README.md"],
    exclude: ["node_modules"],
    includePattern: ".+\\.js(doc|x)?$",
    excludePattern: "(^|\\/|\\\\)_",
  },
  opts: {
    destination: "../_docs/www/",
  },
};
