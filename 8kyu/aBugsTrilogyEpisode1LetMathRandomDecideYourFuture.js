/*
8kyu a bugs trilogy episode 1 let math.random() decide your future
9 may 2022

*/

function yourFutureCareer(){
	var career = Math.random()
	if (career <= 0.32) {
		return 'FrontEnd Developer'
    } else if (career <= 0.65)  {
		return 'BackEnd Developer'
	} else {
		return 'Full-Stack Developer'
	}
}


yourFutureCareer()