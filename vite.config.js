import { defineConfig } from 'vite';
import {resolve} from 'path'

const noAttrCSS = () => {
    return {
        name: "no-attribute",
        transformIndexHtml(html) {
            return html.replace(`rel="stylesheet" crossorigin`, "rel=\"stylesheet\"");
        }
    }
}
const noAttrJS = () => {
    return {
        name: "no-attribute",
        transformIndexHtml(html) {
            return html.replace(`type="module" crossorigin`, "type=\"module\"");
        }
    }
}

export default defineConfig({
    base: './',
    plugins: [noAttrCSS(), noAttrJS()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./assets/styles/global.scss";` // Исправленный путь
            },
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                news: resolve(__dirname, 'news.html'),
                news_item: resolve(__dirname, 'news-item.html'),
                restaurants: resolve(__dirname, 'restaurants.html'),
                restaurant: resolve(__dirname, 'restaurant.html'),
                brands: resolve(__dirname, 'brands.html'),
                brand: resolve(__dirname, 'brand.html'),
                about: resolve(__dirname, 'about.html'),
                park: resolve(__dirname, 'park.html'),
                profile: resolve(__dirname, 'profile.html'),
                login: resolve(__dirname, 'login.html'),
                register: resolve(__dirname, 'register.html'),
                admin: resolve(__dirname, 'admin.html'),

            }
        }
    }

});
