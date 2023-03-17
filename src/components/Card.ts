export default (row: Record<string, string | number>) => /*html*/ `
<div class="card bg-black">
  <div class="card-body">
    <span class="text-primary">${row.name}</span>
  </div>
</div>`;
