<script>
  export let form;
</script>
<div class="w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">
  <form method="POST" action="?/deploy">
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label for="bounty" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Bounty</label>
        <input id="bounty" name="bounty" type="number" placeholder="bounty amount" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label for="square" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Enter the number whose square root is on bounty</label>
        <input id="square" name="square" type="number" placeholder="Enter square" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <button type="submit" class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded">Deploy Bounty</button>
      </div>
    </div>
  </form>
  {#if form?.deployed}
  <p class="pt-2 font-semibold">
    Bounty was deployed successfully: <a
      class="underline font-semibold"
      target="_blank"
      href={`https://whatsonchain.com/tx/${form?.txid}`}>Trasaction Link</a
    >!
  </p>
  {:else if form?.deployed === false}
  <p >{form?.txid}</p>
{/if}
</div>

<div class="w-full max-w-xl p-12 mx-auto mt-10 rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">
  <form method="POST" action="?/unlock">
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label for="root" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Root</label>
        <input id="root" name="root" type="number" placeholder="Root answer" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <button type="submit" class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded">Unlock Bounty</button>
      </div>
    </div>
  </form>
  {#if form?.success}
  <p class="font-semibold">
    Bounty was unlocked successfully: <a
      class="text-indigo-500 underline font-semibold"
      target="_blank"
      href={`https://whatsonchain.com/tx/${form?.txid}`}>Trasaction Link</a
    >!
  </p>
{:else if form?.success === false}
  <p class=" font-semibold">
    {form?.txid} 
  </p>
{/if}
</div>
