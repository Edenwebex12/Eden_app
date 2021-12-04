<template>
  <ul>
    <div v-for="(message, index) in messages" v-bind:key="index" class="posts">
      <div class="post">
        <div class="message-header">
          <div>{{ message.title }}</div>
          <div>{{ message.date }}</div>
          <div>{{ message.emotion }}</div>
        </div>
        <div>{{ message.text }}</div>
        <div>{{ message.photo }}</div>
        <div class="message-buttons">
          <a class="message-button">編集</a>
          <a class="message-button">削除</a>
        </div>
      </div>
    </div>
  </ul>
</template>
