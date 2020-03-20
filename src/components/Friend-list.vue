<template>
  <div class="friend-list">
    <div class="wrapper">
      <div class="friend_card" *ngFor="let friend of friends; index as i;">
        <div class="friend_image">
          <img class="friend_card_image" height="100px" width="100px" [defaultImage]="'assets/loading.png'" [lazyLoad]=friend.photo_100>
        </div>
        <div class="friend_description">
          <div class="friend_first_name">
            {{friend.first_name}}
          </div>
          <div class="friend_last_name">
            {{friend.last_name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Friend-list',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper{
    padding: 20px;
    display: grid;
    grid-template-columns: 1;
  }

  .friend_card_image{
    border-radius: 50%;
    margin-right: 5px;
  }

  .friend_card{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
  }

  .friend_card:nth-child(n+2){
    border-top: 1px solid #daebf2;
  }
</style>
