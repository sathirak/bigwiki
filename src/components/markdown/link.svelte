<script>
	export let href = '';
	export let title = undefined;
</script>

<a {href} {title} class="link text-slate-500 underline">
	<slot></slot>
	<div class="popup size-24 bg-slate-400 z-10">
		<img src="/link.png" alt="" srcset="" />
	</div>
</a>

<style>
.link {
	position: relative;
	display: inline-block;
}

.popup {
	display: none;
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	margin-top: 8px;
	padding: 5px;
	background-color: white;
	border: 1px solid #ccc;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.link:hover .popup {
	display: block;
}
</style>
