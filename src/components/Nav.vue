<template>
  <div class="container">
    <div class="card">
      <p>The Spaghetti Junction</p>
      <p>
        <font-awesome-icon icon="map-marker-alt" class="icon" /> 4510
        Charlestown Rd 200New Albany IN 47150
      </p>
      <p><font-awesome-icon icon="phone-alt" class="icon" />(123)456-7890</p>
    </div>
    <div class="logo">
      <img src="https://filehandler.revlocal.com/493879" alt="logo" />
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'Home' }" class="link">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Menu' }" class="link">Menu</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.container {
  margin-bottom: 12px;
  .card {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 8px;
    background-color: map-get($colors, "primary");
    p {
      color: map-get($colors, "white");
      &:nth-child(2) {
        &:after {
          content: "";
          border-right: 1.2px solid map-get($colors, "white");
          padding-right: 14px;
        }
        &:before {
          content: "";
          padding-left: 14px;
          border-left: 1.2px solid map-get($colors, "white");
        }
      }
      .icon {
        margin-right: 5px;
      }
    }
  }
  .logo {
    display: flex;
    justify-content: space-around;
    width: 1500px;
    overflow-x: hidden;
    margin: 10px auto 0px;
    padding: 0 15rem;
    gap: 10px;
    nav {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      width: 100%;
      ul {
        display: flex;
        list-style: none;
        justify-content: space-around;
        gap: 80px;
        font-size: map-get($fontSize, "middle");
        color: map-get($colors, "secondary");
        font-family: map-get($fontFamily, "Staatliches"), sans-serif;
        li {
          .link {
            text-transform: uppercase;
            cursor: pointer;
            transition: $transition;
            color: map-get($colors, "secondary");
            &:hover {
              color: map-get($colors, "primary");
            }
            &:focus,
            &:active,
            &:link {
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}
</style>
