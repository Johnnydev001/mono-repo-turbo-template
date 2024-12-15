<script lang="ts">
  import {CustomButton} from 'svelte-ui'
  import {getCurrentDateTime} from "time-utils";
  
  let count: number = $state(0)
  const increment = () => {
    count += 1
  }
</script>

<CustomButton onclick={increment} title={'title'} text={`time is ${count + getCurrentDateTime(new Date())}`}/>

