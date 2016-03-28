# final-conf - A node.js Config Loader
## A node.js configuration loader

Loads settings (string, booleans, numbers etc.) from env, [dotenv](https://github.com/motdotla/dotenv) files, [config](https://github.com/lorenwest/node-config) json files and external urls.

This repo exists, because there is no sufficient solution (to us) which combines all the features required by our applications to load settings from the node environment, from a local json file or from a remote file with proper caching etc. And to avoid duplicated code files in every project, we have it on npm. :)

This is currently a work in progress.