# What is this?
This source is to avoid CORS Error through Now platform (ZEIT, Inc).
If you cannot configure server-side, this source support to solve the problem.

# How is it work?
This program gets the resource of URL written in `now.json`.
Then, add `Access-Control-Allow-Origin` header and send the same body response to request-host.


# How it uses?
Firstly, write `TARGET_URL` and `ALLOW_ORIGIN` in `now.json` before the deployment.

Then, run this command.

```
now
```

After building, you can avoid CORS Error in through deployment URL on Now (like: `https://project-name.username.now.sh/api/target/`).


Please reffer to Now CLI: [https://zeit.co/docs/v2/introduction]

If you change or add functions, please place node.js source to `/api/` like `/api/target.js`.
In this directory, Now platform automatically build the source and set functions entry point.
Please refer this: [https://zeit.co/docs/v2/serverless-functions/introduction]

