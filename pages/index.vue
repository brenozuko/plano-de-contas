<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide  v-for="foto in foto_album" :key="foto.url">
        <!-- <div
          class="border-foto"
          :style="`background-image: url(${foto.url})`"
        ></div> -->
        <img class="mx-auto" :src="foto.url" alt="image">
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>


<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import fotos from "../static/json/fotos.json";
import "swiper/css/swiper.css";

export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      foto_album: fotos,
    };
  },
};
</script>


<style lang="scss">
.swiper-button-prev,
.swiper-button-next {
  &::after {
    color: white;
  }
}

.swiper-pagination-bullet {
  width: 17px;
  height: 17px;
  @apply bg-transparent border border-white opacity-100;
}

.swiper-pagination-bullet-active {
  @apply bg-white;
}

.swiper{
  justify-content: center;
}

body {
  background-color: black;
}
.border-foto {
  width: 315px;
  height: 300px;
  @apply bg-cover mx-auto bg-no-repeat my-16;
}

@media (min-width: 768px) {
  .border-foto {
    width: 700px;
    height: 600px;
  }
}
</style>
