<template>
  <div class="form">
    <div class="form__tabs">
      <CTabs></CTabs>
    </div>
    <div class="form__content">
      <VAuth v-if="isActive === 'auth'"></VAuth>
      <VRegistration v-if="isActive === 'registration'"></VRegistration>
      <VVerify v-if="isActive === 'verify'"></VVerify>

      <VOthers></VOthers>
    </div>
  </div>
</template>

<script>
import CTabs from "@/components/c-tabs";
import VRegistration from "@/views/v-registration";
import VOthers from "@/views/v-others";
import VAuth from "@/views/v-auth";
import VVerify from "@/views/v-verify";

export default {
  name: "c-form",
  components: {
    VVerify,
    VAuth,
    CTabs, VRegistration, VOthers
  },
  computed: {
    isActive() {
      return this.$store.getters.getTab
    }
  }
}
</script>

<style scoped lang="scss">
.form {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 407px;

  &__tabs {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
  }

  &__content {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-direction: column;

    background: #fff;
    border-radius: 0 0 2px 2px;
    padding: 43px 34px 41px;

    @media screen and (max-width: 768px) {
      padding: 25px;
    }

    @media screen and (max-width: 425px) {
      padding: 20px 15px;
      margin: 0 -15px;
    }
  }
}
</style>
