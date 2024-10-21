<template>
  <ion-page>
    
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="fastFood" />
          <ion-label>今天吃什么</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="edit" href="/edit">
          <ion-icon :icon="create" />
          <ion-label>编辑食物信息</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="profile" href="/profile">
          <ion-icon :icon="person" />
          <ion-label>简介</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

import { create, fastFood, person } from 'ionicons/icons';

export default {
  components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
  data() {
    return {
      fastFood,
      create,
      person
    };
  },
};
</script>