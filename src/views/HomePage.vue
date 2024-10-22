<template>
  <ion-page>
    <ion-content>
      <ion-note>{{ timeNow }}</ion-note><br>
      <ion-button @click="chooseFood()">选择食物</ion-button>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
function updateTime(){
  timeNow.value = new Date();
}
</script>

<script setup lang="ts">
import { IonPage, IonContent, IonNote, IonButton } from '@ionic/vue';
import { timeNow, chooseFood } from '@/composables/foodSelector';
import { onMounted } from 'vue';
onMounted(() => {
  setInterval(updateTime,1000);
})
</script>

<style scoped></style>
