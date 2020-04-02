# Preact Server Side Rendering example

This is an example of server side rendring using [preact](https://preactjs.com).

### Steps: 
1. Start client watch : `yarn start:client`
2. Start express server : `yarn start:server`
3. Go to `http://localhost:8080` you should see the send line of text is not red-colored.
4. But, if we change `hydrate` to `render` in `./src/index.js` it will be red-colored.

The text is only rendered on the client-side, which might be the problem. This works correctly with react though.
