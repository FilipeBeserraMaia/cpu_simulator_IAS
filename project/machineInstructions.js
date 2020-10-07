// instructions
function hlt() {
    setMBR(0)
    setMAR(0)
    setIR(0)
    setRO0(0)
    setRO1(0)
    setRO2(0)
    setIMM(0)
    setPC(0)
    setR0(0)
    setR1(0)
    setR2(0)
    setR3(0)
    setE(0)
    setL(0)
    setG(0)
}

function ld() {
    MBR = memory[MAR]
    setMBR((MBR))
    var reg = getRegMethod[
        getMapKey(regs, RO0)
        ]
    reg((MBR))
}

function st() {
    if (RO0 == 0)
        setMBR(R0)
    else if (RO0 == 1)
        setMBR(R1)
    else if (RO0 == 2)
        setMBR(R2)
    else if (RO0 == 3)
        setMBR(R3)
    memory[(MAR)] = MBR
    setInViewMemory(MAR, MBR);
}

function add() {
    //aux variables
    var regX = 0
    var regY = 0
    var regZ = 0
    var sum = 0

    if (RO0 == 0)
        regX = 'r0'
    else if (RO0 == 1)
        regX = 'r1'
    if (RO0 == 2)
        regX = 'r2'
    else if (RO0 == 3)
        regX = 'r3'
//-------------------
    if (RO1 == 0)
        regY = R0
    else if (RO1 == 1)
        regY = R1
    if (RO1 == 2)
        regY = R2
    else if (RO1 == 3)
        regY = R3
//-------------------
    if (RO2 == 0)
        regZ = R0
    else if (RO2 == 1)
        regZ = R1
    else if (RO2 == 2)
        regZ = R2
    else if (RO2 == 3)
        regZ = R3
    sum = regY + regZ
    var reg = getRegMethod[regX]
    reg(sum)
}

function sub() {

    //aux variables
    var regX = 0
    var regY = 0
    var regZ = 0
    var sub = 0

    if (RO0 == 0)
        regX = 'r0'
    else if (RO0 == 1)
        regX = 'r1'
    if (RO0 == 2)
        regX = 'r2'
    else if (RO0 == 3)
        regX = 'r3'
//-------------------
    if (RO1 == 0)
        regY = R0
    else if (RO1 == 1)
        regY = R1
    if (RO1 == 2)
        regY = R2
    else if (RO1 == 3)
        regY = R3
//-------------------
    if (RO2 == 0)
        regZ = R0
    else if (RO2 == 1)
        regZ = R1
    else if (RO2 == 2)
        regZ = R2
    else if (RO2 == 3)
        regZ = R3
    sub = regY - regZ
    var reg = getRegMethod[regX]
    reg(sub)

}

function mul() {

    //aux variables
    var regX = 0
    var regY = 0
    var regZ = 0
    var mul = 0

    if (RO0 == 0)
        regX = 'r0'
    else if (RO0 == 1)
        regX = 'r1'
    if (RO0 == 2)
        regX = 'r2'
    else if (RO0 == 3)
        regX = 'r3'
//-------------------
    if (RO1 == 0)
        regY = R0
    else if (RO1 == 1)
        regY = R1
    if (RO1 == 2)
        regY = R2
    else if (RO1 == 3)
        regY = R3
//-------------------
    if (RO2 == 0)
        regZ = R0
    else if (RO2 == 1)
        regZ = R1
    else if (RO2 == 2)
        regZ = R2
    else if (RO2 == 3)
        regZ = R3

    mul = regY * regZ

    var reg = getRegMethod[regX]
    reg(mul)

}

function div() {
    //aux variables
    var regX = 0
    var regY = 0
    var regZ = 0
    var div = 0

    if (RO0 == 0)
        regX = 'r0'
    else if (RO0 == 1)
        regX = 'r1'
    if (RO0 == 2)
        regX = 'r2'
    else if (RO0 == 3)
        regX = 'r3'
//-------------------
    if (RO1 == 0)
        regY = R0
    else if (RO1 == 1)
        regY = R1
    if (RO1 == 2)
        regY = R2
    else if (RO1 == 3)
        regY = R3
//-------------------
    if (RO2 == 0)
        regZ = R0
    else if (RO2 == 1)
        regZ = R1
    else if (RO2 == 2)
        regZ = R2
    else if (RO2 == 3)
        regZ = R3

    div = regY / regZ

    var reg = getRegMethod[regX]
    reg(div)
}

function lsh() {

    var regValue = 0

    if (RO0 = 0)
        regValue = R0
    else if (RO0 = 1)
        regValue = R1
    else if (RO0 = 2)
        regValue = R2
    else if (RO0 = 3)
        regValue = R3

    var lSH = regValue << IMM
    var reg = getRegMethod[
        getMapKey(regs, RO0)
        ]
    reg((lSH))
}

function rsh() {

    var regValue = 0

    if (RO0 = 0)
        regValue = R0
    else if (RO0 = 1)
        regValue = R1
    else if (RO0 = 2)
        regValue = R2
    else if (RO0 = 3)
        regValue = R3

    var rSH = regValue >> IMM
    var reg = getRegMethod[
        getMapKey(regs, RO0)
        ]
    reg((rSH))
}

function cmp() {
    var regX = 0
    var regY = 0

    if (RO0 == 0)
        regX = R0
    else if (RO0 == 1)
        regX = R1
    if (RO0 == 2)
        regX = R2
    else if (RO0 == 3)
        regX = R3
//-------------------
    if (RO1 == 0)
        regY = R0
    else if (RO1 == 1)
        regY = R1
    if (RO1 == 2)
        regY = R2
    else if (RO1 == 3)
        regY = R3
//-----------------------
    if (regX == regY)
        setE(1)
    else
        setE(0)
    if (regX < regY)
        setL(1)
    else
        setL(0)
    if (regX > regY)
        setG(1)
    else
        setG(0)
}

function je() {
    if (E == 1)
        setPC(MAR)
}

function jne() {
    if (E == 0)
        setPC(MAR)
}

function jl() {
    if (L == 1)
        setPC(MAR)
}

function jle() {
    if (L == 1 || E == 1)
        setPC(MAR)
}

function jg() {
    // alert('oii')
    if (G == 1)
        setPC(MAR)
}

function jge() {
    if (G == 1 || E == 1)
        setPC(MAR)
}

function jmp() {
    // alert('pao')
    setPC(MAR)
}

function movih() {

    var regX = 0

    if (RO0 == 0)
        regX = R0
    else if (RO0 == 1)
        regX = R1
    if (RO0 == 2)
        regX = R2
    else if (RO0 == 3)
        regX = R3

    regX = (regX & 0x0000ffff)
    var imm = (IMM & 0x0000ffff)
    imm = (imm << 16)
    regX = (regX & imm)
    var reg = getRegMethod[
        getMapKey(regs, RO0)
        ]
    reg((regX))
}

function movil() {
    var regX = 0

    if (RO0 == 0)
        regX = R0
    else if (RO0 == 1)
        regX = R1
    if (RO0 == 2)
        regX = R2
    else if (RO0 == 3)
        regX = R3

    regX = (regX & 0x00000000)
    var imm = (IMM & 0x0000ffff)

    regX = (regX & imm)
    var reg = getRegMethod[
        getMapKey(regs, RO0)
        ]
    reg((regX))
}

function addi() {
    var regValue = 0

    if (RO0 == 0)
        regValue = R0
    else if (RO0 == 1)
        regValue = R1
    else if (RO0 == 2)
        regValue = R2
    else if (RO0 == 3)
        regValue = R3
    var imm = IMM

    regValue = regValue + imm
    var reg = getRegMethod[
        getMapKey(regs, RO0)
        ]
    reg((regValue))
}

function subi() {

    var regValue = 0

    if (RO0 == 0)
        regValue = R0
    else if (RO0 == 1)
        regValue = R1
    else if (RO0 == 2)
        regValue = R2
    else if (RO0 == 3)
        regValue = R3
    var imm = IMM

    regValue = regValue - imm
    var reg = getRegMethod[
        getMapKey(regs, RO0)
        ]
    reg((regValue))

}

function muli() {

    var regValue = 0

    if (RO0 == 0)
        regValue = R0
    else if (RO0 == 1)
        regValue = R1
    else if (RO0 == 2)
        regValue = R2
    else if (RO0 == 3)
        regValue = R3
    var imm = IMM

    regValue = regValue * imm
    var reg = getRegMethod[
        getMapKey(regs, RO0)
        ]
    reg((regValue))

}

function divi() {
    var regValue = 0

    if (RO0 == 0)
        regValue = R0
    else if (RO0 == 1)
        regValue = R1
    else if (RO0 == 2)
        regValue = R2
    else if (RO0 == 3)
        regValue = R3
    var imm = IMM

    regValue = (regValue / imm)
    var reg = getRegMethod[
        getMapKey(regs, RO0)
        ]
    reg((regValue))
}

function movrr() {
    var regValue = 0
    var regValue2 = 0

    if (RO0 == 0)
        regValue = R0
    else if (RO0 == 1)
        regValue = R1
    else if (RO0 == 2)
        regValue = R2
    else if (RO0 == 3)
        regValue = R3

    if (RO1 == 0)
        regValue2 = R0
    else if (RO1 == 1)
        regValue2 = R1
    else if (RO1 == 2)
        regValue2 = R2
    else if (RO1 == 3)
        regValue2 = R3

    regValue = regValue2
    var reg = getRegMethod[
        getMapKey(regs, RO0)
        ]
    reg((regValue))

}


//cpu
function setMBR(value) {
    element = document.getElementById('mbr');
    MBR = value
    element.value = parseInt((MBR)).toString(16);
};

function setMAR(value) {
    element = document.getElementById('mar');
    MAR = value
    element.value = parseInt(MAR).toString(16);
};

function setIR(value) {
    element = document.getElementById('ir');
    IR = value
    element.value = parseInt(IR).toString(16);
};

function setRO0(value) {
    element = document.getElementById('ro0');
    RO0 = value
    element.value = parseInt(RO0).toString(16);
};

function setRO1(value) {
    element = document.getElementById('ro1');
    RO1 = value
    element.value = parseInt(RO1).toString(16);
};

function setRO2(value) {
    element = document.getElementById('ro2');
    RO2 = value
    element.value = parseInt(RO2).toString(16);

};

function setIMM(value) {
    element = document.getElementById('imm');
    IMM = value
    element.value = parseInt(IMM).toString(16);
};

function setPC(value) {
    element = document.getElementById('pc');
    PC = value
    element.value = parseInt(PC).toString(16);
};

function setR0(value) {
    element = document.getElementById('r0');
    R0 = value

    element.value = parseInt((R0)).toString(16);
};

function setR1(value) {
    element = document.getElementById('r1');
    R1 = value
    element.value = parseInt((R1)).toString(16);
};

function setR2(value) {
    element = document.getElementById('r2');
    R2 = value
    element.value = parseInt((R2)).toString(16);

};

function setR3(value) {

    element = document.getElementById('r3');
    R3 = value

    element.value = parseInt(R3).toString(16);

};


function setE(value) {

    element = document.getElementById('e');
    E = value

    element.value = parseInt(E).toString(16);

};

function setL(value) {

    element = document.getElementById('l');
    L = value

    element.value = parseInt(L).toString(16);

};

function setG(value) {

    element = document.getElementById('g');
    G = value

    element.value = parseInt(G).toString(16);

};