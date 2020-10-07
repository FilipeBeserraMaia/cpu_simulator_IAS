function conversor() {

    var opcodes = [];
    //take the command lines
    var instructionsArrayLines = (instructionsText).replace(',', '').split('\n');

    //for each line command this loop catch command by command
    instructionsArrayLines.forEach(function (line) {

        line = line.trim();
        while ( line.search(',')!= -1 ){
            line=line.replace(',','')
        }
        if (line != '') {
            opcodes.push(generateOpcode(line));
        }
    });
    opcodeList = opcodes;
    showOpcodes(opcodes);
};

// show opcode in output screen
function showOpcodes(opcodes) {
    opcodeOutPut.value = ''
    opcodes.forEach(function (opcode) {
        opcodeOutPut.value += parseInt(opcode).toString(16).toUpperCase() + '\n';
    });
}

function generateOpcode(line) {

    // catch space-separated commands
    var commands = line.split(' ');

    var newWord = [];
    var opcode = commands[0];

    if (opcode != '') {
        if (opcode in maskFirstCase) {
            newWord.push(firstCase(commands));
        } else if (opcode in masksSecondCase) {
            newWord.push(secondCase(commands));
        } else if (opcode in maskThirdCase) {
            newWord.push(thirdCase(commands));
        } else if (opcode in maskFourthCase) {
            newWord.push(fourthCase(commands))
        }
    }
    return newWord;
}

//------##-------maps each case--------##--------

//just opcode and memory
function firstCase(word) {

    var opcode = instructionSet[word[0]];
    var memory = '0x' + word[1];

    opcode = (opcode << 27)

    opcode = Math.abs(opcode & maskFirstCase["opcodeMask"]);

    memory = memory & maskFirstCase["mem"];

    // alert('opcode'+opcode+'memoria'+memory+'--opcode e memoria somados ---//'+(opcode | memory));
    return Math.abs(opcode + memory);
};

//just opcode one register and memory
function secondCase(word) {
    var opcode = instructionSet[word[0]];
    var reg0 = regs[word[1]];
    var memory = '0x' + word[2];
    // alert(word)
    // alert(opcode +'-register-'+reg0+'---mem-'+memory)


    opcode = Number(BigInt(opcode) << 27n)
    // alert(opcode)
    opcode = Number(BigInt(opcode) & BigInt(masksSecondCase["opcodeMask"]));
    reg0 = BigInt(reg0) << 25n
    reg0 = BigInt(reg0) & BigInt(masksSecondCase["r0Mask"]);
    memory = BigInt(memory)& BigInt(masksSecondCase["mem"]);

   // alert('----'+(BigInt(opcode) | BigInt(reg0) | BigInt(memory)))
    return (BigInt(opcode) | BigInt(reg0) | BigInt(memory));

}

//just opcode ,two registers and memory
function thirdCase(word) {
    var opcode = instructionSet[word[0]];
    var reg0 = regs[word[1]];
    var reg1 = regs[word[2]];
    var memory = '0x' + word[3];

    // alert(word[2])
    // alert(opcode +'---'+ reg0 +'---'+reg1 +'---'+ memory)


    opcode = Number(BigInt(opcode) << 27n)
    opcode = Number(BigInt(opcode) & BigInt(maskThirdCase["opcodeMask"]));

    reg0 = Number(BigInt(reg0) << 25n)
    reg0 = Number(BigInt(reg0) & BigInt(maskThirdCase["r0Mask"]));

    reg1 = Number(BigInt(reg1) << 23n)
    reg1 = Number(BigInt(reg1) & BigInt(maskThirdCase["r1Mask"]));

    memory = ((memory) & (maskThirdCase["mem"]));

    // alert(opcode +'---'+ reg0 +'---'+reg1 +'---'+ memory)
    return (BigInt(opcode) | BigInt(reg0) | BigInt(reg1) | BigInt(memory));
}

//just opcode ,three registers and memory
function fourthCase(word) {

    var opcode = instructionSet[word[0]];
    var reg0 = regs[word[1]];
    var reg1 = regs[word[2]];
    var reg2 = regs[word[3]];
    var memory = '0x' + word[4];

    opcode = opcode << 27
    opcode = opcode & maskFourthCase["opcodeMask"];

    reg0 = reg0 << 25
    reg0 = reg0 & maskFourthCase["r0Mask"];

    reg1 = reg1 << 23
    reg1 = reg1 & maskFourthCase["r1Mask"];

    reg2 = reg2 << 21
    reg2 = reg2 & maskFourthCase["r2Mask"];

    memory = memory & maskFourthCase["mem"];

    return (opcode | reg0 | reg1 | reg2 | memory);
}
