<template>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mooli&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

$main: #a50034;
$main2: #ee70a7;
$violet: #62477a;
$light: #e3e3e3;
$gray: #c6cbcc;
$dark_gray: #7c888c;
$dark: #28353a;
$black: #1b2023;
$bg: #09151e;

*,
*:before,
*:after {
  box-sizing: border-box;
  position: relative;
}

*::-moz-selection {
  /* Code for Firefox */
  background: #00a3cc !important;
}

*::selection {
  background: #00a3cc !important;
}

html {
  font-family: 'Rubik', sans-serif !important;
}

body {
  padding: 0px !important;
  margin: 0px !important;
  overflow-x: hidden;
  background-color: #09151e;
  min-height: 100vh;
  color: #cdcdcd;
  font-family: 'Rubik', sans-serif !important;
}

a {
  text-decoration: none;
  color: #cdcdcd;
  cursor: pointer;
}

input,
button,
select,
textarea {
  font-family: 'Rubik', sans-serif;
  border: none;
  background-color: #e3e3e3;
  color: #333;
  padding: 0;
}

button,
select {
  cursor: pointer;
}

button:focus,
input:focus,
select:focus,
textarea:focus {
  outline: 0 !important;
}

::-webkit-scrollbar {
  width: 0.5rem;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient($main, $main2);
  border-radius: 4px;
}

img {
  pointer-events: none;
}
</style>
