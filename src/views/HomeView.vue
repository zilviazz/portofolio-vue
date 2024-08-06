<script>
export default {
  name : 'HomePage',
};
</script>

<template>
  <div class="home">
    <table>
      <tr>
        <td>
          <h1>Zilvi Azus Sriyanti</h1>
          <br>
          <h2>About</h2>
          <span class="hi"> Hello... </span>
          <p> My name is Zilvi, I am from Bojonegoro, Indonesia </p>
          <p class="info"> I am a fresh graduate of the Information Systems UPN "Veteran" Jawa Timur</p>
          <p>I have practical work experience in the field of website designer, as well as experience in studying data analytics and software engineering.</p>
          <p class="text"> I have an interest in data analysis, have analytical thinking skills, and am able to work in a team </p>
          <br>
          <h2>Quotes</h2>
          <p class="quote">"We must believe that hard work can beat talent even though it takes a long time"</p>
        </td>
        <td><img src="@/assets/home-img2.png" alt=""></td>
      </tr>
    </table>
  </div>
</template>

<style>
img{
  padding-left: 30px;
  width: 25rem;
}

.quote{
  font-style: italic;
}

@media (max-width: 350px) {
  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
