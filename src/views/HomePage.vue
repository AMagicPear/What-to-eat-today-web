<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>今天吃什么</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-note>{{ timeNow }}</ion-note>
      <ion-button @click="selectFood().then(food => selectedFood = food)">选择食物</ion-button><br />
      <ion-label>今天要吃的食物是：
      </ion-label>
      <ion-label style="text-align: center;">{{ selectedFood?.name }}</ion-label>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
function updateTime() {
  timeNow.value = new Date();
}
// import { determineTimePeriod } from '@/composables/foodSelector';
import { Log } from '@/composables/log';
const { loadLog } = Log();
</script>

<script setup lang="ts">
import { IonPage, IonContent, IonNote, IonButton, IonHeader, IonToolbar, IonTitle, IonLabel } from '@ionic/vue';
import { timeNow, selectFood } from '@/composables/foodSelector';
import { onMounted, ref } from 'vue';
import { IFood } from '@/composables/foodConstructor';
onMounted(() => {
  setInterval(updateTime, 1000);
  loadLog();
})
const selectedFood = ref<IFood>();
</script>

<style scoped>
ion-note {
  display: block;
}

ion-button {
  margin: 18px 0px;
}
</style>
