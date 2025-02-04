<template>
    <Button label="Login" @click="navigateToIndex"></Button>
</template>

<script setup>
import { useRouter } from 'vue-router';

definePageMeta({
  layout: 'logout'
})

const router = useRouter();

function navigateToIndex() {
    router.push('/');
}
</script>
