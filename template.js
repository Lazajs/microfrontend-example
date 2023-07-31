function createTemplate (PORT=3000) {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>web-components-test</title>
    </head>
    <body>
      <div id="app"></div>
      <script>
        const container = document.getElementById('app');

        function loadMicrofrontend (name, url) {
          const script = document.createElement('script')

          script.src = url

          script.onload = () =>{ 
            const element = document.createElement(name)
            container.appendChild(element)
          }

          document.head.appendChild(script)
        }

        loadMicrofrontend('mf-1', 'http://localhost:${PORT}/mf-1.js')
        loadMicrofrontend('mf-2', 'http://localhost:${PORT}/mf-2.js')
      </script>
    </body>
    </html>
  `
}


module.exports = createTemplate