<template>
    <div class="app-menu">
        <ul>
            <li v-for="item in menuItems" :key="item.id">
                <a :href="item.link">{{ item.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const menuItems = ref([
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'List', link: '/list' },
    { id: 3, name: 'Form', link: '/form' }
]);
</script>

<style scoped>
.app-menu {
    background-color: #f8f9fa;
    padding: 10px;
}

.app-menu ul {
    list-style-type: none;
    padding: 0;
}

.app-menu li {
    margin: 5px 0;
}

.app-menu a {
    text-decoration: none;
    color: #007bff;
}

.app-menu a:hover {
    text-decoration: underline;
}
</style>
