<script lang="ts">
    import { PrivateKey } from '@bsv/sdk'

    let WIF:string
    let address:string
    let showKey = false;

    function createKeys() {

        const privKey = PrivateKey.fromRandom()
        WIF = privKey.toWif()
        console.log("Private Key IF format is ", WIF)
        address = privKey.toAddress()
        console.log("Your bitcoin address is ",address)
        showKey = !showKey;

    }


</script>


<section>
    <button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded " on:click={createKeys}> Generate New Wallet Keys</button>
    <p class="mt-4" class:fade={!showKey}  >Private Key WIF format is <span class="wif" id="wif">{WIF}</span></p>
    <p class="mt-4" class:fade={!showKey}  >Your Bitcoin Address is <span class="wif" id="address">{address}</span></p>
</section>
<style>
    .wif{
  color: rgb(52, 18, 224); 
}
   .fade {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;  }

  .fade.true {
    opacity: 1; 
  }
</style>