<script>
export default {

}
</script>

<template>
    <footer class="footer">
        <div class="container footer__container">
            <router-link to="/">
                <img :src="$getImage('footer-logo.svg')" alt="">
            </router-link>
            <p>
                ИП Ротарь Леонид Юрьевич <br>
                ИНН 110405006401 <br>
                ОГРН 324110000000930
            </p>
            <ul>
                <li>marketing@marketprod.ru</li>
                <li>Политика конфиденциальности</li>
                <li>Пользовательское соглашение</li>
            </ul>
            <p>
                MARKETPROD © 2024 <br>
                Все права защищены
            </p>
        </div>
    </footer>
</template>