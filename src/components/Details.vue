<template>
  <section>
    <div class="details__container">
      <h2>more details:</h2>
      <p>
        Come visit us online @
        <a href="https://whoami-hoyeoun.netlify.app/">
          //https://whoami-hoyeoun.netlify.app/</a
        >
      </p>
    </div>
    <div class="hours__container">
      <h2>Business Hours:</h2>
      <table>
        <tbody>
          <tr v-for="{ id, date } in getDate" :key="id">
            <td>{{ date }}</td>
            <td>&nbsp;</td>
            <td>11:00AM</td>
            <td>&nbsp;</td>
            <td>-</td>
            <td>&nbsp;</td>
            <td>8:30AM</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import { getDate } from "../data";
export default {
  computed: {
    getDate() {
      return getDate;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  font-family: map-get($fontFamily, "Staatliches");
  width: 1250px;
  margin: 0 auto;
  flex-direction: column;
  gap: 100px;
  h2 {
    font-size: 3rem;
    color: map-get($colors, "secondary");
    font-weight: normal;
    text-align: center;
    &:after {
      background: rgb(192, 192, 192);
      content: "";
      max-width: 70px;
      margin: 0px auto;
      display: block;
      height: 1px;
    }
  }
  .details__container {
    h2 {
      margin-bottom: 4rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
  .hours__container {
    position: relative;
    table {
      display: flex;
      justify-content: center;
      margin-top: 5rem;
      font-size: map-get($fontSize, "large");
      tr {
        td {
          &:first-child {
            padding: 0px 55px;
            padding-left: 1px;
            padding-top: 5px;
          }
        }
      }
    }
  }
}
</style>
