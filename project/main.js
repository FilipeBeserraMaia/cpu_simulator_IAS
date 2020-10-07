var opcodeList = [];
var memory = [];
var opcodeOutPut = document.getElementById('opcode-output');
var instructionsText = document.getElementById('instruction-input').value;
var MBR = MAR = IR = RO = RO1 = RO2 = IMM = PC = R0 = R1 = R2 = R3 = E = L = G = 0

createMemory();


function instructionConversion() {
    //update instructions  before conversion
    instructionsText = document.getElementById('instruction-input').value;
    conversor();
}

function save() {
    saveOpcode();
    // console.log('--------memoria----------')
    // console.log(memory)
    // console.log('--------memoria----------')

}

function machineCicle() {
// --------Seach-----------------
    setMBR(memory[PC]);
    //set new value to PC
    setPC(PC + 1);
//--------Decodefy---------------
    decodefy(MBR);
//---------Execute----------------
    execute(IR);

}

function decodefy(opcode) {
    var mar = ''
    var ir = ''
    var ro0 = ''
    var ro1 = ''
    var ro2 = ''
    var imm = ''
    var memMask = ''
    //alert(opcode)
    ir = Math.abs(Number((BigInt(opcode) & 0xF8000000n) >> 27n))
    ro0 = Math.abs(Number((BigInt(opcode) & 0x6000000n) >> 25n))
    ro1 = Math.abs(Number((BigInt(opcode) & 0x1800000n) >> 23n))
    ro2 = Math.abs(Number((BigInt(opcode) & 0x600000n) >> 21n))

     alert(ir)
    var mapKey = getMapKey(instructionSet, ir);

    if (mapKey in maskFirstCase)
        memMask = maskFirstCase["mem"]
    else if (mapKey in masksSecondCase)
        memMask = masksSecondCase["mem"]
    else if (mapKey in maskThirdCase)
        memMask = maskThirdCase["mem"]
    else if (mapKey in maskFourthCase)
        memMask = maskFourthCase["mem"]

    setIR(ir)
    setRO0(ro0)
    setRO1(ro1)
    setRO2(ro2)
    if (mapKey in useImm) {
        imm = (opcode & memMask)
        setIMM(imm)
    } else {
        mar = (opcode & memMask)
        setMAR(mar)
    }


}

function execute(ir) {

    // alert(instructionSet['jmp'])
    var machineFunction = instructionSetMetthods[
        getMapKey(instructionSet, ir)
        ]
    // alert(machineFunction)
    machineFunction();

}

function setInViewMemory(position, value) {
    var element = document.getElementById("0x" + position.toString(16))
    element.value = value.toString(16);
}