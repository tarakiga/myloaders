function createLoader(elementId) {
  const loaderElement = document.getElementById(elementId);
  loaderElement.innerHTML = ''; // Clear any existing content

  // Create a simple loading spinner
  const spinner = document.createElement('div');
  spinner.style.width = '50px';
  spinner.style.height = '50px';
  spinner.style.border = '5px solid #f3f3f3';
  spinner.style.borderTop = '5px solid #3498db';
  spinner.style.borderRadius = '50%';
  spinner.style.animation = 'spin 1s linear infinite';

  // Add the spinner to the loader element
  loaderElement.appendChild(spinner);

  // Add the keyframe animation to the document
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}

// Expose the function globally
window.createLoader = createLoader;