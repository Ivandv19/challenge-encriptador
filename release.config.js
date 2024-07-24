module.exports = {
    branches: ['main'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      '@semantic-release/npm',
      '@semantic-release/github',
    ],
    env: {
        GH_TOKEN: process.env.GH_TOKEN_ENCRIPTADOR_MAIN,
        NPM_TOKEN: process.env.NPM_TOKEN_ENCRIPTADOR
      },
  };