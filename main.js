function cutImageIntoDivs(imageSrc, numRows, numCols) {
    const container = document.getElementById('yourContainerId'); // Replace with your actual container ID
    const image = new Image();
    image.src = imageSrc;
    image.onload = function() {
        const width = image.width / numCols;
        const height = image.height / numRows;
        
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                const div = document.createElement('div');
                div.style.width = width + 'px';
                div.style.height = height + 'px';
                div.style.backgroundImage = `url('${imageSrc}')`;
                div.style.backgroundPosition = `-${j * width}px -${i * height}px`;
                div.style.float = 'left'; // or use flexbox/grid to arrange the divs
                container.appendChild(div);
            }
        }
    }
}

// Usage example
cutImageIntoDivs('./dependencies/imgs/sunrise.jpg', 4, 4);


console.log("done")





const squares = document.querySelectorAll(".divTableCell")


