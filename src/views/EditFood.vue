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
    <ion-toast :is-open="isAdmitSuccessOpen" message="添加成功！" :duration="2000"
      @didDismiss="isAdmitSuccessOpen = false"></ion-toast>
    <ion-toast :is-open="errorMessage" :message="errorMessage" :duration="2000"
      @didDismiss="errorMessage = null"></ion-toast>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonFab, IonFabButton, IonIcon, IonNote, IonAlert, IonToast } from '@ionic/vue';
import { add } from 'ionicons/icons';
import { ref, onMounted } from 'vue';
import { FoodCalculator } from '@/composables/foodCalculator';
const { foodList, addFood, loadFoods } = FoodCalculator();
export const errorMessage = ref<string | null>(null);
</script>

<script setup lang="ts">
//页面逻辑
const isAdmitSuccessOpen = ref(false);
const alertButtons = [
  {
    text: '取消',
    role: 'cancel',
    handler: () => {
      errorMessage.value = null;
      console.log('已取消添加食物');
    },
  },
  {
    text: '添加',
    handler: async (data: any) => {
      if (!(data.foodName && data.foodWeight)) {
        console.log('食物未输入')
        errorMessage.value = '请输入正确的食物名称和重量'; //显示条形通知，提示格式不正确
        return false;
      }
      else {
        console.log(`准备添加食物${data.foodName}，${data.foodWeight}`);
        if (await addFood(data.foodName, data.foodWeight)) {
          isAdmitSuccessOpen.value = true; //显示条形通知，表示添加成功
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
  loadFoods();
})
</script>

<style scoped>
.make-central {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#add-button {
  margin: 2vw;
}
</style>