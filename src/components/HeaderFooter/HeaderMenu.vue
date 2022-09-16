<template>
    <ul class="header__menu__list">
        <li v-for="(menu,index) in menus" :key="index">
           <router-link class="header__menu__link" :to="menu.link">{{menu.text}} <span><i class="fa-solid fa-angle-down"></i></span></router-link>

            <ul v-if="menu.menuNone" class="header__menu__none">
                <li v-for="none in menu.menuNone" :key="none.id">
                    <router-link class="header__none__link" :to="none.link">{{none.text}}</router-link>
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