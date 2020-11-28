<template>
  <div class="background-subheader">
    <div
      class="container flex flex-col items-center md:flex-row justify-between py-4"
    >
      <h3>Plano de Contas</h3>
      <v-select
        v-model="type_request"
        :options="plansArray"
        :reduce="(plan) => plan.id"
        class="select-input"
        label="tipo"
        placeholder="Selecione o grupo"
        @input="getPlans()"
      >
        <template #no-options> Desculpe, sem resultados.</template>
      </v-select>
    </div>
  </div>
</template>

<script>
import planTypes from "../static/json/planTypes.json";

export default {
  mounted() {
    this.getFirstPlans();
  },

  data() {
    return {
      plansArray: planTypes,
      type_request: 0,
    };
  },

  methods: {
    async getFirstPlans() {
      const plans = await this.$axios.$get(
        "https://sheetdb.io/api/v1/8ohtq0k62av0j"
      );
      this.$store.commit("plans/setPlanInfo", plans);
    },

    async getPlans() {
      if (this.type_request == "1") {
        let plans = await this.$axios.$get(
          "https://sheetdb.io/api/v1/8ohtq0k62av0j"
        );
        this.$store.commit("plans/setPlanInfo", plans);
      }

      else if (this.type_request == "2") {
        let plans = await this.$axios.$get(
          "https://sheetdb.io/api/v1/uhbsm62i3y7xh"
        );
        this.$store.commit("plans/setPlanInfo", plans);
      }

      if (this.type_request == "3") {
        let plans = await this.$axios.$get(
          "https://sheetdb.io/api/v1/ex64m4t8w8fy7"
        );
        this.$store.commit("plans/setPlanInfo", plans);
      }
      
    },
  },
};
</script>



<style lang="scss">
.background-subheader {
  background-color: #f2f2f2;
}

.select-input {
  font-size: 12px;

  .vs__search::placeholder,
  .vs__dropdown-toggle,
  .vs__dropdown-menu {
    background: white;
    width: 200px;
    @apply p-0 text-black;
  }

  .vs__dropdown-option {
    @apply text-black;
  }

  .vs__selected {
    @apply text-black;
  }

  .vs__open-indicator {
    fill: #72737496;
  }

  .vs__clear {
    display: none;
  }
}
</style>
