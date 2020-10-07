//mask opcode
var maskFirstCase = ({
    'je': '0x6000000',
    'jne': '0x6000000',
    'jl': '0x6000000',
    'jle': '0x6000000',
    'jg': '0x6000000',
    'jge': '0x6000000',
    'jmp': '0x6000000',
    'hlt': '0xF8000000',
    'mem': '0x7FFFFFF',
    'opcodeMask': '0xF8000000'
});

//mask for r0
var masksSecondCase = ({
    'ld': '0x6000000',
    'st': '0x6000000',
    'lsh': '0x6000000',
    'rsh': '0x6000000',
    'movih': '0x6000000',
    'movil': '0x6000000',
    'addi': '0x6000000',
    'subi': '0x6000000',
    'muli': '0x6000000',
    'divi': '0x6000000',

    'mem': '0x1FFFFFF',
    'opcodeMask': '0xF8000000',
    'r0Mask': '0x6000000'
});
//mask for r1
var maskThirdCase = ({
    'cmp': '0x1800000',
    'movrr': '0x1800000',


    'mem': '0x7FFFFF',
    'opcodeMask': '0xF8000000',
    'r0Mask': '0x6000000',
    'r1Mask': '0x1800000'
});

//mask for r2
var maskFourthCase = ({
    'add': '0x600000',
    'sub': '0x600000',
    'mul': '0x600000',
    'div': '0x600000',


    'mem': '0x1FFFFF',
    'opcodeMask': '0xF8000000',
    'r0Mask': '0x6000000',
    'r1Mask': '0x1800000',
    'r2Mask': '0x600000'
});
var instructionSet = {
    'hlt': '0x00',
    'ld': '0x01',
    'st': '0x02',
    'add': '0x03',
    'sub': '0x04',
    'mul': '0x05',
    'div': '0x06',
    'lsh': '0x07',
    'rsh': '0x08',
    'cmp': '0x09',
    'je': '0x0a',
    'jne': '0x0b',
    'jl': '0x0c',
    'jle': '0x0d',
    'jg': '0x0e',
    'jge': '0x0f',
    'jmp': '0x010',
    'movih': '0x011',
    'movil': '0x012',
    'addi': '0x013',
    'subi': '0x014',
    'muli': '0x015',
    'divi': '0x016',
    'movrr': '0x017'
}
var regs = {
    'r0': '0x00',
    'r1': '0x01',
    'r2': '0x02',
    'r3': '0x03'
}
var memNumber = ([]);

var useImm = ({
    'lsh': '0x07',
    'rsh': '0x08',
    'movih': '0x11',
    'movil': '0x12',
    'addi': '0x13',
    'subi': '0x14',
    'muli': '0x15',
    'divi': '0x16',
});

function getMapKey(thisMap, value) {

    var wantedKey = '';
    var formatValue = '0x' + '0' + (value).toString(16);

    for (var key in thisMap) {
        if (thisMap[key] == formatValue) {
            wantedKey = key;
        }
    }
    return wantedKey;
}

var instructionSetMetthods = {
    'hlt': hlt,
    'ld': ld,
    'st': st,
    'add': add,
    'sub': sub,
    'mul': mul,
    'div': div,
    'lsh': lsh,
    'rsh': rsh,
    'cmp': cmp,
    'je': je,
    'jne': jne,
    'jl': jl,
    'jle': jle,
    'jg': jg,
    'jge': jge,
    'jmp': jmp,
    'movih': movih,
    'movil': movil,
    'addi': addi,
    'subi': subi,
    'muli': muli,
    'divi': divi,
    'movrr': movrr
}
var getRegMethod = {
    'r0': setR0,
    'r1': setR1,
    'r2': setR2,
    'r3': setR3
}