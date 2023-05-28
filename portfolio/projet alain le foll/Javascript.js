
var myImages= new Array();

    myImages[0] = "Images/alain 1.jpg";
    myImages[1] = "Images/alain 2.jpg";
    myImages[2] = "Images/alain 3.jpg";
    myImages[3] = "Images/alain 4.jpg";
    myImages[4] = "Images/alain 5.jpg";
    myImages[5] = "Images/alain 6.jpg";
    myImages[6] = "Images/alain 7.jpg";
    myImages[7] = "Images/alain 8.jpg";
    myImages[8] = "Images/alain 9.jpg";
    myImages[9] = "Images/alain 10.jpg";
    myImages[10] = "Images/alain 11.jpg";
    myImages[11] = "Images/alain 12.jpg";
    function rndSrc(){
        var rndImg = Math.floor(Math.random() * myImages.length);
        document.getElementById("tabl_container0").src=myImages[rndImg];
        let imgShown0 = rndImg

        while (rndImg == imgShown0) {
            var rndImg = Math.floor(Math.random() * myImages.length);
        }
        document.getElementById("tabl_container1").src=myImages[rndImg];
        let imgShown1 = rndImg

        while (rndImg == imgShown0 | rndImg == imgShown1) {
            var rndImg = Math.floor(Math.random() * myImages.length);
        }
        document.getElementById("tabl_container2").src=myImages[rndImg];
        let imgShown2 = rndImg

        while (rndImg == imgShown0 | rndImg == imgShown1 | rndImg == imgShown2) {
            var rndImg = Math.floor(Math.random() * myImages.length);
        }
        document.getElementById("tabl_container3").src=myImages[rndImg];
        let imgShown3 = rndImg

        while (rndImg == imgShown0 | rndImg == imgShown1 | rndImg == imgShown2 | rndImg == imgShown3) {
            var rndImg = Math.floor(Math.random() * myImages.length);
        }
        document.getElementById("tabl_container4").src=myImages[rndImg];
        let imgShown4 = rndImg

        while (rndImg == imgShown0 | rndImg == imgShown1 | rndImg == imgShown2 | rndImg == imgShown3 | rndImg == imgShown4) {
            var rndImg = Math.floor(Math.random() * myImages.length);
        }
        document.getElementById("tabl_container5").src=myImages[rndImg];
    }