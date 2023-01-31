import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},

  model: {},

  request: {},
  layout: {
    title: '@umijs/max',
  },
  qiankun:{
    slave:{}
  },
  mpa:{
    getConfigFromEntryFile:false,
    layout:'@/layouts',
    template:'src/templates/default.html',
    entry:{
      a:{describe:'a'},
      b:{describe:'b'}
    },
  },
  npmClient: 'yarn',
});

