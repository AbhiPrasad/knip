# Node.js Test Runner

## Enabled

This plugin is enabled when any script in `package.json` includes `node --test`

## Default configuration

```json
{
  "node-test-runner": {
    "entry": ["**/*{.,-,_}test.?(c|m)js", "**/test-*.?(c|m)js", "**/test.?(c|m)js", "**/test/**/*.?(c|m)js"]
  }
}
```

Also see [Knip plugins][1] for more information about plugins.

[1]: https://github.com/webpro/knip/blob/main/README.md#plugins
