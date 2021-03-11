<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Todolist</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/tasks">Tasks</b-nav-item>
          <b-nav-item to="/products">Products</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"> </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="container-fluid mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>