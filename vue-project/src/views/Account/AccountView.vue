<template>
  <section class="pt-36 pb-32 px-10">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full px-4 mb-10">
          <h4 class="text-yellow-500 text-center text-4xl">Account</h4>
          <h2 class="text-center font-bold text-5xl"> Page account
            <p class="text-yellow-600 animate-bounce">here</p>
          </h2>
          <p class="text-yellow-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ipsa fugit nihil aut provident iste laborum similique cumque facilis blanditiis quos omnis, et molestiae itaque, quasi ipsam fuga! Recusandae, maxime!</p>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
    API:'https://jsonplaceholder.typicode.com/posts'
    }
  },
  methods: {
    getApi(){
      fetch(this.API)
      .then((response) => response.json())
      .then((json) => console.log(json))
    }
  },
}
</script>

