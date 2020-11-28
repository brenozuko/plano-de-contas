<template>
  <div>
    <Header/>
    <Nuxt />
  </div>
</template>


<script>
export default{

}
</script>



<style lang="scss">
body{
  font-family: 'Montserrat', sans-serif;
}
.container{
  @apply px-2;

  @media(min-width:768px){
    @apply px-8;
  }
}
</style>
