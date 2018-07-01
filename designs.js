//When user input size, call makeGrid()


//building grid using the function makeGrid()
$("#sizePicker").submit(function makeGrid(event){
        let makeHeight = $("#inputHeight").val();
        let makeWidth = $("#inputWidth").val();
        $("#pixelCanvas tr").remove();
        event.preventDefault();
        //a nested for loop is created to iterate through the user's inputted values of both height and width
        for (let a = 1; a <= makeHeight; a++){
            $("#pixelCanvas").append("<tr></tr>");//table rows created as children of table(#pixelCanvas)
            for (let b = 1; b <= makeWidth; b++){
                $("tr:last").append("<td></td>");//td cells created as children of tr
            }
        }
        //integrating the click function event listener for color picker 
        $(pixelCanvas).on("click", function(x){
            colorPicker = $("#colorPicker").val();
            $(x.target).css("background-color",colorPicker)
        });





});