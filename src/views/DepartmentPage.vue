<template>
  <div class="container mx-auto p-4">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="bg-white shadow-lg rounded-lg p-4"
      >
        <!-- <h3 class="text-lg font-semibold text-gray-800">{{ item.id }}</h3> -->
        <p class="text-sm text-gray-600 mt-2">
          <router-link to="/">{{ item.name }}</router-link>
        </p>
        <!-- <p class="text-sm text-gray-600 mt-2">{{ item.father_id }}</p>
        <p class="text-sm text-gray-600 mt-2">{{ item.level }}</p>
        <p class="text-sm text-gray-600 mt-2">{{ item.part_type_id }}</p>
        <p class="text-sm text-gray-600 mt-2">{{ item.part_type_name }}</p>
        <p class="text-sm text-gray-600 mt-2">{{ item.part_code }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("http://192.168.123.252:8500/getAllPart/415") // استبدل برابط API الخاص بك
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    },
  },
};
</script>

<style scoped>
/* يمكنك إضافة بعض التنسيقات الخاصة بك هنا إذا لزم الأمر */
</style>
