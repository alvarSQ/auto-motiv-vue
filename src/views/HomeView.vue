<script setup lang="ts">
import TheWhite from '@/components/TheWhite.vue';
import TheBlue from '../components/TheBlue.vue';


</script>

<template>
    <div>
        <TheWhite v-if="1" />
        <TheBlue v-else />
    </div>
</template>

<style scoped lang="scss">

</style>