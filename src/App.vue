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

</style>
