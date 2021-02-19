<template>
  <div class="tabs">
    <button class="tabs__item">Вход</button>
    <button class="tabs__item tabs__item-active">Регистрация</button>
  </div>

</template>

<script>
export default {
  name: "c-tabs"
}
</script>

<style scoped lang="scss">
.tabs {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  flex: 1;

  &__item {
    background: #FAFAFA;
    border: 1px solid #E8E8E8;
    border-bottom: 0;
    border-radius: 2px;
    margin: 0 2px;
    padding: 20px;
    width: 50%;

    font-family: 'Museo Sans Cyrl 700', sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #B1B1B1;

    cursor: pointer;
    outline: none;

    transition: background 0.2s ease-out, color 0.2s ease-out;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background: #fdfdfd;
      color: #72AF32;
    }

    &-active {
      border-color: #FFF;
      background: #FFF;
      color: #72AF32;

      &:hover {
        background: #FFF;
      }
    }
  }
}
</style>
