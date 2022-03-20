<template>
  <div id="app">
    <button @click="showContainer">{{ buttonName }}</button>
    <input
      v-if="currentId != -1"
      v-model="currentTitle"
    />
    <container-list
      @emitItem="setActiveItem"
      :data="container.getList()"
    ></container-list>
  </div>
</template>
<script>
import ContainerList from "./components/ContainerList.vue";
import Container from "./modules/Container.js";
export default {
  name: "App",
  components: { ContainerList },
  data() {
    return {
      buttonName: "Mieszaj",
      container: new Container([
        { id: 0, title: "Nazwa1" },
        { id: 1, title: "Nazwa2" },
        { id: 2, title: "Nazwa3" },
        { id: 3, title: "Nazwa4" },
        { id: 4, title: "Nazwa5" },
        { id: 5, title: "Nazwa6" },
      ]),
      currentId: -1,
      currentTitle: "",
    };
  },
  methods: {
    showContainer() {
      this.container.shuffle();
    },
    setActiveItem(id,title) {
      this.currentId = id;
      this.currentTitle = title;
    },
  },
  watch: {
    currentTitle: function()
    {
      let temp = this.container
        .getList()
        .find((element) => element.id == this.currentId);
      temp.title = this.currentTitle;
    }
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 10px;
}
</style>
