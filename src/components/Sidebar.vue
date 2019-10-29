<template>
  <div class="sidebar">
    <h3>Catalogue</h3>
    <ul>
      <li>
        <a href="#">ALL</a>
      </li>
      <li>
        <a href="#" @click="openDeck = !openDeck">DECKS ▾</a>
        <ul class="items" :class="{'openItem':openDeck}">
            <li>
              <a href="#">SKATEBOARDS</a>
            </li>
            <li>
              <a href="#">LONGBOARDS</a>
            </li>
            <li>
              <a href="#">ELECTRICBOARD</a>
            </li>
        </ul>
      </li>
      <li>
        <a href="#" @click="openBrand = !openBrand">BRAND ▾</a>
        <ul class="items" :class="{'openItem':openBrand}">
            <li>
              <a href="#">Vans</a>
            </li>
            <li>
              <a href="#">Nike</a>
            </li>
            <li>
              <a href="#">Adidas</a>
            </li>
        </ul>
      </li>
      <li>
        <a href="#">EXTRA</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openDeck: false,
      openBrand: false,
    };
  },
  methods: {
  },
};
</script>
