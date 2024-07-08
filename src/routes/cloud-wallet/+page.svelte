<script lang="ts">
  /** @type {import('./$types').ActionData} */
  export let form;
  console.log("from :: ", form)

</script>
  
  <div class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">
    <form method="POST" action="?/login" class="space-y-6" >
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full px-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
            Email
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Enter email" name="email" required />
        </div>
        <div class="w-full px-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">
            Password
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password" placeholder="Enter password" name="password" required />
        </div>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded tracking-widest">
          LOGIN
        </button>
      </div>
    </form>
    {#if form?.success}
    <p class="pt-2 text-black">Login successful. Your balance is {form.balance.data.balance.summary}</p>
  {/if}
  
  </div>
  