export function renderFullPage(html,initialState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>POC site 1</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body style='margin-top:0 !important'>
        <div id="content">${html}</div>
        <script>
          window.__INITIAL_STATE__ = "${encodeURIComponent(JSON.stringify(initialState))}";
        </script>  
        <script type="text/javascript" src="/js/bundle.js"></script>
        
      </body>
    </html>
    `;
}