<script setup lang="ts">
// import { ref } from 'vue';
import LogoSVG from '@/components/logoSVG.vue';
import EmojiSVG from '@/components/emojiSVG.vue';
</script>

<template>
  <div class="blue">
    <LogoSVG :isBlue="true" />
    <div class="title">Вход в ERP-систему</div>
    <div class="flex-line">
      <div class="helo">C возвращением!</div>
      <EmojiSVG />
    </div>
    <div class="akk-item" style="margin-bottom: 20px">
      <div class="avatar cross"></div>
      <div class="table">Добавить аккаунт</div>
    </div>

    <ul class="akk-block flex-column" style="gap: 15px">
      <li class="akk-item">
        <div class="avatar avatar__img"></div>
        <div class="flex-column">
          <div class="logo">Иванова И.И.</div>
          <div class="table">001</div>
        </div>
      </li>
      <li class="akk-item">
        <div class="avatar avatar__img"></div>
        <div class="flex-column">
          <div class="logo">Иванова И.И.</div>
          <div class="table">001</div>
        </div>
      </li>
      <li class="akk-item">
        <div class="avatar avatar__img"></div>
        <div class="flex-column">
          <div class="logo">Иванова И.И.</div>
          <div class="table">001</div>
        </div>
      </li>
      <li class="akk-item">
        <div class="avatar avatar__img"></div>
        <div class="flex-column">
          <div class="logo">Иванова И.И.</div>
          <div class="table">001</div>
        </div>
      </li>
      <li class="akk-item">
        <div class="avatar avatar__img"></div>
        <div class="flex-column">
          <div class="logo">Иванова И.И.</div>
          <div class="table">001</div>
        </div>
      </li>
      <li class="akk-item">
        <div class="avatar avatar__img"></div>
        <div class="flex-column">
          <div class="logo">Иванова И.И.</div>
          <div class="table">001</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.akk-block {
  height: 355px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.cross {
  position: relative;
  width: 22px;
  height: 22px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 22px;
    top: 19px;
    left: 29px;
    border-radius: 2px;
    border: 2px solid rgba(103, 112, 116, 1);
  }

  &::before {
    transform: rotate(90deg);
  }

  &::after {
    transform: rotate(-0deg);
  }
}

.flex-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.logo {
  font-size: 18px;
}

.table {
  color: rgb(103, 112, 116);
}

.avatar {
  width: 60px;
  height: 60px;
  margin-right: 15px;
  background-color: white;
  border-radius: 50%;
}

.avatar__img {
  background-image: url('@/assets/img/ava.png');
  background-position: bottom -15px right 0;
  background-size: 65px;
}

.akk-item {
  display: flex;
  align-items: center;
  width: 469px;
  height: 90px;
  padding: 15px 25px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(30px);
  cursor: pointer;
}

.title {
  margin-top: 23px;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  text-align: center;
  color: white;
}

.helo {
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  color: white;
}

.flex-line {
  margin-top: 25px;
  margin-bottom: 40px;
  width: 413px;
}

.blue {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(413px, 90%, 725px);
  height: 834px;
  padding: 40px 128px;
  font: 400 1rem Inter;
  border-radius: 25px;
  background: linear-gradient(
    213.61deg,
    #a1c2ff 3.13%,
    #75a3fb 46.43%,
    #4781ee 92.74%
  );
}
</style>
