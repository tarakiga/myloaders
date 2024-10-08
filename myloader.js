(function() {
  // Create loader element
  var loader = document.createElement('div');
  loader.id = 'my-custom-loader';
  loader.innerHTML = 'Loading...'; // Simple text for now

  // Style the loader
  var style = document.createElement('style');
  style.textContent = `
    #my-custom-loader {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      padding: 20px;
      border-radius: 5px;
      font-family: Arial, sans-serif;
    }
  `;

  // Function to add loader
  function addLoader() {
    document.body.appendChild(loader);
    document.head.appendChild(style);
  }

  // Add loader immediately if the body exists, otherwise wait for DOM to be ready
  if (document.body) {
    addLoader();
  } else {
    document.addEventListener('DOMContentLoaded', addLoader);
  }

  // Optional: Hide loader after 3 seconds (for testing purposes)
  setTimeout(function() {
    loader.style.display = 'none';
  }, 3000);
})();
