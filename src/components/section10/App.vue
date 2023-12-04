<template>
    <div class="container">
      <Header :itemCount="items.length" :maxItem="maxItems"/>
      <NewItem
        @itemAdded="addItem" 
        :items="items">
      </NewItem>
      <ItemLayout 
        :items="items" 
        @itemRemoved="removeItem">
      </ItemLayout>
      <Notification></Notification>  
    </div>
  </template>
  
  <script>
  import ItemLayout from "./components/section10/ItemLayout.vue"
  import NewItem from "./components/section10/NewItem.vue"
  import Notification from "./components/section10/Notification.vue"
  import Header from "./components/section10/Header.vue"
  
  export default {
    data: function () {
      return {
        items: [
  
        ],
        maxItems: 10
      }
    },
    components : {
      ItemLayout,
      NewItem,
      Notification,
      Header
    },
    methods: {
      addItem: function (item) {
        if (this.items.length >= this.maxItems){
          return alert("Please remove item first");
        }
        this.items.push(item)
      },
      removeItem: function (index) {
        console.log(index);
        this.items.splice(index, 1)
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  