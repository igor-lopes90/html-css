integer valorA = 4;
integer valorB = 3;
integer valorC = 6;

System.debug('A => ' + (valorA >= valorB && valorC <= valorA));
System.debug('B => ' + (valorA == valorB || valorC != valorA));
System.debug('C => ' + (valorA != valorB && valorC > valorA));