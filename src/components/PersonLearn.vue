<template>
    <ion-page>
        <ion-content>
            <IonLabel>当前求和为：{{ sum }}</IonLabel>
            <ion-button @click="add">点我sum+1</ion-button>
        </ion-content>
        <hr>
        <ion-img v-for="(dog,index) in dogList" :src="dog" :key="index"/>
        <ion-button @click="getDog">再来一只修勾</ion-button>
    </ion-page>
</template>

<script lang="ts" setup name="PersonLearn">
import { ref,reactive } from 'vue'
import { IonPage, IonButton, IonContent, IonLabel,IonImg } from '@ionic/vue';
import axios from 'axios';
//数据
const sum = ref(0)
const dogList = reactive([
    'https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'
])
const add = () => {
    sum.value+=1
}
const getDog = async()=>{
    let result = await axios.get('https://images.dog.ceo/breeds/pembroke/images/random')
    console.log(result.data)
}
</script>

<style scoped>
ion-img{
    width: 100px;
}
</style>