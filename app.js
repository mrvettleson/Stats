window.onload = function() {
    // Get the canvas element by its ID
    var canvas = document.getElementById('myCanvas');
    // Get the 2D drawing context from the canvas
    var context = canvas.getContext('2d');

    // Define the square's properties
    var x = 50; // x-coordinate of the top-left corner
    var y = 50; // y-coordinate of the top-left corner
    var size = 100; // Width and height of the square

    // Set the fill style for the square
    context.fillStyle = '#4CAF50'; // Green color

    // Draw the square
    context.fillRect(x, y, size, size);
};
