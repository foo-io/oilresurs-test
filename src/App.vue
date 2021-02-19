<template>
  <div id="app">
    <div class="page">

      <!-- СЕМАНТИКУ СОБЛЮДАЕМ :) -->

      <LHeader></LHeader>

      <main class="main">

        <SContent></SContent>

        <CForm></CForm>

      </main>

      <LFooter></LFooter>

    </div>
  </div>
</template>

<script>
import LFooter from "@/layouts/l-footer";
import SContent from "@/static/s-content";
import LHeader from "@/layouts/l-header";
import CForm from "@/components/c-form";

export default {
  name: 'App',
  components: {CForm, LHeader, SContent, LFooter},
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
// App
a {
  text-decoration: none;
}

#app {
  background: #FAFAFA;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  min-height: 100vh;
  min-width: 320px;
  font-family: 'Museo Sans Cyrl 500', sans-serif;
}

.page {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 1180px;
  padding: 0 15px;
  margin: 0 auto;
}


// main
.main {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  flex: 1;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
}

//grids
.grid {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  flex-direction: column;

  &__row {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex: 1;
    margin: 0 -10px 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__col {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex: 1;
    padding: 0 10px;

    &-50 {
      width: 50%;
    }
  }
}

//button
.button {
  display: flex;
  font-family: 'Museo Sans Cyrl 700', sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 13px;
  line-height: 16px;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  position: relative;
  border-radius: 2px;
  width: 100%;
  border: 0;
  outline: 0;
  height: 57px;
  cursor: pointer;
  background-image: linear-gradient(107.75deg, #72AF32 0%, #4B9B3F 100%), linear-gradient(76.59deg, #6C9E39 1.93%, #79B041 98.89%);
  transition: opacity .2s ease-out;
  margin-top: 24px;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    opacity: 0;
    transition: opacity .2s ease;
  }
  &:hover {
    &::before {
      opacity: 1;
      background-image: linear-gradient(157.9deg,#7bc52e 23.86%,#4cab3d 75.28%);
    }
  }
  &__text {
    position: relative;
    z-index: 1;
  }
}

//accept
.accept {
  font-family: 'Museo Sans Cyrl 300', sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #545454;
  margin-top: 17px;
  &__link {
    color: #545454;
    transition: color .2s ease-out;

    &:hover {
      color: #72AF32;
    }
  }
}
</style>
