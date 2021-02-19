<template>
  <div class="content">
    <h1 class="content__title">
      Оптовые закупки качественных&nbsp;нефтепродуктов по лучшим ценам
    </h1>
    <div class="content__blocks">
      <div class="block">
        <div class="block__image">
          <img src="@/assets/img/icon-1.svg" alt="" class="block__image-icon">
        </div>
        <div class="block__content">
          <div class="block__content-title">
            Удобное отслеживание динамики цен
          </div>
          <div class="block__content-description">
            Краткое описание преимущества в пару строк
          </div>
        </div>
      </div>
      <div class="block">
        <div class="block__image">
          <img src="@/assets/img/icon-2.svg" alt="" class="block__image-icon">
        </div>
        <div class="block__content">
          <div class="block__content-title">
            Быстрое оформление
          </div>
          <div class="block__content-description">
            Краткое описание преимущества в пару строк
          </div>
        </div>
      </div>
      <div class="block">
        <div class="block__image">
          <img src="@/assets/img/icon-3.svg" alt="" class="block__image-icon">
        </div>
        <div class="block__content">
          <div class="block__content-title">
            Широкий выбор
          </div>
          <div class="block__content-description">
            Краткое описание преимущества в пару строк
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.content -->
</template>

<script>
export default {
name: "s-content"
}
</script>

<style scoped lang="scss">
// content
.content {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 585px;
  margin: 0 auto;

  &__title {
    font-family: 'Museo Sans Cyrl 300', sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 38px;
    line-height: 140%;
    letter-spacing: 0.01em;
    color: #141414;
    margin: 0 15px 44px 0;

    @media screen and (max-width: 1024px) {
      font-size: 24px;
    }
  }

  &__blocks {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
}

//blocks
.block {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  &__image {
    background: #FFFFFF;
    border-radius: 50%;
    width: 63px;
    height: 63px;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(221, 222, 222, 0.5);
    margin-right: 25px;
  }

  &__content {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-direction: column;
    max-width: 212px;
    color: #141414;
    font-family: 'Museo Sans Cyrl 300', sans-serif;
    font-weight: 300;
    font-style: normal;

    &-title {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;

      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;

      margin: 10px 0;
    }

    &-description {
      font-size: 13px;
      line-height: 21px;
    }
  }
}
</style>
