<template>
    <ul class="footer__menu__list">
        <li v-for="(menu,index) in menus" :key="index">
           <a class="footer__menu__link" :href="menu.link">{{menu.text}}</a>

            <ul v-if="menu.menuNone" class="footer__menu__none">
                <li v-for="none in menu.menuNone" :key="none.id">
                    <a class="footer__none__link" :href="none.link">{{none.text}}</a>
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