var sy = sy || { components: [], stateModules: [] };

((sy) => {
  sy.components.push({
    id: "productMainBody",
    element: "sy-product-screen-body",
    component: {
      name: "productMainBody",
      props: ['target'],
      data() {
        return {
          isHidden: false
        }
      },
      computed: {
        show() {
          return true;
        }
      },
      mounted() {
        this.$store.commit("productSearch_SetFilterShirts", "short sleeve t");
        // this.$store.commit('productSearch_ClearProducts');
        //this.$store.dispatch('productSearch_executeSearch');
      },
      methods: {
        show: function (event) {
          this.isHidden = true;
        },

        filterShirts: function (shirt, event) {
          this.$store.commit("productSearch_SetFilterShirts", shirt);
          this.onSearch(event);
        },
        onSearch(e) {
          e.preventDefault();
          e.stopPropagation();

          this.$store.commit('productSearch_ClearProducts');
          this.$store.dispatch('productSearch_executeSearch');

          // This handles a phenomenon in IOS where the screen 
          // scrolls up when the virtual keyboard opens and does not scroll
          // back.  This is a manual intervention.
          // this.scrollTop();
        },
      },
      template: `
<div class="tab-content prd_tab" id="pills-tabContent" v-show='!isHidden'>
              <div  class="tab-pane fade" id="pills-Men" :class="{ 'show': target === 'pills-Men', 'active': target === 'pills-Men' }"  role="tabpanel" aria-labelledby="pills-Men-tab">
                <div class="container">
                  <!-- Option-2 -->
                  <div class="prd-mn-2 mx-xl-5 px-xl-5">
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 mx-xl-5 px-xl-5 my-5">
                      <div class="col">
                        <ul class="nav nav-pills mb-3 products_tab nav-justified" id="productsList-tab" role="tablist">
                          <li class="nav-item">
                            <a class="nav-link " id="prd-1" data-bs-toggle="pill" role="tab" aria-selected="false" href="#">
                              <img src="assets/img/products/men-LongSleeve.png" class="img-fluid" v-on:click="filterShirts('long sleeve t',$event)">
                              <h6>LONG SLEEVE</h6>
                            </a>
                          </li>
                          <li class="nav-item ">
                            <a class="nav-link active" id="prd-2" data-bs-toggle="pill" role="tab" aria-selected="false" href="#">
                              <img src="assets/img/products/men-ShortSleeve.png" class="img-fluid " v-on:click="filterShirts('short sleeve t',$event)">
                              <h6>SHORT SLEEVE</h6>
                            </a>
                          </li>
                          <li class="nav-item ">
                            <a class="nav-link " id="prd-3" data-bs-toggle="pill" role="tab" aria-selected="false" href="#">
                              <img src="assets/img/products/men-Hoodie.png" class="img-fluid " v-on:click="filterShirts('hoodie',$event)">
                              <h6>HOODIE</h6>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- Option-2 End -->
                </div>
              </div>
              <div class="tab-pane fade" id="pills-women" :class="{ 'show': target === 'pills-women', 'active': target === 'pills-women' }" role="tabpanel" aria-labelledby="pills-women-tab">
                <div class="container">
                  <!-- Option-2 -->
                  <div class="prd-mn-2 mx-xl-5 px-xl-5">
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 mx-xl-5 px-xl-5 my-5">
                      <div class="col">
                        <ul class="nav nav-pills mb-3 products_tab nav-justified" id="productsList-tab" role="tablist">
                          <li class="nav-item  ">
                            <a class="nav-link " id="prd-1" data-bs-toggle="pill" role="tab" aria-selected="false" href="#">
                              <img src="assets/img/products/women-LongSleeve.png" class="img-fluid" v-on:click="filterShirts('long sleeve t',$event)">
                              <h6>LONG SLEEVE</h6>
                            </a>
                          </li>
                          <li class="nav-item ">
                            <a class="nav-link active" id="prd-2" data-bs-toggle="pill" role="tab" aria-selected="false" href="#">
                              <img src="assets/img/products/women-ShortSleeve.png" class="img-fluid " v-on:click="filterShirts('short sleeve t',$event)">
                              <h6>SHORT SLEEVE</h6>
                            </a>
                          </li>
                          <li class="nav-item ">
                            <a class="nav-link " id="prd-3" data-bs-toggle="pill" role="tab" aria-selected="false" href="#">
                              <img src="assets/img/products/women-Hoodie.png" class="img-fluid " v-on:click="filterShirts('hoodie',$event)">
                              <h6>HOODIE</h6>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- Option-2 End -->
                  
                </div>
              </div>
              <div class="tab-pane fade" id="pills-youth" :class="{'show': target === 'pills-youth' , 'active': target === 'pills-youth' }" role="tabpanel" aria-labelledby="pills-youth-tab">
                <div class="container">
                  <!-- Option-2 -->
                  <div class="prd-mn-2 mx-xl-5 px-xl-5">
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 mx-xl-5 px-xl-5 my-5">
                      <div class="col">
                        <ul class="nav nav-pills mb-3 products_tab nav-justified" id="productsList-tab" role="tablist">
                          <li class="nav-item  ">
                            <a class="nav-link " id="prd-1" data-bs-toggle="pill" role="tab" aria-selected="false" href="#">
                              <img src="assets/img/products/youth-LongSleeve.png" class="img-fluid" v-on:click="filterShirts('long sleeve t',$event)">
                              <h6>LONG SLEEVE</h6>
                            </a>
                          </li>
                          <li class="nav-item ">
                            <a class="nav-link active" id="prd-2" data-bs-toggle="pill" role="tab" aria-selected="false" href="#">
                              <img src="assets/img/products/youth-ShortSleeve.png" class="img-fluid " v-on:click="filterShirts('short sleeve t',$event)">
                              <h6>SHORT SLEEVE</h6>
                            </a>
                          </li>
                          <li class="nav-item ">
                            <a class="nav-link " id="prd-3" data-bs-toggle="pill" role="tab" aria-selected="false" href="#">
                              <img src="assets/img/products/youth-Hoodie.png" class="img-fluid " v-on:click="filterShirts('hoodie',$event)">
                              <h6>HOODIE</h6>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- Option-2 End -->
                 
                </div>
              </div>
            </div>
 <div class="row" v-show='!isHidden'>
            <div class="mb-4 col-sm-12">
              <div class="container">
                <div class="row mb-3">
                  <div class="col-md-12">
                    <h4 class="text-uppercase ">PICK A THEME</h4>
                  </div>
                </div>
                <div class="row">
                  <div>
                    <!-- Slider main container -->
                    <div class="swiper-container">
                      <!-- Additional required wrapper -->
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <div class="text-center text-uppercase">
                            <a href="themes.html"><img src="assets/img/product35.png" class="img-fluid" />
                              <p>Gaming</p>
                            </a>
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="text-center text-uppercase">
                            <a href="themes.html"><img src="assets/img/product36.png" class="img-fluid" />
                              <p>ANIMALS</p>
                            </a>
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="text-center text-uppercase">
                            <a href="themes.html"><img src="assets/img/product37.png" class="img-fluid" />
                              <p>FUNNY</p>
                            </a>
                          </div>
                        </div>
                         <div class="swiper-slide">
                          <div class="text-center text-uppercase">
                            <a href="themes.html"><img src="assets/img/product38.png" class="img-fluid" />
                              <p>FANTASY</p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <!-- If we need navigation buttons -->
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                    </div>
                  </div>
                </div>
                <div class="row mb-4 mt-3 mt-md-5">
                  <div class="col-md-12">
                    <h4 class="text-uppercase prdHeading">DESIGN FROM SCRATCH</h4>
                  </div>
                </div>
                <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 d-flex justify-content-center">
                  <div class="col mb-5">
                    <a v-on:click="isHidden = !isHidden"><img src="assets/img/designfromscratch2.png" class="img-fluid"  /></a>
                  </div>
                  <div class="col mb-5">
                    <a href="https://store-prd.np.shirtyourself.com/next-level-6210#/customise/87507323?basketIndex=7"><img src="assets/img/dtg2.png" class="img-fluid" /></a>
                  </div>
                </div>
              </div>
                  
<sy-product-search-results></sy-product-search-results>
             
            </div>
         </div>
<div v-show='isHidden'>
        <sy-toolbar-editors id="toolsToolbar" ></sy-toolbar-editors>
        <div id="kitBuilder" ><noscript>Kit Builder requires JavaScript to be enabled</noscript></div>
<sy-toolbar-purchase id="stuffToolbar"></sy-toolbar-purchase>
        <sy-splash></sy-splash>
          <sy-image-dialog></sy-image-dialog>


</div>
<sy-checkout></sy-checkout>

`,
    },
  });
})(sy);