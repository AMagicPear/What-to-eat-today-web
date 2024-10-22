<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue'; //用于ionic应用的路由
import { defineComponent } from 'vue';
import { StatusBar, Style } from '@capacitor/status-bar';
import { isPlatform } from '@ionic/vue';
if (isPlatform('hybrid')) {
  StatusBar.setOverlaysWebView({ overlay: true });
  StatusBar.setStyle({ style: Style.Light })
}

export default defineComponent({
  name: 'App',
  components: { IonApp, IonRouterOutlet },
})
</script>
<style>
.make-central {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>