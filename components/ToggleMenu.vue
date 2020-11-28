<template>
  <div>
    <!-- //:class="{'fixed': isActive, 'relative':!isActive}" -->
    <button
      :class="{ fixed: isActive, relative: !isActive }"
      @click="active()"
      class="toggle"
    >
      <div :class="{ 'on-one': isActive }" class="toggle__one"></div>
      <div :class="{ 'on-two': isActive }" class="toggle__two"></div>
      <div :class="{ 'on-three': isActive }" class="toggle__three"></div>
    </button>
    <div :class="{ open: isActive, closed: !isActive }" class="navigation">
      <ul>
        <li>
          <a href="/registros">Registros Contábeis</a>
        </li>

        <li>
          <a href="/">Apresentação</a>
        </li>

        <li>
          <a href="#">Área de funcionários</a>
        </li>

        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Cadastro de produtos</a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    active() {
      this.isActive = !this.isActive;
    },
  },
};
</script>


<style lang="scss">
.toggle {
  width: 28px;
  height: 30px;
  top: 5%;
  right: 10%;
  @apply z-50 outline-none;

  @media (min-width: 768px) {
    width: 45px;
    height: 35px;
    right: 5%;
  }
  &:focus {
    @apply outline-none;
  }
  &__one,
  &__two,
  &__three {
    width: 100%;
    height: 3px;
    margin: 9px auto;
    transition: all 350ms;
    backface-visibility: hidden;

    @apply bg-white;

    @media (min-width: 768px) {
      height: 3px;
      margin: 12px auto;
    }
  }

  .on-one {
    transform: rotate(45deg) translate(5px, 10px);
    @apply bg-black;

    @media (min-width: 768px) {
      transform: rotate(45deg) translate(12px, 11px);
    }
  }

  .on-two {
    opacity: 0;
  }

  .on-three {
    transform: rotate(-45deg) translate(7px, -12px);
    @apply bg-black;

    @media (min-width: 768px) {
      transform: rotate(-45deg) translate(10px, -10px);
    }
  }
}

.navigation {
  width: 264px;
  font-size: 20px;

  @apply bg-white font-bold leading-loose pt-40 pl-8 h-screen fixed top-0 z-10 right-0;

  @media (min-width: 768px) {
    font-size: 24px;
    @apply w-6/12;
  }

  @media (min-width: 1024px) {
    font-size: 30px;
    @apply w-1/3;
  }

  a {
    transition: 150ms linear;

    &:focus {
      @apply outline-none;
    }

    &:hover {
      color: purple;
      transition: 150ms linear;
    }
  }
}

.closed {
  transition: transform 150ms linear;
  transform: translateX(100%);
}

.open {
  transition: transform 150ms linear;
  transform: tanslateX(0);
}
</style>
