<template>
  <section class="pt-36 pb-32 px-10">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full px-4 mb-10 lg:w-1/2">
          <h4 class="text-yellow-500 text-center text-4xl">Comment</h4>
          <h2 class="text-center font-bold text-5xl">Push your comment
            <p class="text-yellow-600 animate-bounce">here</p>
          </h2>
          <input-comments-components />
        </div>
        <div class="w-full mb-10 lg:w-1/2 xl:py-36">
          <button class="text-base font-semibold text-white bg-yellow-500 py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500" @click="getPOST()">Load Comments</button>
          <div class="grid lg:grid-cols-3 gap-3 mt-8 place-content-center md:grid-cols-3 sm:grid-cols-2">
            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md text-black" v-for="post in posts" :key="post.id">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ post.title }}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ post.body }}</p>
              <button href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 hover:opacity-80 hover:shadow-lg transition duration-500" @click="deletePOST(posts.id)">
                Delete
              </button>
              <button type="button" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 hover:opacity-80 hover:shadow-lg transition duration-500 ml-2" @click="editPOST(post)">
                Edit
              </button>
              
              
              <div class="overflow-y-auto overflow-x-hidden fixed  z-50 w-full md:inset-0 h-modal" v-if="isVisibilty = !isVisibility" >
                <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow">
                        <!-- Modal body -->
                        <div class="p-6 space-y-6">
                          <label for="email" class="text-base font-bold text-yellow-500">Title</label>
                          <input type="text" id="email" class="w-full bg-slate-200 text-black p-3 focus:outline-none focus:ring-yellow-500 focus:ring-1 rounded" placeholder="Input your email" v-model="post.title">
                          <label for="email" class="text-base font-bold text-yellow-500">Body</label>
                          <input type="text" id="email" class="w-full bg-slate-200 text-black p-3 focus:outline-none focus:ring-yellow-500 focus:ring-1 rounded" placeholder="Input your email" v-model="post.body">
                        </div>
                        
                        <!-- Modal footer -->
                        <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <button data-modal-toggle="defaultModal" type="button" class="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5" @click="updatePOST()">Accept</button>
                            <button data-modal-toggle="defaultModal" type="button" class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5" @click="declinePost()">Decline</button>
                        </div>
                    </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  </section>
</template>
<script>
import Meta from './meta'
import axios from 'axios'
import Swal from 'sweetalert2';

import InputCommentsComponents from '../../components/InputCommentsComponents.vue';

export default {
  components: { InputCommentsComponents },
  name: 'CommentView',
  data(){
    return {
      isVisibility: false,
      posts: [],
      post: {
        id:'',
        title:'',
        body:''
      },
      title: '',
      body: '',
      
    }
  },
  methods: {
    // menampilkan data
    async getPOST() {
      try {
        const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
        this.posts = posts.data;
      } catch (e) {
        console.log(e);
      }
    },
    async declinePost(){
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
      this.isVisibility = true;
    Toast.fire({icon: 'danger', title: 'data not edited'})

    },
    async editPOST(post){
      this.isVisibility = !this.isVisibility
      this.post.title = post.title;
      this.post.body = post.body;
      this.post.id = post.id;
    },
    async updatePOST() {
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
        const post = await axios.put("https://jsonplaceholder.typicode.com/posts/" + this.post.id,{
          title: this.post.title,
          body: this.post.body
        });
        Toast.fire({icon: 'success', title: 'data berhasil has been updated'})
      } catch (e) {
        Toast.fire({icon: 'success', title: e})
      }
    },
    async deletePOST(id) {
      let x = window.confirm("You want to delete the user?");

      if(x) {
        const post = await axios.delete("https://jsonplaceholder.typicode.com/posts/" + id);
        console.log(post);
        alert("deleted");
      }
    }
  }
  
}
</script>
