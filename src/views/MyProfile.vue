<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>简介</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>应用介绍</ion-card-title>
          <ion-card-subtitle>食物选择小助手</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-avatar aria-hidden="true" slot="start">
                <img alt="AMagicPear" src="/LostInLight.png" />
              </ion-avatar>
              <ion-label><strong>一只会魔法的梨</strong> 出品</ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle,IonCard,IonCardHeader,IonCardContent,IonCardTitle,IonCardSubtitle,IonList,IonItem,IonLabel,IonAvatar } from '@ionic/vue';
</script>

<style scoped>
ion-note {
  display: block;
}
</style>