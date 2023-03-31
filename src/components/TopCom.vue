<template>
  <div class="header">
    <div class="left-icon">
      <img src="left-icon.png" alt="Left Icon">
    </div>
    <div class="github-button">
      <a href="https://github.com">
        <button>Go to GitHub</button>
      </a>
    </div>
    <div class="right-icon">
      <img src="right-icon.png" alt="Right Icon">
    </div>
  </div>
</template>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
  background-color: #f5f5f5;
}

.left-icon img,
.right-icon img {
  height: 40px;
}

.github-button button {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #4CAF50;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.github-button button:hover {
  background-color: #3e8e41;
}
</style>
