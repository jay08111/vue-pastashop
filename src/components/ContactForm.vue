<template>
  <section>
    <form>
      <div class="form__header">
        <h2>contact us to cater your event</h2>
        <div class="underline"></div>
      </div>
      <div class="form__container">
        <div class="form__input">
          <label>* Name</label>
          <input type="text" required />
        </div>
        <div class="form__input">
          <label>* Your Email Address</label>
          <input type="email" required />
        </div>
        <div class="form__input">
          <label>Phone Number</label>
          <input type="text" />
        </div>
        <div class="form__input">
          <label>Subject</label>
          <input type="text" />
        </div>
        <div class="form__input">
          <label>* Message</label>
          <input type="text" required />
        </div>
        <div class="form__input">
          <label> Attach File: (4MB Limit)</label>
          <input type="text" />
        </div>
        <button>Submit</button>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
section {
  background-image: url("https://www.italianfoodnewalbany.com/image/329185/");
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  min-height: 90vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    display: block;
    position: absolute;
    min-height: 90vh;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(32, 26, 22, 0.4);
  }
  form {
    z-index: 10;
    font-family: map-get($fontFamily, "Source Sans Pro");
    .form__header {
      padding: 10px 20px;
      color: map-get($colors, "white");
      background-color: map-get($colors, "secondary");
      border-radius: 10px;
      h2 {
        font-size: 2.4rem;
        text-transform: uppercase;
        font-family: map-get($fontFamily, "Staatliches");
        font-weight: normal;
      }
      .underline {
        width: 5vw;
        background: map-get($colors, "white");
        height: 0.03rem;
        margin: 10px auto 0;
      }
    }
    .form__container {
      margin-top: 20px;
      background-color: map-get($colors, "secondary");
      border-radius: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      outline: 0;
      .form__input {
        display: flex;
        flex-direction: column;
        padding: 5px 10px;
        label {
          color: map-get($colors, "white");
        }
        input {
          border: 1px solid #fff;
          padding: 10px;
          margin-top: 10px;
          background-color: transparent;
        }
      }
      button {
        width: 90%;
        padding: 15px;
        margin: 0 auto;
        margin-top: 20px;
        color: map-get($colors, "white");
        border: none;
        background-color: map-get($colors, "primary");
      }
    }
  }
}
</style>
