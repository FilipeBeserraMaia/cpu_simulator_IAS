function saveOpcode() {
    for (var id in opcodeList) {
        var element = document.getElementById((memNumber[id]).toString())
        element.value = '0x' + parseInt(opcodeList[id]).toString(16).toUpperCase();
        memory[id]= parseInt((element.value),16)
    }
}

function saveInMemory(element){
    var position = parseInt(element.id,16)
    var value = element.value
    memory[position] = parseInt(value,16)
}

function clearMemory() {
    for (var i = 0; i < 100; i++) {
        var element = document.getElementById((memNumber[i].toString()));
        element.value = '0x00000000';
    }
    opcodeList = [];
    memory = opcodeList;
    opcodeOutPut.value = ''
}

function createMemory() {

    var table = document.getElementById('table-table')
    var newTable = '<tbody>'
    var count = 0;
    for (var i = 0; i < 10; i++) {

        var newTr = '<tr>'
        for (var j = 0; j < 10; j++) {
            var newTd = '<td>'
            var mem = (count).toString(16);

            var input = "<input"
            var conteudo = "id=\'" + "0x" + mem + "\' placeholder= 0x" + mem.toUpperCase() +"  onchange="+"\""+"saveInMemory(this)"+"\"" +">"
            newTd += input + '  ' + conteudo;
            newTd += '</td>'
            newTr += newTd;
            //save mem path
            memNumber.push('0x' + mem);
            // insert value 0 for all memory space
            memory[count]=0
            count++;
        }
        newTr += '</tr>'
        newTable += newTr;
    }
    newTable += '</tbody>'
    table.innerHTML = newTable;


}