<!DOCTYPE html>
<html>
  <head>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="css/styles.css" rel="stylesheet" type="text/css">
   
    <script
    src="https://code.jquery.com/jquery-3.5.1.js"
    integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
    crossorigin="anonymous">
    </script>
    
    
    <script src="js/scripts.js"></script>

    <title>Talk to the web page</title>
  </head>
  <body>
    <div class="container">
      <h1>Talk to the web page</h1>
      <p>Click a button to say something to the web page. See what it says back!</p>

      <button class="btn btn-primary" id="hello">Say "hello"</button>
      <button class="btn btn-inverse" id="goodbye">Say "goodbye"</button>
      <button class="btn btn-danger" id="stop">Say "stop copying me!"</button>

      <div class="row">
        <div class="col-md-6">
          <h2>You said:</h2>
          <ul class="unstyled">

          </ul>
        </div>

        <div class="col-md-6">
          <h2>The web page said back:</h2>
          <ul class="unstyled">

          </ul>
        </div>
      </div>
    </div>

  </body>
</html>
