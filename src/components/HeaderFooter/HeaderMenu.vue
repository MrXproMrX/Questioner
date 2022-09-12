<template>
    <ul class="header__menu__list">
        <li v-for="(menu,index) in menus" :key="index">
           <a class="header__menu__link" :href="menu.link">{{menu.text}} <span><i class="fa-solid fa-angle-down"></i></span></a>

            <ul v-if="menu.menuNone" class="header__menu__none">
                <li v-for="none in menu.menuNone" :key="none.id">
                    <a class="header__none__link" :href="none.link">{{none.text}}</a>
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