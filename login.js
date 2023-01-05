const app = {
  data() {
    return {
      baseUrl : "https://vue3-course-api.hexschool.io/v2",
      userPath : "wrightyu",
      userData: {
        "username": "",
        "password": ""
      },
    };
  },
  methods: {
    login() {
      axios.post(`${this.baseUrl}/admin/signin`, this.userData)
      .then(res => {
        const { token, expired } = res.data;
        document.cookie = `wrightyuToken=${token};expires=${new Date(expired)};`;
        alert("登入成功");
        window.location.assign("./products.html");
      })
      .catch(err => {
        alert("登入失敗");
        console.log(err.data.message);
      });
    }
  },
};

Vue.createApp(app).mount("#app");

