/* function parseDate(str) {
    let mdy = str.split('/');
	return new Date(mdy[2], mdy[0]-1, mdy[1]);
     }
function daydiff(first, second) { return Math.round((second-first)/(1000*60*60*24));	}

  let chng1 = document.getElementById("fin");
  let chng2 = document.getElementById("debut");
  chng1.onchange = displayCurrentDayDifference();
  chng2.onchange = displayCurrentDayDifference();
  function displayCurrentDayDifference() {
  let date1 = document.getElementById("debut").value;
  let date2 = document.getElementById("fin").value;
   if (date1 && date2) {
	let daysBetween = daydiff(parseDate($('#debut').val()), parseDate($('#fin').val()));
	document.getElementById("lhmd").value = daysBetween;
					}
	} */
let chng1 = document.getElementById("fin");
let chng2 = document.getElementById("debut");
if (chng1.getTime() < chng2.getTime()) 
       alert("Veuillez saisir les dates dans le bon ordre");
