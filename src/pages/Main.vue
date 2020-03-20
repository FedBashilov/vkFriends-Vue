<template>
  <div class="main">
    <div class="page_title">
      ВОвконтакте
    </div>
    <div class="friend_list_wrapper">
      <div class="friends_list_title">
        Мои друзья
      </div>
      <AppFriendList></AppFriendList>
    </div>
  </div>
</template>

<script>
import AppFriendList from './../components/Friend-list'

export default {
  name: 'Main',
  components: {
    AppFriendList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page_title{
    text-align: center;
    background: #4a76a8;
    color: #fff;
    padding: 8px 0;
    font-size: 1.3em;
  }

  .friends_list_title{
    padding-left: 10px;
    padding-top: 10px;
    font-size: 1.15em;
  }

  .friend_list_wrapper{
    width: 80%;
    margin-left: 10%;
    border: 1px solid #daebf2;
    background-color: #fff;
  }
</style>
