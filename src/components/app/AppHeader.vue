
<template>
    <header>
        <h1>{{ title }}</h1> <AppMenu /> <NuxtLink to="/login">{{ $t('logout') }}</NuxtLink>
        {{ themeStore.themeName }}
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()
const title = ref('MietexVueStarter');

</script>

<style scoped>
header {
    background-color: #f8f9fa;
    padding: 1rem;
    text-align: center;
}

h1 {
    margin: 0;
    font-size: 1.5rem;
    color: #343a40;
}
</style>