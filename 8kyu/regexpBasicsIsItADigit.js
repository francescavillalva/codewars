/*
8kyu regexp basics is it a digit
9 may 2022

Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
*/

String.prototype.digit = function() {
  for (let i = 0; i < 10; i++) {
      if (i + '' == this) return true
  }
  return false
}