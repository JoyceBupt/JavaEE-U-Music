<template>
  <div class="container-box">
    <div class="main-container">
      <div class="data">
        <span>Error 404</span>
        <h1 class="title">Hey Buddy</h1>
        <p>We can't seem to find the page <br/>you are looking for.</p>
        <router-link to="/" class="button">Go Home</router-link>
      </div>

      <div class="ghost-img">
        <img src="@/assets/images/ghost.svg" alt="ghost"/>
        <div class="ghost-shadow"></div>
      </div>
    </div>

    <div class="main-footer">
      <span>JAVAEE</span>
      <span>|</span>
      <span>JoyceBupt@gmail.com</span>
    </div>
  </div>
</template>

<style scoped>
.container-box {
  background-color: #F5CBDE;
  display: grid;
  height: 100vh;
  color: #161513;
  font-size: 18px;
  font-weight: 500;
}

.main-container {
  display: grid;
  align-content: center;
  row-gap: 40px;
}

.data {
  text-align: center;
}

.title {
  font-size: 38px;
  margin: 12px 0;
}

.button {
  display: inline-block;
  margin-top: 32px;
  padding: 12px 24px;
  background-color: #161513;
  color: #fff;
  border-radius: 48px;
  transition: 0.4s;
}

.button:hover {
  box-shadow: 0 4px 12px rgba(34, 24, 6, 0.2);
}

.ghost-img {
  justify-self: center;
}

.ghost-img img {
  width: 230px;
  animation: floaty 1.8s infinite alternate;
}

@keyframes floaty {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(15px);
  }
}

.ghost-shadow {
  width: 130px;
  height: 24px;
  background-color: rgba(60, 52, 38, 0.16);
  border-radius: 50%;
  margin: 0 auto;
  filter: blur(7px);
  animation: shadow 1.8s infinite alternate;
}

@keyframes shadow {
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(0.85, 0.85);
  }
}

.main-footer {
  align-self: flex-end;
  display: flex;
  justify-content: center;
  font-size: 12px;
  column-gap: 8px;
}
</style>

<script setup lang="ts">
</script>
