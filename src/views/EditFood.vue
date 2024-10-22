<template>
  <ion-page>
    <ion-content>
      <ion-note class="make-central">编辑食物表格的页面<br />{{ foodList }}</ion-note>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end" id="add-button">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
    <ion-alert header="添加食物" trigger="add-button" :buttons=alertButtons :inputs=alertInputs></ion-alert>
    <ion-toast :is-open="message" :message="message" :duration="2000"
      @didDismiss="message = null"></ion-toast>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonFab, IonFabButton, IonIcon, IonNote, IonAlert, IonToast } from '@ionic/vue';
import { add } from 'ionicons/icons';
import { ref, onMounted } from 'vue';
import { FoodConstructor } from '@/composables/foodConstructor';
const { foodList, addFood, loadFoods } = FoodConstructor();
export const message = ref<string | null>(null);
</script>

<script setup lang="ts">
//页面逻辑
const alertButtons = [
  {
    text: '取消',
    role: 'cancel',
    handler: () => {
      message.value = null;
      console.log('已取消添加食物');
    },
  },
  {
    text: '添加',
    handler: async (data: any) => {
      if (!(data.foodName && data.foodWeight)) {
        console.log('食物未输入');
        message.value = '请输入食物名称和权重后再提交'; //显示条形通知，提示格式不正确
        return false;
      } else if (data.foodWeight < 0) {
        message.value = '权重不能是负数！';
        return false;
      }
      else {
        console.log(`准备添加食物${data.foodName}，${data.foodWeight}`);
        if (await addFood(data.foodName, data.foodWeight)) {
          message.value = `${data.foodName}添加成功！`; //显示条形通知，表示添加成功
          return true;
        } else {
          return false;
        }
      }
    }
  }
];
const alertInputs = [
  {
    name: 'foodName',
    placeholder: '食物名称',
  },
  {
    name: 'foodWeight',
    type: 'number',
    placeholder: '权重',
    min: 0,
  },
];
onMounted(() => {
  loadFoods().then(()=>{
    console.log("加载食物列表：");
    console.log(foodList.value);
  })
})
</script>

<style scoped>
#add-button {
  margin: 2vw;
}
</style>