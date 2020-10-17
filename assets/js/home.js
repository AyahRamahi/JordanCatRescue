var galleryList = document.querySelector('.wrap');

// Add 20 items.
var nextItem = 1;
var loadMore = function() {
    for (var i = 0; i < 20; i++) {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                var box = document.createElement('div');
                box.classList.add("box");

                var innerBox = document.createElement('div');
                innerBox.classList.add("boxInner");
                box.appendChild(innerBox);

                var idBox = document.createElement('div');
                idBox.classList.add("idBox");
                idBox.innerHTML = "ID:" + data[0].id;
                innerBox.appendChild(idBox);

                var image = document.createElement('img');
                image.src = data[0].url;
                innerBox.appendChild(image);

                galleryList.appendChild(box);
            });
        
    }
}

var gallery = document.querySelector('.gallery');
// Detect when scrolled to bottom.
gallery.addEventListener('scroll', function() {
    if (gallery.scrollTop + gallery.clientHeight >= gallery.scrollHeight) {
        loadMore();
    }
});

// Initially load some items.
loadMore();