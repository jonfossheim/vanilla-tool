<template>
  <div>
    <div class="d6">Rogue Leveling Talents</div>
    <i-button-group size="md">
      <i-button outline variant="secondary" v-on:click="component='LevelingTalents'">Leveling Talents</i-button>
      <i-button outline variant="secondary" v-on:click="component='MaxTalents'">Max Level Talents (PvE)</i-button>
    </i-button-group>
    <div class="_display-flex _justify-content-center">
      <component v-bind:is="component"></component>
    </div>
  </div>


</template>

<script>
  import LevelingTalents from "./LevelingTalents";
  import MaxTalents from "./MaxTalents";

    export default {
        name: "TalentTable",
        components:{
            'LevelingTalents': LevelingTalents,
            'MaxTalents': MaxTalents
        },
        data(){
            return{
                component:'LevelingTalents'
            }
        }
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
