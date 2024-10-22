<template>
  <ion-page>
    <ion-content>
      <ion-note>{{ timeNow }}</ion-note><br>
      <ion-button @click="selectFood()">选择食物</ion-button><br>
      <ion-note>{{ determineTimePeriod(timeNow) }}</ion-note>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
function updateTime() {
  timeNow.value = new Date();
}
import { determineTimePeriod } from '@/composables/foodSelector';
import { Log } from '@/composables/log';
const { loadLog } = Log();
</script>

<script setup lang="ts">
import { IonPage, IonContent, IonNote, IonButton } from '@ionic/vue';
import { timeNow, selectFood } from '@/composables/foodSelector';
import { onMounted } from 'vue';
onMounted(() => {
  setInterval(updateTime, 1000);
  loadLog();
})
</script>

<style scoped></style>
