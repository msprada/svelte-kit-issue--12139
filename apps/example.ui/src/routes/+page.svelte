<script lang="ts">
	import { OrderDto } from 'data-access-models';
	const order: OrderDto = new OrderDto();
	order.id= 67878678;
</script>

<h1>Welcome to SvelteKit Issue 12139</h1>
<h3> Here you can see the order object imported from a shared lib:</h3>
<p> The order id is {order.id}. </p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
