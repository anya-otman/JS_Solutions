set 50 100
set 51 25
greatestNumber 50 51 53
smallestNumber 52 51 54
greatestNumber 53 54 50
smallestNumber 53 54 51
subtract 50 51 52
output 53
jz 52 29
smallestNumber 50 52 50
jmp 6
exit

//Нахождение НОД чисел 100 и 25
//Ответ - последнее число в выводе
