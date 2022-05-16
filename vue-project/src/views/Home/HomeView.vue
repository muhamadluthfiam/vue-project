<template>
  <main>
    <!-- <TheWelcome /> -->
    <section class="px-10">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full self-center px-5 mt-5 lg:w-1/2" v-for="val in Biodata" :key="val">
            <h1 class="text-base text-center font-semibold text-yellow-500 text-4xl md:text-xl md:text-left lg:text-6xl">Hei my name is
              <span class="block font-bold text-slate-900 text-4xl">
                {{ val.name }}
              </span>
            </h1>
            <p class="text-center text-xl md:text-left">{{ val.title }}</p>
            <p class="text-center text-xl md:text-left">{{ val.no }}</p>
            <p class="text-center text-xl md:text-left">{{ val.birth }}</p>
            <p class="text-center text-xl md:text-left">mluthfiamrullah@gmail.com</p>
            <p class="text-center text-xl md:text-left">{{ val.address }}</p>
          </div>
          <div class="w-full self-end px-4 lg:w-1/2">
            <div class="relative mt-10 lg:mt-9 lg:right-0">
              <img src="@/assets/img/luthfi.png" alt="luthfi" class="max-w-full mx-auto">
              <span class="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2">
                <svg width="400" height="400"  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="animate-bounce">
                  <path fill="#F1C21B" d="M25.5,-40.2C36.1,-27.3,50,-24,57,-15.5C64,-6.9,64.2,7,58.7,17.6C53.3,28.2,42.2,35.6,31.5,41.8C20.8,47.9,10.4,52.9,-1.6,55.1C-13.6,57.3,-27.2,56.7,-33.9,49.2C-40.6,41.8,-40.5,27.4,-46.6,13.9C-52.8,0.3,-65.2,-12.4,-65.3,-24C-65.4,-35.6,-53.2,-46,-40.2,-58.1C-27.3,-70.2,-13.6,-84.1,-3.1,-79.8C7.4,-75.5,14.8,-53.1,25.5,-40.2Z" transform="translate(100 100) scale(1.0)" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      Biodata: [
        {
          name: 'luthfi amrullah',
          title: 'mahasiswa',
          no: '085155462340',
          birth: 'Bandung, 4 mei 1998',
          address: 'Cijerokaso street no.33 Bandung 40151'
        }
      ]
    }
  },
}
</script>