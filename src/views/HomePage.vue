<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>今天吃什么</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-note>{{ timeNow }}</ion-note>
      <ion-label>今天的{{ timePeriod }}饭要吃的食物是：<br />
      </ion-label>
      <!-- <ion-label v-if="selectedFood" style="text-align: center;">{{ selectedFood?.name }}</ion-label> -->
      <WheelSpinner />
      <!-- <ion-button @click="selectFood().then(food => selectedFood = food)">选择食物old</ion-button><br /> -->
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
import { onMounted } from 'vue';
import WheelSpinner from '@/components/WheelSpinner.vue';
import { FoodConstructor } from '@/composables/foodConstructor';
const { loadFoods } = FoodConstructor();

onMounted(() => {
  setInterval(updateTime, 60000);
  loadFoods();
})
</script>

<style scoped>
ion-note {
  display: block;
}

ion-button {
  margin: 18px 0px;
}
</style>
