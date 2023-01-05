const app = {
  data() {
    return {
      baseUrl: "https://vue3-course-api.hexschool.io/v2",
      userPath: "wrightyu",
      tempProduct: {},
      products: [],
    };
  },
  methods: {
    checkAdmin() {
      axios.post(`${this.baseUrl}/api/user/check`)
      .then(() => {
        this.getProducts();
      })
      .catch(err => {
        alert(err.data.message);
        window.location.assign("./index.html");
      })
    },
    getProducts() {
      axios.get(`${this.baseUrl}/api/${this.userPath}/admin/products`)
      .then(res => {
        this.products = res.data.products;
      })
      .catch(err => {
        alert(err.data.message);
      })
    },
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)wrightyuToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
    axios.defaults.headers.common.Authorization = token;
    this.checkAdmin();
  },
};

Vue.createApp(app).mount("#app");
