<script>
  import Example from "@components/example.svelte";
  import Card from "@components/card.svelte";
  import Number from "@components/editing/number.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: ".card",
      value: [
        {
          property: "position",
          value: "static",
          type: "select",
          options: ["static", "relative", "absolute"],
        },
        {
          property: "left",
          value: "0",
          type: "text",
        },
        {
          property: "top",
          value: "0",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="container">
      <div
        style:position={code[0].value[0].value}
        style:left={code[0].value[1].value}
        style:top={code[0].value[2].value}
        style:inline-size="90%">
        <Card />
      </div>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .container {
    border: 1px dashed var(--color-gray-300);
    align-items: center;
    justify-content: center;
    display: flex;
    inline-size: 32rem;
    max-inline-size: 100%;
    block-size: 26rem;
    position: relative;
    overflow: hidden;
  }
</style>
