import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.perry.dietmanager',
  appName: '今天吃什么',
  webDir: 'dist'
,
    android: {
       buildOptions: {
          keystorePath: '/Users/amagicpear/自己的一些可执行程序/dietappkey',
          keystoreAlias: 'dietappkey',
       }
    }
  };

export default config;
