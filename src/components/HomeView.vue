<template>
<div>
  <span class="d1">Tirisfal Mafia</span>
  <div class="_display-flex _justify-content-center">
    <i-layout-aside>
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
      <a class="twitter-timeline" data-width="300" data-height="500" href="https://twitter.com/EsfandTV?ref_src=twsrc%5Etfw">Tweets by EsfandTV</a>
    </i-layout-aside>

    <div id="homeText">

      <p>Thank you for visiting my website.<br>
      I am not sure what this website will be in the end, but it started out as a small project to help myself get better at VueJS.</p>
      <p>Currently i've only added content related to my own character, but it might be used for more later.</p>

      <p>Not mobile friendly btw.</p>

      <p>Planned features:</p>
      <i-list-group size="sm">
        <i-list-group-item>Max Level Talents</i-list-group-item>
        <i-list-group-item>Profession Progression Path</i-list-group-item>
        <i-list-group-item>Gold Making Strat Section</i-list-group-item>
        <i-list-group-item><a href="https://gridsome.org" target="_blank">Grindsome</a> support</i-list-group-item>
        <i-list-group-item>Graphical Illustration of Build paths</i-list-group-item>
        <i-list-group-item>Economy tracker(?)</i-list-group-item>
      </i-list-group>

      <hr>
      <i>  " You'll be happy to know we appear to be making progress in the mine, thanks in no small part to your efforts. We can now turn our eyes to other concerns.
        <br><br>
        My scouts have reported that a detachment of the Scarlet Crusade is setting up a camp southeast of here. The Scarlet Crusade is a despicable organization that hunts us, and they will not rest until every undead--Lich King's Scourge or no--is destroyed. We must strike first!
        <br><br>
        Be careful, their unholy zeal makes them dangerous adversaries."</i>
      <hr>
      <i>  " Though the strength of the Scarlet Crusade wanes, we are still at war. The report Executor Arren sent me indicates Scarlet Crusaders have been raiding from the ruined tower in southeastern Tirisfal near the Balnir Farmstead under the command of Captain Vachon."</i>
      <hr>
      <i>“Can you not see it, brothers and sisters? There is but one way to wipe the Scourge from the face of Azeroth. The Scarlet Crusade offers you the protection that you so desperately desire, and if you will pledge yourselves to us, surely we will reach our ultimate goal. Defy us, and you will be dispatched in a blaze of golden light unlike any you have ever witnessed...”
        <br>
        — Scarlet Commander Renault Mograine
        </i>
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
