<template>
  <footer
    class="bg-gradient-to-l from-[rgba(36,76,116,1)] to-[rgb(43,146,162)] text-white"
  >
    <div class="container mx-auto py-1">
      <!-- Footer CTA Section -->
      <div
        class="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-2 border-b border-gray-700 py-4"
      >
        <div class="flex items-center justify-center mr-2">
          <i class="fas fa-map-marker-alt text-[#ecd44f] text-3xl"></i>
          <div class="ml-4">
            <h4 class="text-lg font-semibold">موقعنا</h4>
            <span class="text-gray-100 mr-2">سوريا،إدلب ،الدانا</span>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <i class="fas fa-phone text-[#ecd44f] text-3xl"></i>
          <div class="ml-4">
            <h4 class="text-lg font-semibold">اتصل بنا</h4>
            <span class="text-gray-100 mr-2">9876543210</span>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <i class="far fa-envelope-open text-[#ecd44f] text-3xl"></i>
          <div class="ml-4">
            <h4 class="text-lg font-semibold">الايميل</h4>
            <span class="text-gray-100 mr-2">mail@info.com</span>
          </div>
        </div>
      </div>

      <!-- Footer Content -->
      <div
        class="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-2"
      >
        <!-- 1. Logo and Title Section -->
        <div class="text-center">
          <!-- Image Section -->
          <div class="mb-2">
            <img
              src="@/assets/images/4.png"
              alt="logo"
              class="max-w-xs rounded-lg mx-auto"
              width="300"
            />
          </div>

          <!-- Title Section with Cairo Font -->
          <div class="">
            <h1 class="text-yellow-100 font-Cairo text-2xl">
              جامعة حلب الشهباء
              <br />
              <span class="block text-sm text-gray-400"
                >Al-Shahbaa Aleppo University</span
              >
            </h1>
          </div>

          <!-- Social Media Icons -->
          <div class="flex justify-center space-x-4 mt-4">
            <a href="#" class="text-[#66e9f0] hover:text-[#ecd44f]">
              <i
                class="fab fa-facebook-f bg-facebook p-2 rounded-full text-lg"
              ></i>
            </a>
            <a href="#" class="text-[#66e9f0] hover:text-[#ecd44f]">
              <i class="fab fa-twitter bg-twitter p-2 rounded-full text-lg"></i>
            </a>
            <a href="#" class="text-[#66e9f0] hover:text-[#ecd44f]">
              <i
                class="fab fa-instagram bg-instagram p-2 rounded-full text-lg"
              ></i>
            </a>
            <a href="#" class="text-[#66e9f0] hover:text-[#ecd44f]">
              <i
                class="fab fa-google-plus-g bg-[#2f6396] hover:text-[#ecd44f] p-2 rounded-full text-lg"
              ></i>
            </a>
          </div>
        </div>

        <!-- 2. Useful Links Section -->
        <div class="text-right">
          <h3 class="text-lg font-semibold mb-6 text-center">روابط مفيدة</h3>
          <div class="flex justify-around">
            <ul>
              <li>
                <a href="#" class="text-gray-100 hover:text-[#ecd44f]"
                  >الرئيسية</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-100 hover:text-[#ecd44f]"
                  >عن الجامعة</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-100 hover:text-[#ecd44f]"
                  >الكليات</a
                >
              </li>

              <li>
                <a href="#" class="text-gray-100 hover:text-[#ecd44f]"
                  >المعاهد</a
                >
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" class="text-gray-100 hover:text-[#ecd44f]"
                  >خدماتنا</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-100 hover:text-[#ecd44f]"
                  >فريق الخبراء</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-100 hover:text-[#ecd44f]"
                  >تواصل معنا</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-100 hover:text-[#ecd44f]"
                  >آخر الأخبار</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- 3. Subscription Section -->
        <div class="font-Cairo">
          <h3 class="text-lg font-semibold mb-6">الإشتراك</h3>
          <p class="text-gray-100 text-sm mb-4">
            للاشتراك والتسجيل في جامعتنا الجديدة، يرجى ملء النموذج أدناه
          </p>
          <form class="flex items-center bg-[#1c889c] p-1 rounded-2xl">
            <input
              type="email"
              placeholder="Email Address"
              class="flex-1 p-2 bg-[#2065a6] text-white rounded-2xl border-none"
            />
            <button
              type="submit"
              class="bg-[#1d5993] text-white p-2 rounded-r-lg"
            >
              <i class="fab fa-telegram-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
    <!-- Copyright Section -->
    <div class="bg-gray-800 py-8 my-2">
      <div class="container mx-auto flex justify-between items-center">
        <p class="text-sm text-gray-100">
          Copyright &copy; 2018, All Right Reserved
          <a href="https://codepen.io/anupkumar92/" class="text-yellow-500-500"
            >Anup</a
          >
        </p>
        <div>
          <ul class="flex space-x-6">
            <li>
              <a href="#" class="text-gray-100 p-2 hover:text-[#ecd44f]"
                >رئيسية</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-100 hover:text-[#ecd44f]">شروط</a>
            </li>
            <li>
              <a href="#" class="text-gray-100 hover:text-[#ecd44f]">خصوصية</a>
            </li>
            <li>
              <a href="#" class="text-gray-100 hover:text-[#ecd44f]">سياسة</a>
            </li>
            <li>
              <a href="#" class="text-gray-100 hover:text-[#ecd44f]">اتصال</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// حالة فتح القائمة
</script>

<style scoped>
.dropdown-item {
  transition: color 0.3s ease;
}
/* Add custom styles if needed */
</style>
