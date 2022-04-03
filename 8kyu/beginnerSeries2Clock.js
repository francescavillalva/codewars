// 8kyu beginner series 2 clock

function past(h, m, s){

  let hoursMilli = 0
  let minutesMilli = 0
  let secondsMilli = 0
  
  if (h >= 0 && h <= 23) {
    hoursMilli = h * 3600000
  } 
  if (m >= 0 && m <= 59) {
    minutesMilli = m * 60000
  } 
  if (s >= 0 && s <= 59) {
    secondsMilli = s * 1000
  } 
  return hoursMilli + minutesMilli + secondsMilli
}