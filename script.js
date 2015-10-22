var capitals = [["Alabama","Montgomery"], ["Alaska","Juneau"], ["Arizona","Phoenix"], ["Arkansas","Little Rock"], ["California","Sacramento"], ["Colorado","Denver"]];

function getCapital(stateName) {
	for (i = 0; i < capitals.length; i++) {
		
	if(capitals[i][0] == stateName)
		alert(capitals[i][1]);
	};
}
