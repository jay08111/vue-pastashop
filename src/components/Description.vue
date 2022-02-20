<template>
  <section>
    <img src="https://filehandler.revlocal.com/335182" alt="logo" class="img" />
    <section class="container">
      <div></div>
    </section>
    <section class="description__container">
      <article>
        <div>
          <h1>Italian Food New Albany, IN</h1>
          <div class="underline"></div>
          <p class="description main">
            Italian food is just one click away for Southern Indiana. At
            <strong>The Spaghetti Junction,</strong> we serve all your favorite
            Italian masterpieces. So think of your favorite fettuccine Alfredo
            or lasagna dish and we'll whip it up for you. Italian comfort food
            is our way of leaving you feeling delighted. So order from our menu
            today when you call us at
            <strong style="color: #0070d2">(123) 456-7890.</strong>
          </p>
        </div>
        <div>
          <h2>Known For The Garlic</h2>
          <p class="description">
            Garlic bread goes with everything on our menu. Pair it with pasta or
            fill it with your favorite sandwich fix-ins and you've got a pungent
            meal. We serve some of the best garlic bread (and other garlic-y
            items) items in New Albany, IN, making us the leading Italian
            restaurant in the area. With a full menu of spaghetti, pasta dishes,
            desserts, subs, salads, pizza, and more, we have all the dine-in and
            carryout items you could want. We cater to events, too! If looking
            for affordable prices and great food, then contact our Italian
            restaurant for your next meal!
          </p>
        </div>
        <div>
          <h3 style="text-align: left; font-size: 2rem; margin-bottom: 30px">
            Delicious Italian Favorites
          </h3>
          <div>
            <ul>
              <li>
                <strong>Spaghetti:</strong> Baked, Tomato Sauce, Meat Sauce,
                Spaghetti Supreme, No Sauce
              </li>
              <li>
                <strong>Baked Pasta:</strong> Lasagna, Manicotti, Baked Cajun
                Chicken Pasta, Baked Spaghetti
              </li>
              <li>
                <strong>Alfredo Dishes:</strong> Fettuccini Alfredo, Chicken
                Alfredo
              </li>
              <li>
                <strong>Other Specialties:</strong> Garlic Bread, Meatballs,
                Pizza, Desserts, Salads
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Call Us For Catering</h2>
          <p class="description">
            Are you planning a party with all of your family and friends? We can
            help you throw the ultimate bash with our convenient catering
            service. Let us cater your next big event with all of your favorites
            on our menu, including our Italian party packs which are perfect for
            parties of all sizes. Whether it's tender pasta, crisp salads,
            mouthwatering sauces, or tantalizing desserts you crave, we are your
            go-to caterer for delicious, affordable Italian food -- guaranteed!
            Call us today at
            <strong style="color: #0070d2">(123) 456-7890</strong> to schedule a
            catering service.
          </p>
        </div>
        <div>
          <h2>Order Now</h2>
          <p class="description">
            If it's dinner time right from the comfort of your dinner table at
            home or time for a big event, you can count on our meals being
            crowd-pleasers. Dine-in or call us at
            <strong style="color: #0070d2">(123) 456-7890</strong> to place your
            order now or ask any additional questions!
          </p>
        </div>
      </article>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
section {
  .img {
    height: auto;
    width: 20vw;
    display: block;
    padding: 40px 0;
    margin: 0 auto;
  }
  .container {
    background-color: map-get($colors, "secondary");
    height: 10vh;
  }
  .description__container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1250px;
    margin: 0 auto;
    article {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 80px;
      padding: 100px 180px;
      h1,
      h2,
      h3 {
        color: map-get($colors, "secondary");
        font-family: map-get($fontFamily, "Staatliches"), sans-serif;
        font-weight: normal;
        font-size: 2.8rem;
      }
      p {
        font-family: map-get($fontFamily, "Source Sans Pro"), sans-serif;
        line-height: 1.5;
        display: block;
        font-size: map-get($fontSize, "middle");
        text-align: left;
      }
      h1 {
        font-size: 4rem;
      }
      div {
        .underline {
          width: 25vw;
          background: map-get($colors, "secondary");
          height: 0.25rem;
          margin: 0 auto;
        }
        .description {
          margin-top: 20px;
        }
        .main {
          margin-top: 50px;
        }
        ul {
          text-align: left;
          padding: 0 0 0 50px;
          line-height: 1.5;
          font-size: 1.2rem;
          font-family: map-get($fontFamily, "Source Sans Pro"), sans-serif;
        }
      }
    }
  }
}
</style>
