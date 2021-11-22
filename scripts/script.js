let data = {
  title: "App title"
}

Vue.component('hello', {
  template: '<h1>Hello world !!!</h1>'
});

let vm1 = new Vue({
  data: data  
});

vm1.$mount("#app1");


let vm2 = new Vue({});

let vm3 = new Vue({
  template: '<h1>Assalamu alaykum!</h1>'
});

vm3.$mount('#app2');