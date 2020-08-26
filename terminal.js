'use strict';


// A Shell --Terminal-- is a user interface for access to an operating system's services.

// Environment Variables --> set whenever start the Shell 
// ex: echo $PATH

// clear Terminal screen: clear or ctrl + l

// to check variable path: using which command 
// ex: which npm

// get the manual for a program: man (program name)
// ex: man ls

// connecting programs using < > tags where:
// <: refer to input stream 
// >: refer to output stream 
// ex: echo hello > text.txt // it will save hello in text.txt file.
// ex: echo hello >> text.txt // it will append hello to text.txt file.

// chaining programs using pipes "|" where:
// the output of the left side is the input to the right side.
// ex: ls -l | tail -n1
// ex: cat file.txt | tee newFile.txt