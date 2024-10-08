(function() {
  // Create loader element
  var loader = document.createElement('div');
  loader.id = 'my-custom-loader';
  loader.innerHTML = '<div class="spinner"></div>';

  // Style the loader
  var style = document.createElement('style');
  style.textContent = `
    #my-custom-loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid #f3f3f3;
      border-top: 5px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
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

  // Optional: Hide loader after 5 seconds (for testing purposes)
  setTimeout(function() {
    loader.style.display = 'none';
  }, 5000);
})();
