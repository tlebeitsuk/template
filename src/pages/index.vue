<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useCounterStore } from '@/stores/counter'

const name = ref('')
const router = useRouter()
const go = () => {
    if (name.value)
        router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const counter = useCounterStore()

const { t } = useI18n()
</script>

<template>
    <div>
        <div i-carbon-campsite text-4xl inline-block />
        <p>
            <em text-sm op75>{{ t('intro.desc') }}</em>
        </p>

        <div py-4 />

        <input
            id="input"
            v-model="name"
            :placeholder="t('intro.whats-your-name')"
            type="text"
            autocomplete="false"
            p="x-4 y-2"
            w="250px"
            text="center"
            bg="transparent"
            border="~ rounded gray-200 dark:gray-700"
            outline="none active:none"
            @keydown.enter="go"
        />

        <div>
            <button class="m-3 text-sm btn" :disabled="!name" @click="go">{{ t('button.go') }}</button>
        </div>

        <div py-4 />

        <button class="m-3 text-sm btn" @click="counter.increment()">+</button>

        <p>{{ counter.count }}</p>

        <button class="m-3 text-sm btn" @click="counter.count--">-</button>
    </div>
</template>