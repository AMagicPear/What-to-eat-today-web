<template>
  <ion-page>
    <ion-content>
      <div class="make-central">编辑食物表格的页面</div>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
      <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonFab,IonFabButton,IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons';
</script>

<style scoped>
.make-central {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>