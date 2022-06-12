<script context="module">
//export const prerender = true;
/*
  export async function load({ params, fetch, session, stuff }) {
    const res = await fetch('/apothegm', {
      method: "GET",
      headers: { 'content-type': 'application/json' }
    });
//    console.log("RES:" + res.status);
    return {
      props: {
        apothegms: await res.json()
      }
    };
  }
*/
</script>

<script>
import Counter from '$lib/Counter.svelte';

export let apothegms;

async function onSubmit(e) {
  const formData = new FormData(e.target);

  const data = {};
  for (let field of formData) {
    const [key, value] = field;
    data[key] = value;
  }
  console.log("formData: " + formData);

  const res = await fetch('/apothegm', {
    method: 'POST',
    body: JSON.stringify(data)
  })
	
  const json = await res.json();
  //result = JSON.stringify(json.apos);
  console.log("json::: " + JSON.stringify(json));
  getApothegms();
}
async function getApothegms() {
  const res = await fetch('/apothegm', {
    method: 'GET'
  });
  const json = await res.json();
  console.log("res:" + json); 
  apothegms = json;
//  return cats;
}
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <h1>
    <div class="welcome">
      <picture>
        <source srcset="svelte-welcome.webp" type="image/webp" />
        <img src="svelte-welcome.png" alt="Welcome" />
      </picture>
    </div>
    to your new<br />SvelteKit app
  </h1>
  <form on:submit|preventDefault={onSubmit}>
    <label for="apothegm">Apothegm</label>
    <input type="text" name="apothegm" id="apothegm"/>
    <label for="author">Author</label>
    <input type="text" name="author" id="author"/>
    <button type="submit">Submit</button>
  </form>

<div>
<ul>
  {#each apothegms.apos as apo}
    <li>
      {apo.apothegm}
    </li>
  {/each}
</ul>
</div>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
