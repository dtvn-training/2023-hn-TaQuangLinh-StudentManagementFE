import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        students: [{
            name: 'Tom',
            class: "VN-04",
            literature: 9,
            maths: 10,
            english: 10,
          }, {
            name: 'John',
            class: "VN-05",
            literature: 4,
            maths: 5,
            english: 8,
          },{
            name: 'Jenny',
            class: "VN-06",
            literature: 10,
            maths: 9,
            english: 8,
          }]
    }
})