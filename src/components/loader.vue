<template>

    <div class="loader df columna">
        <div class="spinner"></div>
        <p class="fuente blanco">Estamos cargando su destino...</p>
    </div>

</template>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 10px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>