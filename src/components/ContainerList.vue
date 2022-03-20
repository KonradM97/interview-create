<template>
  <div class="list">
    <div class="list__singleItem" v-for="item in data" :key="item.id">
      <container-list-item
        :id="item.id"
        :title="item.title"
        :currentId="currentId"
        @emitItem="emitItem"
      ></container-list-item>
    </div>
  </div>
</template>

<script>
import ContainerListItem from "./ContainerListItem.vue";
export default {
  name: "ContainerList",
  components: { ContainerListItem },
  props: {
    data: [],
  },
  emits: {
    emitId: function (id) {
      if (id) {
        return true;
      } else {
        console.warn("Id is missing!");
        return false;
      }
    },
  },
  data() {
    return {
      currentId: -1,
    };
  },
  methods: {
    emitItem(id, title) {
      this.currentId = id;
      this.$emit("emitId", id);
      this.$emit("emitTitle", title);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(1fr, 100px);
}
.list__singleItem {
  cursor: pointer;
  height: 2em;
  margin: 10px;
}
</style>
