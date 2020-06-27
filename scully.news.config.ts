import {ScullyConfig, setPluginConfig, registerPlugin} from '@scullyio/scully';

// setPluginConfig('md', {enableSyntaxHighlighting: true});

export const config: ScullyConfig = {
  projectRoot: './projects/news/src',
  projectName: 'news',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    '/docs/:page': {
      type: 'contentFolder',
      page: {
        folder: './docs',
      },
    },
    '/authors/:id': {
      type: 'json',
      id: {
        url: 'http://localhost:8200/users',
        property: 'id',
      },
    },
    '/posts/:id': {
      type: 'json',
      id: {
        url: 'http://localhost:8200/posts',
        property: 'id',
      },
    },
  },
};
