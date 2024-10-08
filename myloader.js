console.log("Myloader script started executing");

function createLoader() {
    console.log("Creating loader element");
    var loader = document.createElement('div');
    loader.id = 'my-custom-loader';
    loader.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:blue;padding:20px;color:white;z-index:9999;';
    loader.textContent = 'External Loader';
    document.body.appendChild(loader);
    console.log("Loader element added to body");

    setTimeout(function() {
        loader.style.display = 'none';
        console.log("Loader hidden after timeout");
    }, 3000);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createLoader);
    console.log("Added createLoader to DOMContentLoaded event");
} else {
    createLoader();
    console.log("Called createLoader immediately");
}

console.log("Myloader script finished executing");
