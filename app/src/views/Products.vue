<template>
  <div class="row">
    <div class="col-sm-12">
      <form>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea class="form-control"></textarea>
        </div>
        <button type="button" class="btn btn-primary btn-sm">Salvar</button>
      </form>

      <router-link to="/products/table">Products</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "products",
};
</script>
