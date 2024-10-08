console.log("Loader script loaded successfully!");

window.addEventListener('load', function() {
  var loaderElement = document.createElement('div');
  loaderElement.id = 'my-custom-loader';
  loaderElement.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:red;padding:20px;color:white;';
  loaderElement.textContent = 'Loading...';
  document.body.appendChild(loaderElement);

  setTimeout(function() {
    loaderElement.style.display = 'none';
  }, 3000);
});
