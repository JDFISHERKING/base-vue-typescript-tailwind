# Base Project

This is a base starter project which implements Vue3 Typescript and Tailwindcss.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

After the project is done building, there is often 2 css files generated: `app.css` and `chunk-vendors.css`. Only the `app.css` is needed for embedding a small app on Hubspot post. However, the `app.css` needs to be processed through the rem-to-px tool so that it looks correct within the Hubspot site.

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
