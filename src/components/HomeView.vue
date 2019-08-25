<template>
<div>
  <span class="d1">Tirisfal Mafia</span>
  <div class="_display-flex _justify-content-center">
    <i-card>
      <img class="cardimage" slot="image" src="https://cdn.images.express.co.uk/img/dynamic/143/590x/WoW-Classic-1169337.jpg?r=1566569693054" alt="Ragnaros" />
      <i-table>
        <tbody>
        <tr>
          <th scope="row">Name:</th>
          <td>Jerrik</td>
        </tr>
        <tr>
          <th scope="row">Race:</th>
          <td>Undead</td>
        </tr>
        <tr>
          <th scope="row">Class:</th>
          <td>Rogue</td>
        </tr>
        <tr>
          <th scope="row">Occupation:</th>
          <td>Student</td>
        </tr>
        </tbody>
      </i-table>
    </i-card>
    <div id="homeText">

      <p>Thank you for visiting this website.<br>
      I am not sure what this website will be in the end, but it started out as a small project to help myself get better at VueJS.</p>
      <p>Currently i've only added content related to my own character, but it might be used for more later.</p>
      <p>Planned features:</p>
      <i-list-group size="sm">
        <i-list-group-item>Max Level Talents</i-list-group-item>
        <i-list-group-item>Profession Progression Path</i-list-group-item>
        <i-list-group-item>Gold Making Strat Section</i-list-group-item>
        <i-list-group-item>WoW API support</i-list-group-item>
      </i-list-group>
    </div>
  </div>
</div>


</template>

<script>
    export default {
        name: "HomeView"
    }
</script>

<style scoped>
  .card {
    width: 300px;
    margin: 2rem;
    text-align: left;
  }
  .cardimage {
    height: 200px;
  }

  #homeText {
    max-width: 60vw;
    min-width: 150px;
    text-align: left;
  }
</style>
