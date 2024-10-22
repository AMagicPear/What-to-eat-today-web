<template>
    <ion-page>
        <ion-content>
            <ion-note class="make-central">显示个人信息</ion-note>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent,IonNote } from '@ionic/vue';
</script>

<style scoped>
.make-central {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>