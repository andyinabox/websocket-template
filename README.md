# WebSocket Template

A simple template for prototyping with browserify/websockets. Includes the following tools:

 * ws and express for the WebSockets server
 * `browserify` for bundling
 * `watchify` for watching
 * `errorify` for error handling
 * `babelify`	for es-next compatability 

# Usage

This setup assumes you have `browserify` and `watchify` install globally. If not:

```bash
npm run globals
```

Then start both server `watchify` for client JavaScript

```bash
npm start
```

# Todo

- [ ] Incorporate livereload