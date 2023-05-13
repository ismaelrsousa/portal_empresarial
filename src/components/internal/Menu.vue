<template>
  <header class="menu-component">
    <div class="content container-fluid">
      <div class="left">
        <a href="#" class="logo-container">
          <img src="../../assets/logo-white.svg" alt="" class="logo">
        </a>

        <ul class="menu">
          <li class="item">
            <a href="#" class="link">
              <font-awesome-icon icon="fa-people-group" class="icon" />
              <span class="desc">Equipe</span>
            </a>
          </li>
          <li class="item">
            <a href="#" class="link">
              <font-awesome-icon icon="fa-clipboard-list"  class="icon" />
              <span class="desc">Tarefas</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="right">
        <ul class="indicators">
          <li class="item">
            <div class="toggle">
              <font-awesome-icon icon="fa-clock" class="icon" />
              <span class="percentage">70%</span>
            </div>
          </li>

          <li class="item">
            <div class="toggle">
              <font-awesome-icon icon="fa-clock" class="icon" />
              <span class="percentage">24%</span>
            </div>
          </li>

          <li class="item">
            <div class="toggle">
              <font-awesome-icon icon="fa-bullseye" class="icon" />
              <span class="percentage">96%</span>
            </div>
          </li>
        </ul>

        <a href="#" class="toggle-dark-mode">
          <span class="item dark active">
            <font-awesome-icon icon="fa-moon" class="icon" />
          </span>
          <span class="item light">
            <font-awesome-icon icon="fa-sun" class="icon" />
          </span>
        </a>

        <div class="user-container">
          <div class="toggle">
            <div class="pic-container">
              <img src="../../assets/profile-pic.png" alt="" class="pic">
            </div>

            <div class="description">
              <p class="desc">Olá, <span class="name">Ismael</span> <font-awesome-icon icon="fa-angle-down" class="icon" /></p>
              <div class="bar-container"><span class="bar blue" style="width: 60%"></span></div>
              <div class="bar-container"><span class="bar green" style="width: 40%"></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>