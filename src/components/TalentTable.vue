<template>
  <div>
    <div class="d6">Rogue Leveling Talents</div>
    <div class="_display-flex _justify-content-center">

      <i-table variant="secondary"  hover>
        <thead>
        <tr>
          <th>Level</th>
          <th>Talent Tree</th>
          <th>Talent</th>
          <th>Points</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">10-11</th>
          <td>Assasination</td>
          <td><a href="https://classic.wowhead.com/spell=14148/">Remorseless Attacks</a></td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">12-13</th>
          <td>Combat</td>
          <td><a href="https://classic.wowhead.com/spell=13863/">Improved Sinister Strike</a></td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">14-16</th>
          <td>Combat</td>
          <td><a href="https://classic.wowhead.com/spell=13792/">Improved Gouge</a></td>
          <td>3</td>
        </tr>
        <tr>
          <th scope="row">17-21</th>
          <td>Combat</td>
          <td><a href="https://classic.wowhead.com/spell=13845/">Precision</a></td>
          <td>5</td>
        </tr>
        <tr>
          <th scope="row">22-26</th>
          <td>Combat</td>
          <td><a href="https://classic.wowhead.com/spell=13856">Deflection</a></td>
          <td>5</td>
        </tr>
        <tr>
          <th scope="row">27</th>
          <td>Combat</td>
          <td><a href="https://classic.wowhead.com/spell=14251/">Riposte</a></td>
          <td>1</td>
        </tr>
        <tr>
          <th scope="row">28-32</th>
          <td>Combat</td>
          <td><a href="https://classic.wowhead.com/spell=13852/">Dual Wield Specialization</a></td>
          <td>5</td>
        </tr>
        <tr>
          <th scope="row">33</th>
          <td>Combat</td>
          <td><a href="https://classic.wowhead.com/spell=13877/">Blade Flurry</a></td>
          <td>1</td>
        </tr>
        <tr>
          <th scope="row">34-38</th>
          <td>Combat</td>
          <td><a href="https://classic.wowhead.com/spell=13964/">Sword Specialization</a></td>
          <td>5</td>
        </tr>
        <tr>
          <th scope="row">39-40</th>
          <td>Combat</td>
          <td><a href="https://classic.wowhead.com/spell=30920/">Weapon Expertise</a></td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">41</th>
          <td>Combat</td>
          <td><a href="https://classic.wowhead.com/spell=18429/">Aggression</a></td>
          <td>1</td>
        </tr>
        <tr>
          <th scope="row">42</th>
          <td>Combat</td>
          <td><a href="https://classic.wowhead.com/spell=13750/">Adrenaline Rush</a></td>
          <td>1</td>
        </tr>
        <tr>
          <th scope="row">43-44</th>
          <td>Combat</td>
          <td><a href="https://classic.wowhead.com/spell=18429/">Aggression</a></td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">45-47</th>
          <td>Assasination</td>
          <td><a href="https://classic.wowhead.com/spell=14164/">Improved Eviscerate</a></td>
          <td>3</td>
        </tr>
        <tr>
          <th scope="row">48-52</th>
          <td>Assasination</td>
          <td><a href="https://classic.wowhead.com/spell=14142/">Malice</a></td>
          <td>5</td>
        </tr>
        <tr>
          <th scope="row">53</th>
          <td>Assasination</td>
          <td><a href="https://classic.wowhead.com/spell=14179/">Relentless Strikes</a></td>
          <td>1</td>
        </tr>
        <tr>
          <th scope="row">54-58</th>
          <td>Assasination</td>
          <td><a href="https://classic.wowhead.com/spell=14137/">Lethality</a></td>
          <td>5</td>
        </tr>
        <tr>
          <th scope="row">59-60</th>
          <td>Assasination</td>
          <td><a href="https://classic.wowhead.com/spell=14161/">Ruthlessness</a></td>
          <td>2</td>
        </tr>
        </tbody>
      </i-table>
    </div>
  </div>


</template>

<script>
    export default {
        name: "TalentTable"
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

    a{
        color: lightsalmon;
    }
</style>
