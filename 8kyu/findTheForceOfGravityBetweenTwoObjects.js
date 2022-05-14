/*
8kyu find the force of gravity between two objects
12 may 2022

Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

Two arrays are given :
arr_val (value array), consists of 3 elements
1st element : mass of obj 1
2nd element : mass of obj 2
3rd element : distance between their centers

arr_unit (unit array), consists of 3 elements
1st element : unit for mass of obj 1
2nd element : unit for mass of obj 2
3rd element : unit for distance between their centers

mass units are :
kilogram (kg)
gram (g)
milligram (mg)
microgram (μg)
pound (lb)

distance units are :
meter (m)
centimeter (cm)
millimeter (mm)
micrometer (μm)
feet (ft)

Note
value of G = 6.67 × 10−11 N⋅kg−2⋅m2

1 ft = 0.3048 m
1 lb = 0.453592 kg

return value must be Newton for force (obviously)
μ copy this from here to use it in your solution
*/

solution = (arr_val, arr_unit) => {
    const conversions = {
      'm': 1,
      'cm': 10 ** -2,
      'mm': 10 ** -3,
      'μm': 10 ** -6,
      'ft': 0.3048,
      'kg': 1,
      'g': 10 ** -3,
      'mg': 10 ** -6,
      'μg': 10 ** -9,
      'lb': 0.453592
    }
    const G = 6.67 * 10 ** -11
    const d = arr_val[2] * conversions[arr_unit[2]]
    const m1 = arr_val[0] * conversions[arr_unit[0]]
    const m2 = arr_val[1] * conversions[arr_unit[1]]
    
    return (G * m1 * m2) / (d * d)
  }