<template>
  <header>
    <div class="container px-80 inline-flex border border-2">
      <h1>hello</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/comments">About</RouterLink>
        <RouterLink to="/account">Account</RouterLink>
      </nav>
    </div>
    
  </header>
</template>
<script>
export default {
  name: 'HeaderComponent'
  
}
</script>