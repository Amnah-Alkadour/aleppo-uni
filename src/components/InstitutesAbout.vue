<template>
  <div
    class="text-white hover:bg-[#244c74] focus:text-[rgb(66,121,129)] font-Sakkal Majalla"
  >
    <!-- Navigation bar containing dropdowns -->
    <!-- الكليات Dropdown as grid in navbar -->
    <div class="relative flex flex-col items-center" ref="collegesDropdown">
      <span class="text-xl cursor-pointer" @click="toggleDropdown">
        المعاهد
      </span>

      <div
        v-if="isDropdownOpen && !isSmallScreen"
        class="absolute greed bg-gradient-to-r from-[rgba(5,93,148,0.9)] to-[rgba(24,55,79,0.9)] text-white p-4 rounded-b-[40px] rounded-tl-[60px] shadow-lg w-full md:w-auto grid lg:grid-cols-3 gap-10 z-10 top-14 mt-1"
      >
        <!-- قائمة المعاهد -->
        <div
          class="institute-column p-2 rounded-lg text-[2px] w-full md:w-[250px]"
        >
          <div class="font-bold text-xl mb-4 text-white">المعاهد</div>
          <ul class="pl-0 list-none">
            <li
              v-for="institute in institutes"
              :key="institute.id"
              class="p-2 rounded-md mb-2 transition-colors duration-200 hover:bg-[#22409b]"
            >
              {{ institute.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      colleges: [
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
      ],
    };
  },
  computed: {
    // استخراج المعاهد فقط
    institutes() {
      return this.colleges.filter(
        (item) => item.part_type_name && item.part_type_name.trim() === "معهد"
      );
    },
  },

  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>
<style scoped>
.top-10 {
  top: 2.5rem; /* Adjust the dropdown position */
}

/* Additional responsiveness for larger screens */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(4, 1fr); /* شبكة بأربع أعمدة */
  }
  .greed {
    top: 4.5rem;
    gap: 0.5rem;
    font-weight: 500;
  }
}
</style>
