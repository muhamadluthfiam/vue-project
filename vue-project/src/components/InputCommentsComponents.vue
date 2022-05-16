<template>
  <form @submit.prevent="storePOST">

    <div class="w-full px-4 mb-8 mt-4">
      <label for="email" class="text-base font-bold text-yellow-500">Email</label>
      <input type="text" id="email" class="w-full bg-slate-200 text-black p-3 focus:outline-none focus:ring-yellow-500 focus:ring-1 rounded" placeholder="Input your email" v-model="title">
    </div>
    <div class="w-full px-4 mb-8 mt-4">
      <label for="name" class="text-base font-bold text-yellow-500">Name</label>
      <textarea type="text" id="name" class="w-full bg-slate-200 text-black p-3 focus:outline-none focus:ring-yellow-500 focus:ring-1 rounded h-36" placeholder="Input your name" v-model="body"></textarea>
    </div>
    <div class="w-full px-4">
      <button class="text-base font-semibold text-white bg-yellow-500 py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500" >Send</button>
    </div>
  </form>
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'InputCommentsComponents',
  data() {
    return {
      title: '',
      body: '',
      
    }
  },
  created() {
    
  },
  methods: {
    // memasukan data
  async storePOST() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
    try {
      const post = await axios.post(
        "https://jsonplaceholder.typicode.com/posts", 
        {
          title: this.title,
          body : this.body
        }
      );
      Toast.fire({icon: 'success', title: 'data has been submited'})
    } catch(e) {
      console.log(e);
    }
  },
  },
}
</script>