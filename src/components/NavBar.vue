<template>
  <div id="NavBar">
    <ul class="contents">
      <li class="content">TOP</li>
      <li class="content">POST</li>
      <li class="content">SCHEDULE</li>
    </ul>
  </div>
</template>

<style>
#NavBar {
  padding: 0.1%;
  background-color: #b1221a;
  display: flex;
  justify-content: flex-end;
  box-sizing: 100%;
}
.contents {
  display: flex;
  list-style-type: none;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  margin-right: 7%;
}
.content {
  padding-right: 40%;
  color: white;
  font-family: "Bahnschrift SemiLight";
}
</style>
