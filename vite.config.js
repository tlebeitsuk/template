import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': `${path.resolve(__dirname, './src')}`,
        },
    },
    plugins: [
        Vue(),

        // https://github.com/hannoeru/vite-plugin-pages
        Pages(),

        // https://github.com/antfu/vite-plugin-icons
        Icons({
            autoInstall: true,
        }),

        // https://github.com/antfu/unocss
        Unocss({
            shortcuts: [
                ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
                ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
            ],
            presets: [
                presetUno(),
                presetAttributify(),
                presetIcons({
                    scale: 1.2,
                }),
            ],
        }),

        // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
        vueI18n({
            include: [path.resolve(__dirname, './src/locales/**')],
        }),
    ],
    server: {
        fs: {
            strict: true,
        },
    }
})