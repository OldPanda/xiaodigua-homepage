<script setup lang="ts">
</script>

<template>
  <div class="container">
    <div class="title">联系我们</div>
    <p class="tagline">有想法建议？<a href="https://github.com/OldPanda/xiaodigua-homepage/issues/new" target="_blank"><i
          class="fa-regular fa-hand-point-right"></i>尽管提！</a></p>
  </div>
  <div class="media-logos">
    <!-- 神器集 -->
    <a href="https://hao.logosc.cn/p/1927" target="_blank"><img class="logo" src="/shenqiji.svg" /></a>
    <!-- 小众软件 -->
    <a href="https://www.appinn.com/xiaodigua-for-xhs/" target="_blank"><img class="logo" src="/appinn.png"
        style="height: 36px; margin-top: 40px;" /></a>
    <!-- 新趣集 -->
    <a href="https://xinquji.com/posts/807735" target="_blank"><img class="logo"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABkCAMAAACfFZZFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkE4RENGNzk1N0Q4MTFFOTlGN0Q5NTE2RDJEQjU3RDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkE4RENGN0E1N0Q4MTFFOTlGN0Q5NTE2RDJEQjU3RDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQThEQ0Y3NzU3RDgxMUU5OUY3RDk1MTZEMkRCNTdEOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQThEQ0Y3ODU3RDgxMUU5OUY3RDk1MTZEMkRCNTdEOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhBMzBAAAAERUExURV1bW8TDxJiWl/Dw8DEuL6elpk5MTXp5edPS0j89PuLh4WxqarW0tYmIiPn5+VNTU/39/XZ2diQkJPr6+s7OzqSkpCgoKBsbG/z8/PHx8dTU1LGxsR8fH62trQYGBgcHB1RUVP7+/iAgIBMTE6urq6qqqvLy8qOjo7q6uhoaGoaGhltbWwUFBbm5uYyMjPv7+0lJSebm5llZWXd3dzExMTY2NggICNPT03V1dYeHhxwcHAwMDPj4+NXV1bS0tFpaWkdHRyUlJSkpKYqKijc3Nw0NDWtrayYmJkhISDg4OLW1tYmJic3NzVxcXGxsbOXl5aysrBkZGampqerq6q6urrCwsPPz8yIfIP///wAAAP///9t1aEwAAABbdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wCc+ri8AAAL/klEQVR42uyd55bbNhaAUQmCZca9xE7suKT3nmzJ9t4bLb7/g+ywAyAA4lKkRI2FHz5nZIkS7wfcDhCV1bj41xfP3totPH5y74uXF+V5wAaq/vnPrd1K49abZxGDgTy4uVtx3HxwFjIQyKo8roichQwD8mK38nhxljIEyMUPawO5f7bsECB3d6uPd89iBgB5uj6Qy/CfQwnH9PUG8nh9II8Bv6e4GixNTlOYGPSyA8iT9YG8BQRSFOQ0edh/d8IEBMjuAAMKZAUeKOd4ZR5UFkVq0beoKCL6+gFJ8PR1ZbYmEFJ9RRSbL3P7y9ccCBZFwSevy8IvTBEGK6zmO8wLMevL1xsIj+qP8anronAe0QTg8ScawUsTZFq/HKHktQGS5I0o/ERgQGhNGGKLK0tRWIwFmZwq1wwITgtl8GWANDzsJtpnQApmmoqYAXlsHwj3mEPKpYojQiwYSII9I+qvGEokbt4/sjuRjdJJA+EF49O6qpIdSXwhmAmEFEEj0LJTaV+geWVVLDx4dqpAuPEnteoqlnIacl0FCEfViFpD3IyGL1JHDDEgwuZ4Icsv4x6tvG0g3NDliBFq6iqZ49DrIrurSjSxzohAhJ1HtW7y0srD7TFsGgjv9VHSi+wKyaCrrpZGArhuCyTuAS8DhNt5XHm8LHO+3WWfjgwEh6nyTma1yFoaMiUx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"
        style="height: 36px; margin-top: 40px;" /></a>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  text-align: center!important;
  max-width: 1152px;
}

.title {
  font-family: 'ZCOOL KuaiLe', cursive;
  font-size: 32px;
  margin-bottom: 30px;
}

.media-logos {
  margin-bottom: -150px;
  max-height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.logo {
  margin-left: 10px;
  margin-right: 10px;
}

@media (min-width: 256px) {
  .media-logos {
    margin-bottom: -120px;
  }
}
</style>
