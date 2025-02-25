<script setup lang="ts">
import TheWhite from '@/components/TheWhite.vue';
import TheBlue from '../components/TheBlue.vue';
import { useAuthStore } from '../stores/auth';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

const { token } = storeToRefs(useAuthStore());

const isNewAkk = ref(true);

const isReg = computed(() => token.value && isNewAkk.value ? false : true)
</script>

<template>
  <div>
    <TheWhite v-if="isReg" @newAkk="isNewAkk = true" />
    <TheBlue v-else @newAkk="isNewAkk = false" />
  </div>
</template>

<style scoped lang="scss"></style>
