<script setup lang="ts">
import InputPassword from './inputPassword.vue';

const props = defineProps<{
  login: string;
  table: string;
  img: string;
}>();
</script>

<template>
  <li class="akk-item akk-item__pass">
    <div class="flex-line-start">
      <div class="avatar avatar__img"></div>
      <div class="flex-column">
        <div class="login">{{ login }}</div>
        <div class="table">{{ table }}</div>
      </div>
    </div>
      <form class="text-field top-line" @submit.prevent="" v-if="0">
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
//   height: 288px;
}

.avatar__img {
  background-image: url('@/assets/img/ava.png');
  background-position: bottom -15px right 0;
  background-size: 65px;
}

.login {
  font-size: 18px;
}
</style>
