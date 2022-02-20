<template>
  <div>
    <header>
      <div class="message">
        <h1>Welcome to The Spaghetti Junction</h1>
        <span
          >We are open for Dine-In, Delivery, and Carryout!<br />
          Let us cater your next event!</span
        >
        <h1>(123)456-7890</h1>
        <a herf="#">order online</a>
      </div>
    </header>
    <section>
      <div class="container">
        <ul>
          <li><font-awesome-icon icon="utensils" class="icon" />view menu</li>
          <li><font-awesome-icon icon="inbox" class="icon" />catering</li>
          <li><font-awesome-icon icon="envelope" class="icon" />contact</li>
          <li><font-awesome-icon icon="file-alt" class="icon" />apply now</li>
          <li><font-awesome-icon icon="thumbs-up" class="icon" />like us</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
div {
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://www.italianfoodnewalbany.com/image/329188/1920/M0/");
    height: 72vh;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
    &:before {
      content: "";
      display: block;
      position: absolute;
      height: 72vh;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(32, 26, 22, 0.5);
    }
    .message {
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1,
      span {
        color: map-get($colors, "white");
        font-family: map-get($fontFamily, "Staatliches"), sans-serif;
        font-size: map-get($fontSize, "large");
        text-align: center;
      }
      h1 {
        margin-bottom: 40px;
        font-size: 3rem;
      }
      span {
        font-size: 1.8rem;
        font-family: map-get($fontFamily, "Source Sans Pro");
        margin-bottom: 12px;
      }
      a {
        padding: 1.35rem 1.75rem;
        text-transform: uppercase;
        margin-top: 2rem;
        cursor: pointer;
        border-radius: 10px;
        color: map-get($colors, "white");
        background: map-get($colors, "primary");
        transition: $transition;
        &:hover {
          background: map-get($colors, "white");
          color: map-get($colors, "black_main");
        }
      }
    }
  }
  section {
    .container {
      background: map-get($colors, "secondary");
      min-height: 10vh;
      padding: 20px 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      ul {
        display: flex;
        justify-content: space-around;
        color: map-get($colors, "white");
        min-width: 1100px;
        li {
          list-style: none;
          justify-content: space-around;
          text-transform: capitalize;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          font-size: 1.5rem;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
          padding: 20px 20px;
          cursor: pointer;
          &:hover {
            box-shadow: 1px 5px 16px 4px rgba(0, 0, 0, 0.69);
          }
          .icon {
            font-size: 50px;
          }
        }
      }
    }
  }
}
</style>
