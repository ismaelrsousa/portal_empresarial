<template>
  <main class="login-page">
    <div class="container content">
      <div class="card">
        <div class="top">
          <img src="../../assets/logo-white.svg" alt="" class="logo">

          <p class="desc">Bem vindo ao <strong>Portal Leviathan</strong>. <br> Preencha com seu usuário e senha para continuar</p>
        </div>

        <form action="" class="form">
          <label class="label">
            <p class="desc">Usuário:</p>
            <div class="input-container">
              <input type="text" class="input" name="user" placeholder="Usuário" required>
              <div class="right-tag">@leviathan.com.br</div>
            </div>
          </label>

          <label class="label">
            <p class="desc">Senha:</p>
            <input type="password" class="input" name="user" placeholder="************" required>
            <a href="#" class="forgot-password">Esqueci minha senha</a>
          </label>

          <button type="submit" class="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ScreenLogin'
}
</script>

<style lang="scss">@import '../../assets/scss/main.scss';</style>
