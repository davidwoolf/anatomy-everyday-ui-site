<script>
  import Column from "./column.svelte";
  import Separator from "@components/separator.svelte";
</script>

<Column column="1" span="12">
  <div>
    <Separator />
  </div>
</Column>

<style>
  div {
    /* necessary to offset required row gap on small devices */
    margin: 2.25rem 0;
  }

  @media (min-width: 1024px) {
    div {
      margin: 6rem 0;
    }
  }
</style>
