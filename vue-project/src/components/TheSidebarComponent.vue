<template>
<div>
<section
  class="block fixed bottom-0 inset-x-0 z-50 shadow-lg text-black dark:bg-dark backdrop-blur-lg  xl:relative xl:bg-yellow-500">
  <div id="tabs" class="flex justify-between xl:absolute xl:left-0 xl:grid xl:mt-56">
    <div
      class="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-yellow-500"
      activeClass="dark:text text-black" >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      <span class="tab block text-xs">
        <RouterLink to="/">Home</RouterLink>
      </span>
    </div>
    <div
      class="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-yellow-500"
      activeClass="dark:text-gray-100 text-black">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>

      <span class="tab block text-xs">
        <RouterLink to="/account">Account</RouterLink>
      </span>
    </div>
    <div
      class="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-yellow-500"
      activeClass="dark:text-gray-100 text-black">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mb-1" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span class="tab block text-xs">
            <RouterLink to="/comments">Comments</RouterLink>

      </span>
    </div>
  </div>
</section>
</div>
</template>
<script>

export default {
  
}
</script>