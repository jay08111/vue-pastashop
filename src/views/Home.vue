<template>
  <main>
    <Header />
    <Description />
    <ContactForm />
    <Details />
  </main>
</template>

<script>
import { Header, Description, ContactForm, Details } from "../components/index";
export default {
  components: {
    Header,
    Description,
    ContactForm,
    Details,
  },
};
</script>

<style lang="scss" scoped></style>
