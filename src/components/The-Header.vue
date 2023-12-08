<template>
  <header>
    <nav id="navbar">
      <h1 class="text"><routerlink to="/"> Find a Coach </routerlink></h1>
      <div>
        <button class="button">
          <router-link to="coaches"> All Coaches </router-link>
        </button>
        <button class="button">
          <router-link to="requests"> Requests </router-link>
        </button>
      </div>
    </nav>
  </header>
</template>

<style>
#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #3d008d;
  overflow: hidden;
  color: white;
}

.text {
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.button {
  background-color: #8d006e;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20px;
}
header a{
    text-decoration: none;
    color: white;
}


.button:hover {
  /* background-color: #45a049; */
}
</style>
