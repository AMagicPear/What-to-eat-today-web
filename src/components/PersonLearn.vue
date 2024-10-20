<template>
    <ion-page>
        <ion-content>
            <IonLabel>当前求和为：{{ sum }}</IonLabel>
            <ion-button @click="add">点我sum+1</ion-button>
        </ion-content>
    </ion-page>
</template>

<script lang="ts" setup name="PersonLearn">
import { ref } from 'vue'
import { IonPage, IonButton, IonContent, IonLabel } from '@ionic/vue';
//数据
const sum = ref(0)
const add = () => {
    sum.value+=1
}
</script>

<style scoped></style>