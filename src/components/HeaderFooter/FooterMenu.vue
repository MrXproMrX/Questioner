<template>
    <ul class="footer__menu__list">
        <li v-for="(menu,index) in menus" :key="index">
           <router-link class="footer__menu__link" :to="menu.link">{{menu.text}}</router-link>

            <ul v-if="menu.menuNone" class="footer__menu__none">
                <li v-for="none in menu.menuNone" :key="none.id">
                    <router-link class="footer__none__link" :to="none.link">{{none.text}}</router-link>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    props:['menus']
}
</script>