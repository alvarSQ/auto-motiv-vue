<script setup lang="ts">
import LogoSVG from '@/components/logoSVG.vue';
import EmojiSVG from '@/components/emojiSVG.vue';
import AkkItem from '@/components/akkItem.vue';
import { useAuthStore } from '../stores/auth';
import { storeToRefs } from 'pinia';
import { computed, onMounted, onUnmounted, ref } from 'vue';

const { dropdownItems, userInput } = storeToRefs(useAuthStore());

const activeIndex = ref(-1);

// Открываем элемент по клику
const setActive = (index: number) => {
  activeIndex.value = index;
};

// Закрываем элемент при клике вне
const handleClickOutside = (event: MouseEvent) => {
  const akkBlock = document.querySelector('.akk-block');
  if (akkBlock && !akkBlock.contains(event.target as Node)) {
    activeIndex.value = -1;
  }
  userInput.value.user.password = '';
};

const filteredDropdownItems = computed(() => {
  if (activeIndex.value === -1) {
    return dropdownItems.value;
  }
  return [dropdownItems.value[activeIndex.value]];
});

const isAnyActive = computed(() => activeIndex.value !== -1);

const emit = defineEmits(['newAkk']);

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="blue">
    <LogoSVG :isBlue="true" />
    <div class="title">Вход в ERP-систему</div>
    <div class="flex-line flex-line__hello">
      <div class="hello">C возвращением!</div>
      <EmojiSVG />
    </div>
    <div class="akk-item" style="margin-bottom: 20px" @click="$emit('newAkk')">
      <div class="flex-line-start">
        <div class="avatar cross"></div>
        <div class="table">Добавить аккаунт</div>
      </div>
    </div>

    <transition-group
      name="fade"
      tag="ul"
      class="akk-block flex-column"
      style="gap: 15px"
    >
      <AkkItem
        v-for="(akk, index) in filteredDropdownItems"
        :key="index"
        :table="akk.tabel"
        :login="akk.login"
        :img="'ava.png'"
        :is-active="isAnyActive"
        @set-active="setActive(dropdownItems.indexOf(akk))"
      />
    </transition-group>
  </div>
  <div class="nav-circle flex-line">
    <div class="circle circle__blue"></div>
    <div class="circle circle__grey" @click="$emit('newAkk')"></div>
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.akk-block {
  height: 355px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.cross {
  position: relative;

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

.title {
  margin-top: 23px;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  text-align: center;
  color: white;
}

.hello {
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  color: white;
}

.flex-line__hello {
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
