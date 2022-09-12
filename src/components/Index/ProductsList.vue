<template>
    <div class="products__list">
        <div class="products__item" v-for="product in products" :key="product.id">
            <h2 class="products__item__title__h2">{{product.title}} <span>{{product.span}}</span></h2>

            <ul class="products__list__menu" v-if="product.menus">
                <li v-for="(menu,index) in product.menus" :key="index">
                    <span :style="{backgroundColor:product.link_1Color}"></span>
                    <h3 class="products__title__h3">{{menu.title}}</h3>
                </li>
            </ul>

            <div class="products__links">
                <a class="products__links__link" :style="{backgroundColor:product.link_1Color}" :href="product.link_1">{{product.link_1text}}</a>
                <a class="products__links__link" :style="{backgroundColor:product.link_2Color}" :href="product.link_2">{{product.link_2text}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['products'],
}
</script>