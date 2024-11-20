<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>今天吃什么</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-note>{{ formattedTime }}</ion-note>
      <ion-label>今天的{{ timePeriod }}饭要吃的食物是：<br />
        <WheelSpinner />
      </ion-label>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
function updateTime() {
  timeNow.value = new Date();
}
</script>

<script setup lang="ts">
import { IonPage, IonContent, IonNote, IonHeader, IonToolbar, IonTitle, IonLabel } from '@ionic/vue';
import { timeNow, timePeriod } from '@/composables/foodSelector';
import { onBeforeMount,computed } from 'vue';
import WheelSpinner from '@/components/WheelSpinner.vue';
import { FoodConstructor } from '@/composables/foodConstructor';
const { loadFoods } = FoodConstructor();
onBeforeMount(() => {
  setInterval(updateTime, 60000);
  loadFoods()
})
const formattedTime = computed(() => {
  return timeNow.value.toLocaleString('zh-CN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
});
</script>

<style scoped>
ion-note {
  display: block;
}

ion-button {
  margin: 18px 0px;
}
</style>
