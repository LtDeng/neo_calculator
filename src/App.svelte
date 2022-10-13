<script>
  import Button from "./lib/components/Button.svelte";
  let value = "";

  const handleInput = (event) => {
    value = value + event;
  };

  const hancleClear = () => {
    value = "";
  };
</script>

<div class="root">
  <div class="calc neo_emboss">
    <div class="calc_screen neo_indent">{value}</div>
    <div class="calc_buttons">
      <div class="calc_numbers">
        <div>
          <Button on:click={() => handleInput("1")}>1</Button>
        </div>
        <div>
          <Button on:click={() => handleInput("2")}>2</Button>
        </div>
        <div>
          <Button on:click={() => handleInput("3")}>3</Button>
        </div>
        <div>
          <Button on:click={() => handleInput("4")}>4</Button>
        </div>
        <div>
          <Button on:click={() => handleInput("5")}>5</Button>
        </div>
        <div>
          <Button on:click={() => handleInput("6")}>6</Button>
        </div>
        <div>
          <Button on:click={() => handleInput("7")}>7</Button>
        </div>
        <div>
          <Button on:click={() => handleInput("8")}>8</Button>
        </div>
        <div>
          <Button on:click={() => handleInput("9")}>9</Button>
        </div>
        <div>
          <Button on:click={() => handleInput("0")}>0</Button>
        </div>
        <div>
          <Button on:click={() => handleInput(".")}>.</Button>
        </div>
        <div>
          <Button>=</Button>
        </div>
      </div>
      <div class="calc_ops">
        <Button fluid={true} on:click={hancleClear}>C</Button>
        <Button fluid={true}>+</Button>
        <Button fluid={true}>-</Button>
      </div>
    </div>
  </div>
</div>

<style>
  .root {
    display: grid;
    place-items: center;
  }

  .calc {
    display: grid;
    gap: 1rem;
    margin: 1rem;
    padding: 1rem;
  }

  .calc_buttons {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
  }

  .calc_ops {
    display: grid;
    gap: 1rem;
  }

  .calc_numbers {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1rem;
  }

  .calc_screen {
    font-size: 2rem;
    height: 50px;
    line-height: 50px;
    text-align: end;
    padding: 0.5rem;
    overflow-x: hidden;
    width: 260px;
  }
</style>
