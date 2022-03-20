<template>
  <div class="list">
    <div class="list__singleItem" v-for="item in data" :key="item.id">
      <div
        @click="emitItem(item.id, item.title)"
        class="list__singleItem--title"
        v-bind:style="[
          currentId == item.id
          ? { border: 'dotted' }
          : { border: 'none'}
        ]"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContainerList",
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
