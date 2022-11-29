function tabuada() {
    let numd = document.querySelector('input#txtn');
    let tab = document.getElementById('seltab');

        if (numd.value.length == 0 ) {
            window.alert('[ERRO] Digite um número!')
        } else {
            let n = Number(numd.value);
            let c = 1;
            tab.innerHTML = ''
                while(c <= 10) {
                    let item = document.createElement('option');
                    let res = n * c
                    item.text = `${n} x ${c} = ${res}`
                    c++
                    item.value = `tab${c}` /* o valor(value) dentro de cada tag option */
                    tab.appendChild(item)
                }
        }
}