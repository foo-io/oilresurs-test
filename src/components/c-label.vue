<template>
  <label :for="id" class="label" :class="{'label__error': error}">
    <div class="label__title">
      <span class="label__title-text">{{ title }}</span>
      <span class="label__title-tooltip" v-tooltip="tooltip">?</span>
    </div>
    <input
        :type="type === 'password' && visible === true ? 'text' : type"
        :id="id"
        class="label__input"
        :placeholder="placeholder"
        v-model.lazy="value"
        v-if="type !== 'tel'"
    >
    <masked-input
        v-else
        v-model="value"
        mask="\+\7 (111) 111-11-11"
        :placeholder="placeholder"
        :type="type"
        :id="id"
        class="label__input"
    />
    <button class="label__toggle" v-if="type === 'password'" @click.prevent="visible = !visible">
      <img src="@/assets/img/icon-hide.svg" alt="Hide" class="label__toggle-icon" v-if="!visible">
      <img src="@/assets/img/icon-show.svg" alt="Show" class="label__toggle-icon" v-else>
      <!-- add active icon for v-if/v-else -->
    </button>
  </label>
</template>

<script>
import MaskedInput from 'vue-masked-input'

export default {
  name: "c-label",
  components: { MaskedInput },
  props: {
    id: String,
    title: String,
    tooltip: String,
    type: String,
    placeholder: String,
    error: Boolean
  },
  data() {
    return {
      value: null,
      visible: false,
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
.label {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 2px;
  padding: 7px 13px;
  position: relative;
  width: 100%;
  transition: border-color .2s ease-out;

  &:hover,
  &__focused {
    border-color: #72AF32;
  }
  &__error {
    border-color: #ff9c9c;
  }

  &__title {
    display: flex;
    margin-bottom: 15px;

    &-text {
      font-family: 'Museo Sans Cyrl 300', sans-serif;
      font-weight: 300;
      font-style: normal;
      font-size: 10px;
      line-height: 13px;
      letter-spacing: 0.03em;
      color: #828282;
    }

    &-tooltip {
      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 500;
      font-size: 9px;
      line-height: 17px;
      color: #CECECE;
      border: 1px solid #E0E0E0;
      border-radius: 50%;
      width: 13px;
      height: 13px;
      margin-left: 7px;
    }
  }

  &__input {
    display: flex;
    border: 0;
    outline: 0;
    padding: 0;
    color: #000;
    font-family: 'Museo Sans Cyrl 300', sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.02em;
    width: 100%;

    &::placeholder {
      font-family: 'Museo Sans Cyrl 100', sans-serif;
      font-weight: 300;
      font-style: normal;
    }
  }

  &__toggle {
    position: absolute;
    display: flex;
    background: 0;
    border: 0;
    outline: none;
    padding: 10px;
    cursor: pointer;
    right: 15px;
    top: calc( 50% - 17px );

    &-icon {
      width: 14px;
      height: 14px;
    }
  }
}
</style>
