<template>
  <div class="container">
    <div class="py-10">
      <div>
        <div class="header-table">
          <h3 class="static-cell">Conta</h3>
          <h3 class="static-cell">Descrição</h3>
        </div>

        <div v-if="tablePlans">
          <div
            v-for="row in tablePlans"
            :key="row.classification"
            class="table-row"
          >
            <h3 class="dynamic-cell">{{ row.classification }}</h3>
            <h3 class="dynamic-cell">{{ row.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    tablePlans() {
      return this.$store.state.plans.plan_info;
    },
  },

  methods: {},
};
</script>


<style lang="scss">
.header-table {
  @apply flex justify-start mt-6;
  .static-cell {
    width: 100px;
    font-size: 12px;
    @apply text-center bg-gray-500 text-white border border-gray-600;

    &:nth-child(2) {
      width: 350px;
    }
  }
}

.table-row {
  @apply flex justify-start;
  .dynamic-cell {
    width: 100px;
    font-size: 12px;
    @apply text-center text-black border border-gray-600;

    &:nth-child(2) {
      width: 350px;
    }
  }
}

@media (min-width: 768px) {
  .table-row {
    .dynamic-cell {
      font-size: 16px;
      width: 150px;
      &:nth-child(2) {
        width: 600px;
      }
    }
  }

  .header-table {
    @apply justify-start;
    .static-cell {
      font-size: 16px;
      width: 150px;
      &:nth-child(2) {
        width: 600px;
      }
    }
  }
}
</style>
