<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 pl-2 pb-2 text-sm w-full"
  >
    <div class="flex items-center">
      <div>
        Node.js基础 &nbsp; | &nbsp; Powered By
        <mdi-briefcase class="text-orange-800" />
        &nbsp; | &nbsp; hjp @ Jul. 31, 2024
      </div>
    </div>
  </footer>
</template>
