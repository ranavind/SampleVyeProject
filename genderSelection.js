var sy = sy || { components: [], stateModules: [] };
((sy) => {
  sy.components.push({
    id: "genderSelection",
    element: "sy-gender-product",

    component: {
      name: "genderSelection",
      data() {

        return {
          items: [
            { id: 1, text: 'Women', value: 'women', selected: 'false', isactive: '', target: "pills-women" },
            { id: 2, text: 'Men', value: 'men', selected: 'true', isactive: 'active', target: "pills-Men" },
            { id: 3, text: 'Youth', value: 'youth', selected: 'false', isactive: '', target: "pills-youth" },
          ],

          selectedTab: "pills-Men"
        }

      },
      computed: {
        selectedTarget() {
          return this.items.filter(i => i.isactive === "active").selectedTarget;
        },
      },
      beforeMount() {
        this.$store.commit("productSearch_SetFilterFits", "men");

      },
      methods: {
        filterFits: function (gender, event) {
          this.$store.commit("productSearch_SetFilterFits", gender);

          for (i = 0; i < this.items.length; i++) {

            if (this.items[i].text === gender) {
              this.items[i].isactive = "active";
              this.selectedTab = this.items[i].target;
            }
            else {
              this.items[i].isactive = "";
            }
            // <------ ... IT WORKS
          }
        }

      },
      template: `
            <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
              <template v-for="item in items" :key="item.text">
              <li  class="nav-item" role="tab">
             <button class="nav-link rounded-pill px-4 me-2" :class="item.isactive"  v-bind:id="item.target +'-tab'" data-bs-toggle="pill"
                             v-bind:data-bs-target="'#'+item.target" type="button" role="tab" :aria-controls="item.target"
                            :aria-selected="item.selected"  v-on:click="filterFits(item.value, $event)">
                        {{item.text}}
                    </button>
              </li>
          </template>
          </ul>
          <sy-product-screen-body :target="selectedTab"></sy-product-screen-body>
      `,
    },
  });
})(sy);


