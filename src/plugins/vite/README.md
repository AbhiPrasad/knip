# Vite

## Enabled

This plugin is enabled when any of the following package names and/or regular expressions has a match in `dependencies`
or `devDependencies`:

- `vite`

## Default configuration

```json
{
  "vite": {
    "config": ["vite.config.{js,mjs,ts,cjs,mts,cts}"]
  }
}
```

Also see [Knip plugins][1] for more information about plugins.

[1]: https://github.com/webpro/knip/blob/main/README.md#plugins
