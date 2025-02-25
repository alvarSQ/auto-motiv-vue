<script setup lang="ts">
import { ref } from 'vue';
import InputPassword from './inputPassword.vue';


const props = defineProps<{
  login: string;
  table: string;
  img: string;
  isActive: boolean;
}>();

const emit = defineEmits<{
  (e: 'set-active'): void;
}>();

const inputPass = ref('');

// Предотвращаем всплытие события клика внутри элемента
const handleClick = (event: MouseEvent) => {
  event.stopPropagation();
  emit('set-active');
};
</script>

<template>
  <li
    class="akk-item"
    :class="{ 'akk-item__pass': props.isActive }"
    @click="handleClick"
  >
    <div class="flex-line-start">
      <div
        class="avatar avatar__img"
        :style="`background-image: url(/src/assets/img/${props.img})`"
      ></div>
      <div class="flex-column">
        <div class="login">{{ props.login }}</div>
        <div class="table">{{ props.table }}</div>
      </div>
    </div>
    <form class="text-field top-line" @submit.prevent="" v-if="props.isActive" @click.stop>
      <InputPassword v-model="inputPass" />
      <button class="btn">Войти</button>
    </form>
  </li>
</template>

<style scoped lang="scss">
.text-field {
    gap: 15px;
}

.btn {
    padding: 16px 0;
    color: #fff;
    background: rgba(119, 166, 255, 1);
    &:hover {
    background: rgba(84, 140, 246, 1);
  }
}

.top-line {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(119, 166, 255, 1);
}

.akk-item__pass {
  height: 288px;
}

.avatar__img {
  background-position: bottom -15px right 0;
  background-size: 65px;
}

.login {
  font-size: 18px;
}
</style>
