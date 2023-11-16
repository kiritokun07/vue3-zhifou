import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
        },
        extensions: ['.js', '.json', '.ts']
    },
    server: {
        open: false,
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8100',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
