<template>
  <div class="bg-black">
    <div class="container flex justify-between items-center">
      <a href="/">
        <img class="logo" src="@/assets/img/The_Universe.png" alt="Book On" />
      </a>
      <ToggleMenu />
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style lang="scss">
.logo {
  height: 135px;
}

.navigation-link {
  @apply text-white text-lg mx-2;
}
</style>
