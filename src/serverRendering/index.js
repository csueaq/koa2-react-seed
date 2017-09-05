export function renderFullPage() {
    return `
    <!doctype html>
    <html>
      <head>
        <title>POC site 1</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body>
        <div id="content"></div>
        
        <script type="text/javascript" src="/js/bundle.js"></script>
                  
      </body>
    </html>
    `;
}