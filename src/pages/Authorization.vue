<template>
  <div class="authorization">
    <div class="wrapper">
      <div class="window">
        <div class="authorization_text">
          Прежде чем начать работу с приложением, необходимо авторизироваться через ВКонтакте
        </div>
        <a class="oauth_link"
          href="https://oauth.vk.com/authorize?client_id=7369749&redirect_uri=http://localhost:8080&display=page&&scope=friends,offline&response_type=token&v=5.52">
          Войти с VK
        </a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Authorization',
  beforeCreate(){
    if( localStorage.getItem("access_token") ){
      this.$router.push("main");
    }
  }
}
</script>


<style scoped>
  .wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }

  .window{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: 20px 10px;
    box-shadow: 0 0 10px #4a76a8;
  }

  .oauth_link{
    border-radius: 4px;
    margin-top: 8px;
    padding: 6px 15px;
    color: #fff;
    text-decoration: none;
    background: #4a76a8;
    box-shadow: 0 0 10px #4a76a8;

    -webkit-transition-duration: 0.2s;
    -moz-transition-duration: 0.2s;
    -o-transition-duration: 0.2s;
    transition-duration: 0.2s;
  }

  .oauth_link:active{
    transform: scale(0.95);
  }
</style>
