let coefficient_a1 = 1;
let coefficient_b1 = -6;
let coefficient_c1 = 9;
let discriminant_1 = (coefficient_b1 * coefficient_b1) - (4 * coefficient_a1 * coefficient_c1);

let coefficient_a2 = 1;
let coefficient_b2 = -4;
let coefficient_c2 = -5;
let discriminant_2 = (coefficient_b2 * coefficient_b2) - (4 * coefficient_a2 * coefficient_c2);

let x_1;
x_1 = (-coefficient_b1 + Math.sqrt(discriminant_1)) / 2*coefficient_a1;
console.log( "Ответ к уравнению 1: " + x_1);
x_1 = (-coefficient_b2 + Math.sqrt(discriminant_2)) / 2*coefficient_a2;
let x_2;
x_2 = (-coefficient_b2 - Math.sqrt(discriminant_2)) / 2*coefficient_a2;
console.log( "Ответы к уравнению 2: " + x_1 + " и " + x_2);


