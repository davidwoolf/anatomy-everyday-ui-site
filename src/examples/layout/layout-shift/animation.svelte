<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";
  import Card from "@components/card.svelte";

  let code = [
    {
      selector: "div",
      value: [
        {
          property: "animation",
          value: "transform",
          type: "select",
          options: ["transform", "width"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div
      class="container"
      style:inline-size={code[0].value[0].value === "transform" ? "100%" : "19.2rem"}
      style:transform={code[0].value[0].value === "transform"
        ? "scale(80%)"
        : "scale(100%)"}
      style:animation-name={code[0].value[0].value === "transform"
        ? "transforms"
        : "composites"}>
      <Card padding="3rem" width="22rem" />
    </div>
  </svelte:fragment>

  <svelte:fragment slot="controls">
    <CSSEditor
      allowCopying={false}
      value={code}
      on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .container {
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-play-state: running;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    display: flex;
    justify-content: center;
  }

  @keyframes -global-transforms {
    from {
      transform: scale(80%);
    }

    to {
      transform: scale(100%);
    }
  }

  @keyframes -global-composites {
    from {
      inline-size: 80%;
    }

    to {
      inline-size: 100%;
    }
  }

  @media (min-width: 480px) {
    @keyframes -global-composites {
      from {
        inline-size: 19.2rem;
      }

      to {
        inline-size: 24rem;
      }
    }
  }
</style>
