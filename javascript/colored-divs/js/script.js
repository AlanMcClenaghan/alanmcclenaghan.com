// Global variables
        var html = '';
        var rgbColor;
        
        // Function generates random between 0 and 255 
        function randomRGB() {
            return Math.floor(Math.random() * 256 );
        }

        // Function creates string variable containing RGB color values
        function randomColor() {
            var color = "rgb(";
            color += randomRGB() + ",";
            color += randomRGB() + ",";
            color += randomRGB() + ")";
            return color;
        }

        // Function to print colored divs to the page 
        function print(html) {
            document.write(html);
        }

        /*
        For loop assigns randomColor() function to rgbColor variable
        qwhich passes RGB color values into the html string variable.
        */
        for ( var i = 0; i < 100; i++) {
            rgbColor = randomColor();
            html += '<div style="background-color:' + rgbColor + '"></div>';
        }

        //Print function is called
        print(html)