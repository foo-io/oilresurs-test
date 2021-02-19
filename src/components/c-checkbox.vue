<template>
  <label class="container">{{title}}
    <input type="checkbox" v-model="value">
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "c-checkbox",
  props: {
    id: String,
    title: String,
  },
  data() {
    return {
      value: false,
    }
  },
  watch: {
    value() {
      this.$emit('value', this.value)
    }
  }

}
</script>

<style scoped lang="scss">
// да лень было самому что то придумывать
.container {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: calc( 16px + 10px );
  cursor: pointer;
  user-select: none;

  font-family: 'Museo Sans Cyrl 300', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 24px;
  color: #000000;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 4px;
  left: 0;
  height: 16px;
  width: 16px;
  border: 1px solid #E9E9E9;
  border-radius: 2px;
}

.container:hover input ~ .checkmark {
  background-color: #72af3247;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 2px;
  top: 2px;
  width: 0;
  height: 0;
  border: 5px solid #72AF32;
  border-radius: 2px;
}
</style>
