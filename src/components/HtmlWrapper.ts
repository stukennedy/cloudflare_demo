export default (children: string) => /*html*/ `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Clouflare Demo</title>
    <link href="/styles.css" rel="stylesheet" />
    <link href="/roboto.css" rel="stylesheet" />
    <script src="/htmx.min.js"></script>
    <script src="/_hyperscript.min.js"></script>   
    <script src="/feather-icons.min.js"></script>
  </head>  
  <body>
    <div class="font-roboto" data-theme="continuata">
      ${children}
    </div>
    <div id="modal"></div>
    <div id="toast"></div>

    <script>
      feather.replace();
    </script>
  </body>
</html>
`;
