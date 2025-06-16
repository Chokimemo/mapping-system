<template>
  <div class="bg">
    <div class="container">
      <div class="container-loginpage">
        <div class="content-loginpage">
          <div class="logo"><img src="~@/assets/mapping-Web.png" alt=""></div>
          <form>
            <h1>username</h1>
            <div class="icon">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="Your username" required>
            </div>
            <h1>password</h1>
            <div class="icon">
              <i class="fa-solid fa-key"></i>
              <input type="password" placeholder="Your password" required>
            </div>
            <button class="login" type="button">login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bg {
  background-image: url('~@/assets/mapping-Login.jpg');
}

.container {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
}

.container-loginpage {
  display: flex;
  justify-content: right;
  align-items: center;
  height: 100vh;
  margin-right: 10%;
}

.content-loginpage {
  background: rgb(245, 245, 245, 0.7);
  padding: 10px;
  border-radius: 20px;
}

.logo {
  max-width: max-content;
  width: max-content;
  margin: 0 auto;
}

.logo img {
  width: auto;
  height: 200px;
}

form {
  display: flex;
  flex-direction: column;
  max-width: max-content;
  padding: 0 10px;
}

form h1 {
  color: #444444;
  font-size: 20px;
  text-transform: uppercase;
}

.icon i{
  margin-right: 10px;
}

form input {
  max-width: 300px;
  min-width: 300px;
  width: 300px;
  height: 50px;
  border: 0;
  border-radius: 25px;
  background-color: #99CCFF;
  padding: 5px;
  outline: none;
  margin: 10px 0;
}

form input::placeholder {
  font-size: 15px;
  padding-left: 5px;
}

form button.login {
  width: 100%;
  padding: 10px;
  background: #1E90FF;
  color: whitesmoke;
  font-size: 20px;
  border: 0;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  margin: 10px auto;
  text-transform: uppercase;
}
</style>