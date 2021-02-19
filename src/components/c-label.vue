<template>
  <label :for="id" class="label">
    <div class="label__title">
      <span class="label__title-text">{{ title }}</span>
      <span class="label__title-tooltip" v-tooltip="tooltip">?</span>
    </div>
    <input :type="type" :id="id" class="label__input" :placeholder="placeholder">
    <button class="label__toggle" v-if="type === 'password'">
      <img src="@/assets/img/icon-hide.svg" alt="Hide" class="label__toggle-icon">
      <img src="@/assets/img/icon-show.svg" alt="Show" class="label__toggle-icon">
      <!-- add active icon for v-if/v-else -->
    </button>
  </label>
</template>

<script>
export default {
  name: "c-label",
  props: {
    id: String,
    title: String,
    tooltip: String,
    type: String,
    placeholder: String,
  }
}
</script>

<style scoped lang="scss">
.label {
  display: -webkit-flex;
  display: -ms-flex;
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

  &__title {
    display: -webkit-flex;
    display: -ms-flex;
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
      display: -webkit-flex;
      display: -ms-flex;
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
    display: -webkit-flex;
    display: -ms-flex;
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
    display: -webkit-flex;
    display: -ms-flex;
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
