<template>
  <div class="text-white hover:text-black focus:text-black font-cairo">
    <!-- Navigation bar containing dropdowns -->
    <div
      class="flex flex-col md:flex-row relative justify-center items-center md:justify-start md:items-start"
      ref="dropdownContainer"
    >
      <!-- الكليات Dropdown as grid in navbar -->
      <div class="relative flex flex-col items-center" ref="collegesDropdown">
        <span class="text-lg cursor-pointer" @click="toggleDropdown">
          الكليات
        </span>

        <div
          v-if="isDropdownOpen"
          class="absolute flex bg-white text-black p-4 rounded-lg shadow-lg w-full md:w-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 z-10 top-10 mt-2"
        >
          <div
            v-for="college in filteredColleges"
            :key="college.id"
            class="college-column"
          >
            <div class="w-[25%] md:w-[50%] lg:w-[75%]">ff</div>
            <div class="w-[25%] md:w-[50%] lg:w-[75%]">ff</div>
            <div class="w-[25%] md:w-[50%] lg:w-[75%]">ff</div>
            <div class="w-[25%] md:w-[50%] lg:w-[75%]">ff</div>
          </div>
          <!-- <div
            v-for="college in filteredColleges"
            :key="college.id"
            class="college-column"
          >
            <div class="font-bold text-lg mb-2">{{ college.name }}</div>
            <ul>
              <li
                v-for="department in college.departments"
                :key="department.id"
                class="p-2 hover:bg-gray-200 cursor-pointer rounded-lg transition-all duration-200"
              >
                {{ department.name }}
              </li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import axios from "axios";

// States for dropdown visibility
const isDropdownOpen = ref(false);

// Data variables
const colleges = ref([]);
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

// Refs for the dropdown elements
const dropdownContainer = ref(null);

// Fetch data on mounted
onMounted(async () => {
  try {
    // const responseColleges = await axios.get(
    //   "http://192.168.123.252:8500/getAllPart/415"
    // );
    // colleges.value = responseColleges.data;
    colleges.value = data;

    // Organize the data into colleges and departments
    organizeCollegesAndDepartments();
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  // Add event listener to detect clicks outside dropdown container
  document.addEventListener("click", handleClickOutside);
});

// Function to organize the colleges and departments
const organizeCollegesAndDepartments = () => {
  // Create a structure with colleges and their corresponding departments
  const collegesWithDepartments = [];
  colleges.value.forEach((item) => {
    if (item.part_type_name === "كلية") {
      const college = collegesWithDepartments.find(
        (college) => college.id === item.father_id
      );
      if (college) {
        college.departments.push(item);
      } else {
        collegesWithDepartments.push({
          id: item.father_id,
          name: item.name,
          departments: [item],
        });
      }
    }
  });
  colleges.value = collegesWithDepartments;
};

// Filter colleges into categories based on their type
const filteredColleges = computed(() => {
  return colleges.value.filter((college) => college.departments.length > 0);
});

// Toggle function for dropdown visibility
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Close the dropdown if clicked outside
const handleClickOutside = (event) => {
  if (
    dropdownContainer.value &&
    !dropdownContainer.value.contains(event.target)
  ) {
    isDropdownOpen.value = false;
  }
};

// Remove event listeners on unmount
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
/* Styling for dropdown grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.college-column {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.college-column ul {
  padding-left: 0;
  list-style-type: none;
}

.college-column li {
  padding: 0.5rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  transition: background-color 0.2s ease;
}

.college-column li:hover {
  background-color: #e5e7eb;
}

/* Position adjustments for dropdown */
.top-10 {
  top: 2.5rem; /* Adjust the dropdown position */
}

/* Additional responsiveness for larger screens */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(4, 1fr); /* 4 أعمدة للكليات */
  }
}
</style>
