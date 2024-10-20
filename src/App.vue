<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
  <person-learn />
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue'; //用于ionic应用的路由
import { defineComponent } from 'vue';
// import DietManager from './components/DietManager.vue';
export default defineComponent({
  name: 'App',
  components: { IonApp, IonRouterOutlet },
})
</script>
