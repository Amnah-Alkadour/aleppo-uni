<template>
  <nav
    class="navbar bg-gradient-to-t from-[#244c74] to-[rgb(43,146,162)] text-[#eee] text-2xl"
  >
    <div class="">
      <div
        class="flex justify-between items-center space-x-6 mr-1 ml-auto text-center"
      >
        <div class="flex items-center space-x-6">
          <!-- هنا استخدمنا flex لتوزيع المحتويات بشكل أفقي -->
          <img
            src="@/assets/images/2.jpg/"
            class="h-25 rounded-full"
            width="30%"
            alt="logo"
          />
          <div class="flex flex-col pr-1">
            <!-- Arabic Text -->
            <h1 class="text-14 font-el-messiri text-white">
              جامعة حلب الشهباء
            </h1>
            <h2 class="text-sm font-el-messiri text-white">
              Al-Shahbaa Aleppo University
            </h2>
          </div>
        </div>
        <!-- تظهر التبويبات وزر البحث فقط إذا كانت القائمة المنسدلة مغلقة -->
        <div
          v-if="!isMenuOpen && isDesktop"
          class="nave-item flex justify-between ml-auto items-center font-bold text-xl space-x-6"
        >
          <router-link to="/" class="text-gray-300 hover:text-white"
            >الرئيسية</router-link
          >

          <router-link to="/about" class="text-gray-300 hover:text-white"
            >عن الجامعة</router-link
          >
          <!-- <router-link to="/aboutWe" class="text-gray-300 hover:text-white"
            >الكليات والمعاهد</router-link
          > -->

          <CollegeAbout />

          <!-- <router-link to="/system" class="text-gray-300 hover:text-white"
            > المعاهد</router-link
          > -->
          <InstitutesAbout />
          <!-- <router-link
            to="/e-Portal"
            class="text-gray-300 hover:text-white border-gray-600 rounded-1"
            >تسجيل دخول</router-link
          > -->

          <div class="ml-0 flex justify-between space-x-10">
            <button class="flex items-left text-white rounded-md p-2">
              <i class="fas fa-search ml-1 hover:text-gray-600"></i>
            </button>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="ابحث..."
              class="border rounded-md p-1 items-left text-center focus:outline-none focus:ring-2 focus:ring-[#20476b]"
            />
          </div>
        </div>
      </div>

      <button
        @click="toggleMenu"
        class="md:hidden text-gray-300 focus:outline-none hover:text-[#0e1c16]"
      >
        <svg
          class="w-6 h-6 items-end"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <!-- القائمة المنسدلة -->
      <div v-if="isMenuOpen" class="md:hidden">
        <div class="flex flex-col space-y-2 p-4">
          <router-link to="/" class="text-gray-300 hover:text-white"
            >الرئيسية</router-link
          >
          <router-link to="/about" class="text-gray-300 hover:text-white"
            >عن الجامعة</router-link
          >
          <CollegeAbout />

          <router-link
            to="/e-Portal"
            class="text-gray-300 hover:text-white border-gray-600 rounded-1"
            >المعاهد</router-link
          >
          <div class="ml-4 flex justify-between">
            <button class="flex text-white rounded-md">
              <i class="fas fa-search hover:text-gray-600 mr-12 mt-2"></i>
            </button>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="ابحث..."
              class="border rounded-md p-1 ml-14 text-center focus:outline-none focus:ring-2 focus:ring-black-0"
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import CollegeAbout from "./CollegeAbout.vue";
import InstitutesAbout from "./InstitutesAbout.vue";
import { ref, onMounted } from "vue";

//const showDropdown = ref(false);
const categories = ref([]);
const institutes = ref([]);
const data = [
  {
    id: 415,
    name: "حلب الشهباء",
    father_id: 1,
    level: 2,
    part_type_id: 2,
    part_type_name: "جامعة",
    part_code: "",
  },
  {
    id: 417,
    name: "الآداب والعلوم الإنسانية",
    father_id: 415,
    level: 3,
    part_type_id: 3,
    part_type_name: "كلية",
    part_code: "",
  },
  {
    id: 418,
    name: "الاقتصاد و الإدارة",
    father_id: 415,
    level: 3,
    part_type_id: 3,
    part_type_name: "كلية",
    part_code: "",
  },
  {
    id: 419,
    name: "التربية",
    father_id: 415,
    level: 3,
    part_type_id: 3,
    part_type_name: "كلية",
    part_code: "",
  },
  {
    id: 420,
    name: "التقاني للعلوم المالية والإدارية",
    father_id: 415,
    level: 3,
    part_type_id: 4,
    part_type_name: "معهد",
    part_code: "",
  },
  {
    id: 422,
    name: "اللغة التركية",
    father_id: 415,
    level: 3,
    part_type_id: 4,
    part_type_name: "معهد",
    part_code: "",
  },
  {
    id: 447,
    name: "الشريعة",
    father_id: 415,
    level: 3,
    part_type_id: 3,
    part_type_name: "كلية",
    part_code: "",
  },
  {
    id: 449,
    name: "المعلوماتية و العلوم البرمجية",
    father_id: 415,
    level: 3,
    part_type_id: 4,
    part_type_name: "معهد",
    part_code: "",
  },
  {
    id: 457,
    name: "العلوم",
    father_id: 415,
    level: 3,
    part_type_id: 3,
    part_type_name: "كلية",
    part_code: "",
  },
  {
    id: 437,
    name: "اللغة التركية",
    father_id: 422,
    level: 4,
    part_type_id: 8,
    part_type_name: "قسم",
    part_code: "",
  },
  {
    id: 438,
    name: "التقاني للعلوم المالية والإدارية",
    father_id: 420,
    level: 4,
    part_type_id: 8,
    part_type_name: "قسم",
    part_code: "",
  },
  {
    id: 439,
    name: "الإدارة",
    father_id: 420,
    level: 4,
    part_type_id: 8,
    part_type_name: "قسم",
    part_code: "",
  },
  {
    id: 440,
    name: "الاقتصاد والإدارة",
    father_id: 418,
    level: 4,
    part_type_id: 5,
    part_type_name: "قسم",
    part_code: "",
  },
  {
    id: 441,
    name: "الإدارة",
    father_id: 418,
    level: 4,
    part_type_id: 5,
    part_type_name: "قسم",
    part_code: "",
  },
  {
    id: 442,
    name: "معلم صف",
    father_id: 419,
    level: 4,
    part_type_id: 5,
    part_type_name: "قسم",
    part_code: "",
  },
  {
    id: 443,
    name: "اللغة العربية",
    father_id: 417,
    level: 4,
    part_type_id: 5,
    part_type_name: "قسم",
    part_code: "",
  },
  {
    id: 444,
    name: "اللغة الإنكليزية",
    father_id: 417,
    level: 4,
    part_type_id: 5,
    part_type_name: "قسم",
    part_code: "",
  },
  {
    id: 448,
    name: "الشريعة",
    father_id: 447,
    level: 4,
    part_type_id: 5,
    part_type_name: "قسم",
    part_code: "",
  },
  {
    id: 450,
    name: "المعلوماتية والعلوم البرمجية",
    father_id: 449,
    level: 4,
    part_type_id: 8,
    part_type_name: "قسم",
    part_code: "",
  },
  {
    id: 458,
    name: "الرياضيات",
    father_id: 457,
    level: 4,
    part_type_id: 5,
    part_type_name: "قسم",
    part_code: "",
  },
  {
    id: 493,
    name: "المحاسبة",
    father_id: 418,
    level: 4,
    part_type_id: 5,
    part_type_name: "قسم",
    part_code: "",
  },
  {
    id: 495,
    name: "المحاسبة",
    father_id: 420,
    level: 4,
    part_type_id: 8,
    part_type_name: "قسم",
    part_code: "",
  },
];
// البيانات الأولية للكليات والمعاهد

// دالة لتصنيف الكليات حسب الفئة
function groupFaculties(faculties) {
  const grouped = [
    { name: "الكليات الهندسية", faculties: [] },
    { name: "الكليات الطبية", faculties: [] },
    { name: "الكليات العلمية", faculties: [] },
    { name: "الكليات الأدبية", faculties: [] },
  ];

  faculties.forEach((faculty) => {
    if (faculty.name.includes("هندسة")) {
      grouped[0].faculties.push({
        name: faculty.name,
        link: `/faculty/${faculty.id}`,
      });
    } else if (faculty.name.includes("طب")) {
      grouped[1].faculties.push({
        name: faculty.name,
        link: `/faculty/${faculty.id}`,
      });
    } else if (faculty.name.includes("علوم")) {
      grouped[2].faculties.push({
        name: faculty.name,
        link: `/faculty/${faculty.id}`,
      });
    } else {
      grouped[3].faculties.push({
        name: faculty.name,
        link: `/faculty/${faculty.id}`,
      });
    }
  });

  return grouped;
}

// دالة لتحميل البيانات
const loadData = async () => {
  const faculties = data.filter((item) => item.part_type_id === 3); // الكليات
  const groupedFaculties = groupFaculties(faculties);

  const institutesData = data.filter((item) => item.part_type_id === 4); // المعاهد

  categories.value = groupedFaculties;
  institutes.value = institutesData.map((institute) => ({
    name: institute.name,
    link: `/faculty/${institute.id}`,
  }));
};

// استدعاء البيانات عند تحميل المكون
onMounted(() => {
  loadData();
});

// التحكم في إظهار/إخفاء القائمة
// function toggleDropdown() {
//   showDropdown.value = !showDropdown.value;
// }

const isMenuOpen = ref(false);
const searchQuery = ref("");
const isDesktop = ref(window.innerWidth > 768);

// تحديد إذا كانت الشاشة كبيرة أو صغيرة
function handleResize() {
  isDesktop.value = window.innerWidth > 768;
}

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

// فتح/إغلاق القائمة الجانبية للهواتف
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
.navbar {
  position: fixed;
  padding: 1rem 4rem;
  /* background-color: #2b92a2; */
  box-shadow: 0px 1px 5px 3px #fff;
  position: relative;
  z-index: 10;
}
.nav-item {
  list-style-type: none;
  text-decoration-color: #fff;
}
.nave-item a {
  padding: 0rem 1rem;
}
</style>
