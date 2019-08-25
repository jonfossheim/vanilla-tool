<template>
  <div>
    <div class="d6">Professions</div>
    <div class="_display-flex _justify-content-center">
      <i-table variant="secondary" hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Character</th>
          <th>Primary</th>
          <th>Secondary</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">#</th>
          <td>Jerrik</td>
          <td>Skinning</td>
          <td>Leatherworking</td>
        </tr>
        <tr>
          <th scope="row">#</th>
          <td>Socrates</td>
          <td>Herbalism</td>
          <td>Alchemy</td>
        </tr>
        </tbody>
      </i-table>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Professions"
    }
</script>

<style scoped>
  .d6{
    margin-bottom: 1rem;
  }

  div {
    margin: 0 auto;
    width: 80vw;
  }
</style>
