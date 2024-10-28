<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { ref, onMounted } from "vue";

export default {
  components: {
    Header,
    Footer,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const tarifSwp = ref(null);

    const onSwiper = (swiperInstance) => {
      tarifSwp.value = swiperInstance;
    };

    const goToFirstSlide = (idx) => {
      if (tarifSwp._value.slideTo(idx)) {
        tarifSwp._value.slideTo(idx)
      }
    }

    return {
      tarifSwp,
      onSwiper,
      goToFirstSlide,
      modules: [Pagination],
    };
  },
  data () {
    return {
      tarif: 1,
      accordion: [false, false, false, false, false],
    }
  },
  methods: {
    accordionBodyToggle(ref, idx) {
      ref.style.maxHeight = ref.style.maxHeight ? null : ref.scrollHeight + 'px';
      this.accordion[idx] = !this.accordion[idx]
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
      let btn1 = this.$refs.btn1.getBoundingClientRect().top;
      let btn2 = this.$refs.btn2.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;
      let condition1 = btn1 - windowHeight + 56;
      let condition2 = btn2 - windowHeight + 56;
      if (condition1 <= 0 && condition2 >= 0) {
        this.$refs.btn1.classList.add('hide');
        this.$refs.btn.classList.add('active');
        this.$refs.btn2.classList.add('hide');
      } else {
        this.$refs.btn1.classList.remove('hide');
        this.$refs.btn.classList.remove('active');
        this.$refs.btn2.classList.remove('hide');
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
}
</script>

<template>
  <div class="wrapper">

    <Header />
    
    <main>

      <!-- Home -->
      <section class="home">
        <div class="container home__container">
          <h2 class="sec-title home__title">Сервис <span>аналитики</span> <br> <span>и учета финансов</span> <br> для селлеров Wildberries</h2>
          <p class="home__description">Отслеживай свою прибыль <br> и получай рекомендации, <br> которые помогут ее увеличить</p>
          <a href="#" class="btn-gradient">
            <img :src="$getImage('fire.svg')" alt="">
            <span>Попробовать бесплатно</span>
          </a>
          <img :src="$getImage('home-card.png')" alt="" class="home__card">
        </div>
      </section>
      <!-- Home end -->

      <!-- Effective toos -->
      <section class="effective-tools">
        <div class="container">
          <h2 class="sec-title effective-tools__title">У нас есть эффективные инструменты для решения важных задач</h2>
          <ul>
            <li>
              <img :src="$getImage('check.svg')" alt="">
              <p>Отслеживай свою прогнозную прибыль ежедневно и меняй стратегию максимально эффективно</p>
            </li>
            <li>
              <img :src="$getImage('check.svg')" alt="">
              <p>Следуй рекомендациям по отгрузке товара на склады, чтобы не упали продажи</p>
            </li>
            <li>
              <img :src="$getImage('check.svg')" alt="">
              <p>Узнай свою чистую прибыль за месяц <br> в несколько кликов</p>
            </li>
            <li>
              <img :src="$getImage('check.svg')" alt="">
              <p>Получай уведомление о найденных поставках с нужным коэффициентом</p>
            </li>
            <li>
              <img :src="$getImage('check.svg')" alt="">
              <p>Определяй выгодно ли тебе находится <br> в акции или рекламе</p>
            </li>
            <li>
              <img :src="$getImage('check.svg')" alt="">
              <p>Следи за позициями своих товаров <br> в поисковых запросах</p>
            </li>
          </ul>
          <a href="#" class="btn-gradient" ref="btn1">
            <img :src="$getImage('fire.svg')" alt="">
            <span>Попробовать бесплатно</span>
          </a>
        </div>
      </section>
      <a href="#" class="btn-gradient fixed-btn" ref="btn">
        <img :src="$getImage('fire.svg')" alt="">
        <span>Попробовать бесплатно</span>
      </a>
      <!-- Effective toos end -->

      <!-- Tools -->
      <section class="tools">
        <div class="container tools__container">
          <h2 class="sec-title tools__title">Инструменты</h2>
          <ul class="tools__accordion_wrap">
            <li class="tools__accordion">
              <div 
                @click="accordionBodyToggle($refs.accBody0, 0)"
                class="accordion__head" 
                :class="{'active': accordion[0]}"
              >
                <h3>Прогнозная прибыль за день</h3>
                <img :src="$getImage('arrow-down.svg')" alt="">
              </div>
              <div 
                ref="accBody0"
                class="accordion__body"
              >
                <div class="accordion__content content-1">
                  <h4>Прогнозная прибыль <span>самый важный показатель как идут у вас продажи</span></h4>
                  <p>Помогает определить:</p>
                  <ul>
                    <li>Продажи идут в минус или плюс</li>
                    <li>Выгодно ли нахождение в акции или лучше выйти</li>
                    <li>Поднятие рекламной ставки увеличило прибыль или уменьшило</li>
                  </ul>
                  <h4><span>Ежедневный контроль прогнозной прибыли</span> - ключ к успеху вашего бизнеса</h4>
                </div>
              </div>
            </li>
            <li class="tools__accordion">
              <div 
                @click="accordionBodyToggle($refs.accBody1, 1)"
                class="accordion__head" 
                :class="{'active': accordion[1]}"
              >
                <h3>Рекомендации по отгрузке <br>на склады</h3>
                <img :src="$getImage('arrow-down.svg')" alt="">
              </div>
              <div 
                ref="accBody1"
                class="accordion__body"
              >
                <div class="accordion__content content-2">
                  <p>Продавцы теряют прибыль, а карточки падают в позициях из-за несвоевременных поставок товара.</p>
                  <h4><span>MARKETPROD заранее уведомит тебя куда и сколько нужно отгрузить товара,</span> чтобы не было простоя и не потерять позиции</h4>
                  <ul>
                    <li>регулируй на сколько дней продаж должно хватать товара на складах</li>
                    <li>пополняй вовремя на склады</li>
                    <li>не упускай прибыль и удерживай позиции карточек</li>
                    <li>передавай данные к отгрузке сразу фулфилменту</li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="tools__accordion">
              <div 
                @click="accordionBodyToggle($refs.accBody2, 2)"
                class="accordion__head" 
                :class="{'active': accordion[2]}"
              >
                <h3>Прибыль за периоды</h3>
                <img :src="$getImage('arrow-down.svg')" alt="">
              </div>
              <div 
                ref="accBody2"
                class="accordion__body"
              >
                <div class="accordion__content content-3">
                  <p>Большинство продавцов не знают или не правильно считают свою прибыль. </p>
                  <h4><span>MARKETPROD высчитывает чистую прибыль автоматически, она уже отображена с учетом всех расходов:</span> налоги, себестоимость вашего товара, комиссии марткеплейса и прочих расходов. Все просто и понятно.</h4>
                  <ul>
                    <li>узнайте точную чистую прибыль</li>
                    <li>понимайте расходы на маркетплейсе (штрафы, приемка, комиссия, хранение и тд)</li>
                    <li>учитывайте ваши личные расходы (налоги, фулфилмент, зп сотрудников и прочие расходы)</li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="tools__accordion">
              <div 
                @click="accordionBodyToggle($refs.accBody3, 3)"
                class="accordion__head" 
                :class="{'active': accordion[3]}"
              >
                <h3>Автопоиск поставок</h3>
                <img :src="$getImage('arrow-down.svg')" alt="">
              </div>
              <div 
                ref="accBody3"
                class="accordion__body"
              >
                <div class="accordion__content content-4">
                  <p>Экономь деньги на поставках.</p>
                  <h4>MARKETPROD найдет за тебя бесплатную или c нужным коэффициентом поставку и уведомит в телеграме</h4>
                  <ul>
                    <li>экономь деньги на поставках</li>
                    <li>ищи бесплатные или c низким коэффициентом поставки</li>
                    <li>получай уведомления в телеграме</li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="tools__accordion">
              <div 
                @click="accordionBodyToggle($refs.accBody4, 4)"
                class="accordion__head" 
                :class="{'active': accordion[4]}"
              >
                <h3>Отслеживание позиций <br> по запросам</h3>
                <img :src="$getImage('arrow-down.svg')" alt="">
              </div>
              <div 
                ref="accBody4"
                class="accordion__body"
              >
                <div class="accordion__content content-5">
                  <ul>
                    <li>Следи на каком месте в запросах твои карточки. Это поможет тебе для продвижения</li>
                    <li>Отслеживай, на каких местах находятся твои карточки в запросах</li>
                    <li>Следи за динамикой изменений</li>
                  </ul>
                  <img :src="$getImage('tools-card.png')" alt="">
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <!-- Tools end -->

      <!-- Tarif -->
      <section class="tarif">
        <div class="container tarif__container">
          <h2 class="sec-title tarif__title">Тарифы</h2>
          <ul class="tarif__type" :class="`active-${tarif}`">
            <li 
              @click="goToFirstSlide(0)"
              :class="{
                'active': tarif == 1
              }"
            >Бесплатно</li>
            <li 
              @click="goToFirstSlide(1)"
              :class="{
                'active': tarif == 2
              }"
            >Базовый</li>
            <li 
              @click="goToFirstSlide(2)"
              :class="{
                'active': tarif == 3
              }"
            >Расширенный</li>
          </ul>
          <div class="tarif__discount">
            <h3>Срок подписки</h3>
            <div class="line">
              <span :class="`active-${tarif}`"></span>
            </div>
            <ul>
              <li>
                1 мес
              </li>
              <li>
                3 мес <span>-10%</span>
              </li>
              <li>
                6 мес <span>-20%</span>
              </li>
              <li>
                12 мес <span>-30%</span>
              </li>
            </ul>
          </div>
          <swiper
            slidesPerView="auto"
            :spaceBetween="10"
            :initial-slide="1"
            :speed="500"
            :centeredSlides="true"
            @slideChange="(swiper) => {
              tarif = swiper.realIndex + 1;
            }"
            class="tarif__swp"
            @swiper="onSwiper"
          >
            <swiper-slide class="tarif__card">
              <div class="line"></div>
              <h4 class="title">Бесплатно</h4>
              <p class="subtitle">Телеграм-бот MARKETPROD</p>
              <h3 class="price">0 ₽</h3>
              <div class="status">Что включено:</div>
              <div class="networks">
                <a href="#">
                  <img :src="$getImage('wb.svg')" alt="">
                  <span>1 кабинет </span>
                </a>
                <a href="#">
                  <img :src="$getImage('tg-blue.svg')" alt="">
                  <span>Телеграм-бот</span>
                </a>
              </div>
              <button class="btn">Выбрать тариф</button>
              <ul>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Прогнозная прибыль <br>от продаж за день</p>
                </li>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Сводка о вчерашних продажах</p>
                </li>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Поиск и уведомления <br>о найденных поставках</p>
                </li>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Оповещения о низком балансе <br>на рекламе</p>
                </li>
              </ul>
            </swiper-slide>
            <swiper-slide class="tarif__card">
              <div class="line bg-violet"></div>
              <h4 class="title">Базовый</h4>
              <p class="subtitle">Доступны все инструменты</p>
              <h3 class="price">990 ₽/месяц</h3>
              <div class="status">Что включено:</div>
              <div class="networks">
                <a href="#">
                  <img :src="$getImage('wb.svg')" alt="">
                  <span>1 кабинет </span>
                </a>
                <a href="#">
                  <img :src="$getImage('tg-blue.svg')" alt="">
                  <span>Телеграм-бот</span>
                </a>
              </div>
              <button class="btn">Выбрать тариф</button>
              <ul>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Прогнозная прибыль <br>от продаж за день</p>
                </li>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Рекомендации по отгрузке товаров на склады</p>
                </li>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Расчет прибыли за периоды</p>
                </li>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Детальная сводка о продажах</p>
                </li>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Отслеживание позиций карточек по запросам</p>
                </li>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Поиск и уведомления <br>о найденных поставках</p>
                </li>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Оповещения о низком балансе <br>на рекламе</p>
                </li>
              </ul>
            </swiper-slide>
            <swiper-slide class="tarif__card">
              <div class="line bg-gradient"></div>
              <h4 class="title">Расширенный</h4>
              <p class="subtitle">Доступны все инструменты <span>+ 7 кабинетов</span></p>
              <h3 class="price">4950 ₽/месяц</h3>
              <div class="status">Что включено:</div>
              <div class="networks">
                <a href="#">
                  <img :src="$getImage('wb.svg')" alt="">
                  <span>1 кабинет </span>
                </a>
                <a href="#">
                  <img :src="$getImage('tg-blue.svg')" alt="">
                  <span>Телеграм-бот</span>
                </a>
              </div>
              <button class="btn">Выбрать тариф</button>
              <ul>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Прогнозная прибыль <br>от продаж за день</p>
                </li>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Рекомендации по отгрузке товаров на склады</p>
                </li>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Расчет прибыли за периоды</p>
                </li>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Детальная сводка о продажах</p>
                </li>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Отслеживание позиций карточек по запросам</p>
                </li>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Поиск и уведомления о найденных поставках</p>
                </li>
                <li>
                  <img :src="$getImage('check-icon-2.svg')" alt="">
                  <p>Оповещения о низком балансе <br>на рекламе</p>
                </li>
              </ul>
            </swiper-slide>
          </swiper>
        </div>
      </section>
      <!-- Tarif end -->

      <!-- Selection -->
      <section class="selection">
        <div class="container selection__container">
          <h2 class="sec-title selection__title">Почему селлеры <br> нас выбирают</h2>
          <ul class="selection__card">
            <li class="selection__card_item">
              <h3>
                <img :src="$getImage('selection-icon-1.svg')" alt="">
                <span>Адекватная стоимость</span>
              </h3>
              <p>На рынке много сервисов аналитики <br>с завышенными ценами на услуги. <br><span>Мы сделали упор на доступность</span> </p>
            </li>
            <li class="selection__card_item">
              <h3>
                <img :src="$getImage('selection-icon-2.svg')" alt="">
                <span>Не сухая аналитика, а польза <br> и рекомендации</span>
              </h3>
              <p>Мы сами селлеры и понимаем, какие данные нужны для увеличения продаж. Поэтому <span>мы не даем «сухие цифры»,</span>  <br>а отображаем полезную информацию и рекомендации</p>
            </li>
            <li class="selection__card_item">
              <h3>
                <img :src="$getImage('selection-icon-3.svg')" alt="">
                <span>Всё просто и понятно</span>
              </h3>
              <p><span>Простой и понятный сервис, который поймет каждый.</span> Если что-то будет непонятно, наша служба поддержки заботливо поможет вам</p>
            </li>
            <li class="selection__card_item">
              <h3>
                <img :src="$getImage('selection-icon-4.svg')" alt="">
                <span>Экономия расходов <br>и увеличение прибыли</span>
              </h3>
              <p>Топ важных инструментов — <span>«прогнозная прибыль за день»</span> и <span>«рекомендации по отгрузке товара»</span>. Понимая эти два показателя, вы уже сэкономите средства и увеличите прибыль</p>
            </li>
          </ul>
        </div>
      </section>
      <!-- Selection end -->

      <!-- Reviews -->
      <section class="review">
        <div class="container review__container">
          <h2 class="sec-title review__title">Отзывы селлеров</h2>
          <swiper
            slidesPerView="auto"
            :spaceBetween="10"
            :pagination="{
              type: 'progressbar',
              clickable: true,
            }"
            :modules="modules"
            class="review__swp"
          >
            <swiper-slide v-for="i in 3" :key="i">
              <div class="review__card">
                <div class="review__card_head">
                  <img :src="$getImage('review-user.png')" alt="" class="user-logo">
                  <div>
                    <h4>Абдурахман Замоскворецкий</h4>
                    <h5>
                      <img :src="$getImage('tg.svg')" alt="">
                      <span>@abdurahman</span>
                    </h5>
                  </div>
                </div>
                <h3>Увеличил оборот на 3 000 000 рублей</h3>
                <p>Торгую на ОЗОН в категории «Автотовары». Первоначально мне сложно было определить объем ниши и выбрать товары для продажи. Смотрел видеоуроки на YouTube, потом понял, что эффективнее будет смотреть аналитику и изучать продажи...</p>
                <div class="name">Angelina</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </section>
      <!-- Reviews end -->

      <!-- Give try -->
      <section class="give-try">
        <div class="container give-try__container">
          <h2 class="sec-title give-try__title">Перед тем как покупать протестируйте сервис бесплатно</h2>
          <p class="give-try__description">У вас откроется доступ ко всем инструментам на 3 дня</p>
          <a href="#" class="btn-gradient hide" ref="btn2">
            <img :src="$getImage('fire.svg')" alt="">
            <span>Попробовать бесплатно</span>
          </a>
          <img :src="$getImage('give-try-card.png')" alt="" class="give-try__card">
        </div>
      </section>
      <!-- Give try end -->

    </main>

    <Footer />

  </div>
</template>