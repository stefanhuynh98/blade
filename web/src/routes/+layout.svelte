<script lang="ts">
    import '@fontsource-variable/sora';
    import '../app.css';
    import { NavBar } from '$lib/ui/index';

    let { children } = $props();
</script>

<NavBar />

{@render children()}
