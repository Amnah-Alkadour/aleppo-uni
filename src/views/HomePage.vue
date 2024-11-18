<template>
  <div id="carouselCaptions" class="relative w-full overflow-hidden mb-5">
    <div
      class="flex transition-transform duration-700 ease-in-out w-full h-full md:h-screen"
      :style="`transform: translateX(-${activeIndex * 100}%)`"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex-shrink-0 relative w-full h-full md:h-screen"
      >
        <img
          :src="item.image"
          :alt="item.alt"
          class="object-cover filter brightness-50 w-full h-full md:w-full"
        />
        <a
          :href="item.link"
          class="absolute inset-0 flex items-center justify-center text-white bg-gray-900 bg-opacity-50 p-4 rounded-lg"
        >
          <h1
            class="text-lg md:text-5xl font-bold text-center bg-gray-400 bg-opacity-50 p-2"
          >
            {{ item.title }}
          </h1>
        </a>
      </div>
    </div>

    <button
      class="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 rounded-full p-2"
      @click="prevSlide"
    >
      &#10094;
    </button>
    <button
      class="absolute top-1/2 right-8 transform -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 rounded-full p-2"
      @click="nextSlide"
    >
      &#10095;
    </button>

    <ol
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'w-3 h-3 rounded-full cursor-pointer transition-colors duration-300',
          index === activeIndex ? 'bg-blue-500' : 'bg-gray-300',
        ]"
        @click="activeIndex = index"
      ></li>
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const activeIndex = ref(0);
const items = [
  {
    image: require("@/assets/images/5.png"),
    alt: "إعلان مسابقة تعيين أعضاء هيئة تدريسية في جامعة إدلب",
    title: "إعلان مسابقة تعيين أعضاء هيئة تدريسية في جامعة إدلب",
    link: "/news",
  },
  {
    image: require("@/assets/images/6.jpg"),
    alt: "إعلان مفاضلة التعليم في جامعة إدلب للعام الدراسي 2024/2025",
    title: "إعلان مفاضلة التعليم في جامعة إدلب للعام الدراسي 2024/2025",
    link: "/news",
  },
  {
    image: require("@/assets/images/3.png"),
    alt: "قرار العقوبات للعام الدراسي 2024/2025",
    title: "قرار العقوبات للعام الدراسي 2024/2025",
    link: "/news",
  },
];

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % items.length;
};

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + items.length) % items.length;
};

const startCarousel = () => {
  setInterval(() => {
    nextSlide();
  }, 3000);
};

onMounted(() => {
  startCarousel();
});
</script>
