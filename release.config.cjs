const process = require('node:process')
const makeConfig = require('@cycjimmy/config-lib/cjs/semanticRelease/19.x/makeConfigWithPgkRootForLibrary.cjs').default

const config = makeConfig()

// Set SKIP_NPM_AUTH=true to skip npm credential verification (e.g. dry-run
// jobs that never publish). See @semantic-release/npm's `npmPublish` option.
if (process.env.SKIP_NPM_AUTH === 'true') {
  config.plugins = config.plugins.map((plugin) => {
    if (Array.isArray(plugin) && plugin[0] === '@semantic-release/npm' && plugin[1] && plugin[1].pkgRoot) {
      return [plugin[0], { ...plugin[1], npmPublish: false }]
    }

    return plugin
  })
}

module.exports = config
