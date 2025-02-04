<template>
    <div class="container mx-auto">
            <h1 class="text-3xl font-bold mb-4">Mietex Vue Starter</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                    <template #title>About Project</template>
                    <template #content>
                        <p>A modern Vue.js starter template using:</p>
                        <ul>
                            <li>Vue 3 with Composition API</li>
                            <li>PrimeVue UI Components</li>
                            <li>Tailwind CSS for styling</li>
                            <li>Vite as build tool</li>
                        </ul>
                    </template>
                </Card>
                
                <Card>
                    <template #title>Getting Started</template>
                    <template #content>
                        <Steps :model="steps" />
                        <Divider />
                        <Message severity="info">Clone repository and run pnpm install to begin</Message>
                    </template>
                </Card>
            </div>
        </div>
</template>