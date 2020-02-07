# What is this?
This serverless function is a proxy that avoids CORS Error through the Now platform (ZEIT, Inc) and solves the problem if you cannot configure the server-side.
This function gets the resource of URL written in `now.json` instead of the request-host, then makes the same body response including the `Access-Control-Allow-Origin` header.


# How it uses?
Firstly, write `TARGET_URL` and `ALLOW_ORIGIN` in `now.json` before the deployment.

Then, type this command.

```
now
```

After building, you can avoid CORS Error through deployment URL on Now (like: `https://project-name.username.now.sh/api/target/`).

Please reffer to Now CLI: https://zeit.co/docs/v2/introduction

If you change or add functions, please place node.js source to `/api/` like `/api/target.js`.
In this directory, Now platform automatically builds the sources and set functions end point.

Please refer to Now Serverless-functions: https://zeit.co/docs/v2/serverless-functions/introduction
