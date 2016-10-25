$(document).ready(function(){
  $("form#stress-test").submit(function(event) {
    event.preventDefault();



    var allWarningValues = [];
     $("input:checkbox[name=warning-signs]:checked").each(function() {
       var checkValue1 = parseInt($(this).val());
       allWarningValues.push(checkValue1);
    });

    var allHealthSymptoms = [];
    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      var checkValue2 = parseInt($(this).val());
      allHealthSymptoms.push(checkValue2);
   });

   var allStressRelief = [];
   $("input:checkbox[name=stress-relief]:checked").each(function() {
     var checkValue3 = parseInt($(this).val());
     allStressRelief.push(checkValue3);
  });

  var total1 = allWarningValues.reduce(getSum);
  var total2 = allHealthSymptoms.reduce(getSum);
  var total3 = allStressRelief.reduce(getSum);

  alert(total1);
  alert(total2);
  alert(total3);





   function getSum(total, num) {
       return total + num;
   }


 });
});
