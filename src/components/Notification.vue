<template>
  <div class="notification">
    <div class="notification__title">
      {{ title }}
    </div>
    <div class="notification__message">
      {{ message }}
    </div>
    <div class="notification__footer">
      #somosrede
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Notification',
    props: {
      title: String,
      message: String,
    }
  }
</script>

