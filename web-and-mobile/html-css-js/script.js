window.addEventListener("load", function()
{
    // Get click element references.
    let clickCounterElement = document.getElementById("click-counter");
    let clickButtonElement = documen.getElementById("click-button");

    // Counter value. 
    let counter = 0;

    // lcick button function.
    let clickButtonFunction = function()
    {
        // increment counter.
        counter++;

        // update counter value
        clickCounterElement.innerHTML = counter;
    };

    //Attach button function
    clickButtonElement.addEventListener("click", clickButtonFunction);
})