<template>
    <div class="our_constructor__cartList">
        <div class="our_constructor__list">
            <div class="our_constructor__item" v-for="(constructor,index) in constructors" :key="index">
                <label :for="constructor.price + constructor.title.length">
                    <div class="our_constructor__cart">
                        <h2 class="our_constructor__title__h2">{{constructor.title}}</h2>
                        <input type="radio" checked  name="mrx"  :id="constructor.price + constructor.title.length" :value="constructor.price">
                    </div>
                    <h3 class="our_constructor__title__price">{{constructor.price}}</h3>

                    <ul v-if="constructor.month" class="our_constructor__month">
                        <li v-for="(months,index) in constructor.month" :key="months.title + index">
                        <button class="our_constructor__button">{{months.title}}</button>
                        </li>
                    </ul>

                    <ul v-if="constructor.menus" class="our_constructor__menu">
                        <li v-for="(menu,index) in constructor.menus" :key="menu.title.length * index">
                            <h4 class="our_constructor__title__h4">{{menu.title}}</h4>
                        </li>
                    </ul>
                </label>
            </div>
        </div>

        <a href="#!" class="our_constructor__link">Выбрать тариф</a>

    </div>
</template>


<script>
export default {
    props:['constructors'],
}
</script>