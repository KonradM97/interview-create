<template>
      <div
        @click="emitItem(id, title)"
        class="listItem"
        v-bind:style="[
          currentId == id
          ? { outline: '1px dotted black' }
          : { outline: 'none'}
        ]">
        {{ title }}
      </div> 
</template>
<script>
export default {
  name: "ContainerListItem",
  props: {
    currentId:
    {
        required: true
    },
    id:
    {
        required: true
    },
    title:
    {
        required: true
    }
  },
  emits: {
    emitItem: function (id) {
      if (id) {
        return true;
      } else {
        console.warn("Id is missing!");
        return false;
      }
    },
    emitTitle: function(title)
    {
        if(typeof(title) == String)
        {
            return true;
        }
        else
        {
            console.warn("Title is wrong!");
            return false;
        }
    }
  },

  methods: {
    emitItem(id, title) {
      this.$emit("emitItem", id, title);
    },
  },
};
</script>

<style scoped>
.listItem {
  box-sizing: border-box;
  text-align: center;
  padding: 8px 0;
  cursor: pointer;
  margin: 10px;
}
</style>
