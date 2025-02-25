<script setup lang="ts">
import InputPassword from './inputPassword.vue';
import { useAuthStore } from '../stores/auth';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { userInput } = storeToRefs(useAuthStore());

const props = defineProps<{
  login: string;
  tabel: string;
  img: string;
  isActive: boolean;
}>();

const emit = defineEmits<{
  (e: 'set-active'): void;
}>();

// Предотвращаем всплытие события клика внутри элемента
const handleClick = (event: MouseEvent) => {
  event.stopPropagation();
  emit('set-active');
};

const inAkk = async () => {
  userInput.value.user.login = props.login;
  userInput.value.user.tabel = props.tabel;
  await authStore.authUser('login');
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
        <div class="table">{{ props.tabel }}</div>
      </div>
    </div>
    <form
      class="text-field top-line"
      @submit.prevent="inAkk"
      v-if="props.isActive"
      @click.stop
    >
      <InputPassword />
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
