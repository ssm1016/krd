$(document).ready(function(){
    $.ajax({
		type: 'POST',
		url: "/browse/getData",
		dataType: 'json',
		data: { param : $("#param").val() },
		success: function(data){
			console.log( data );

			var table = "";
			table += "<table>";
			table += 	"<tbead>";
			table += 		"<tr>";
			table += 			"<td>" + data[0].ord + "</td>";
			table += 			"<td>" + data[0].name + "</td>";
			table += 			"<td>" + data[0].contents + "</td>";
			table += 		"</tr>";
			table += 	"</tbead>";
			table += "</table>";

            $("#div1").append( table );
		},
		error : function(request, status, error) {
			console.log("error code : " + request.status +"\n" + "status :"+ status);
		}
	});

})