<template>
    <footer>
        <p>All rights reserved to Haanim's Closet <i class="far fa-copyright"></i> {{ currentYear }}.</p>
    </footer>
</template>
<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
<style>
footer {
  background-color: #fff;
  padding: 10px;
  color: #000;
  text-align: center;
}
</style>