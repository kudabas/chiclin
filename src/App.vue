<template>
  <div>
    <NavbarDigdaya/>
  <router-view/>
</div>
</template>

<script>
import NavbarDigdaya from './components/NavbarDigdaya.vue' ;

export default {
    components: {
    NavbarDigdaya
}
}
</script>
