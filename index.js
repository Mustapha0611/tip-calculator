
var Total_amount = document.getElementById("total-amount");
var five = document.getElementById("five");
var ten = document.getElementById("ten");
var fifteen = document.getElementById("fifteen")
var twenty_five = document.getElementById("twenty-five")
var fifty = document.getElementById("fifty")
var no_of_people = document.getElementById("no-of-people")
var tip_amount = document.getElementById("tip_amount");
var total_tip = document.getElementById("total-tip");
var custom = document.getElementById("custom");
var red = document.getElementById("red");
var reset = document.getElementById("reset")


    five.addEventListener('click',()=> {
         if (no_of_people.value==0){
            red.style.visibility="visible";

        } else{
            red.style.visibility="hidden";
            var five_percent = 0.05 * Total_amount.value;
            var total = five_percent*no_of_people.value;
            var percentt = tip_amount.innerHTML ="$"+five_percent.toFixed(2);
            var Tips_total = total_tip.innerHTML = "$"+total.toFixed(2);
            reset.style.background = "cyan"
         }
    });

    ten.addEventListener('click', ()=> {
        if (no_of_people.value==0){
            red.style.visibility="visible";

        } else{
            red.style.visibility="hidden";
            var ten_percent = 0.1 * Total_amount.value;
            var total =(ten_percent)*no_of_people.value;
            var Tips_total = total_tip.innerHTML = "$"+total.toFixed(2);
            var percent = tip_amount.innerHTML ="$"+ten_percent.toFixed(2);
            reset.style.background = "cyan"
        }
    });

    fifteen.addEventListener('click', ()=> {
        if (no_of_people.value==0){
            red.style.visibility="visible";

        } else{
            red.style.visibility="hidden";
            var fifteen_percent = 0.15 * Total_amount.value;
            var total =(fifteen_percent)*no_of_people.value;     
            var Tips_total = total_tip.innerHTML ="$"+ total.toFixed(2);
            var percent = tip_amount.innerHTML ="$"+fifteen_percent.toFixed(2);
            reset.style.background = "cyan"
        }
    });

    twenty_five.addEventListener('click', ()=> {
        if (no_of_people.value==0){
            red.style.visibility="visible";

        } else{
            red.style.visibility="hidden";
            var tf_percent = 0.25 * Total_amount.value;
            var total =(tf_percent)*no_of_people.value;
            var Tips_total = total_tip.innerHTML = "$"+total.toFixed(2);
            var percent = tip_amount.innerHTML ="$"+tf_percent.toFixed(2);
            reset.style.background = "cyan"
        }
    });

    fifty.addEventListener('click', ()=> {
        if (no_of_people.value==0){
            red.style.visibility="visible";

        } else{
            red.style.visibility="hidden";
            var fifty_percent = 0.50 * Total_amount.value;
            var total =(fifty_percent)*no_of_people.value;
            var Tips_total = total_tip.innerHTML = "$"+total.toFixed(2);
            var percent = tip_amount.innerHTML ="$"+fifty_percent.toFixed(2);
            reset.style.background = "cyan"
        }
    });

    custom.addEventListener('keyup',()=> {
        if (no_of_people.value==0){
           red.style.visibility="visible";

       } else{
           red.style.visibility="hidden";
           var custom_val = custom.value/100 * Total_amount.value;
           var total = custom_val*no_of_people.value;
           var percentt = tip_amount.innerHTML ="$"+custom_val.toFixed(2);
           var Tips_total = total_tip.innerHTML = "$"+total.toFixed(2);
           reset.style.background = "cyan"
        }
   });

    reset.addEventListener('click',()=> {
        tip_amount.innerHTML = "$0.00";
        total_tip.innerHTML = "$0.00";
        custom.value = '';
        no_of_people.value = '';
        Total_amount.value = '';
        reset.style.backgroundColor ="rgb(30, 133,127)"
    })
