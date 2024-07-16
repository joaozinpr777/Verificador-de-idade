function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtnum')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var faseDaVida = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        /*if (fsex[0].checked) {
            genero = 'masculino'
        } else {
            genero = 'feminino' 
        }

        if (idade >= 0 && idade < 12) {
            faseDaVida = 'criança'
            img.setAttribute('src', 'criancaHomem.jpg')
        } else if (idade >= 12 && idade < 18) {
            faseDaVida = 'jovem'
            img.setAttribute('src', 'jovemHomem.jpg')
        } else if (idade >= 18 && idade < 50) {
            faseDaVida = genero=='masculino'?'adulto':'adulta' 
            img.setAttribute('src', 'adultoHomem.jpg')
        } else if (idade >= 50 && idade < 100) {
            faseDaVida = genero=='masculino'?'idoso':'idosa'
            img.setAttribute('src', 'idosoHomem.jpg')
        } else {
            faseDaVida = genero=='masculino'?'morto':'morta'
            img.setAttribute('src', 'caixao.jpg')
        }*/
        if (fsex[0].checked) {
            genero ='masculino' 
            if (idade >= 0 && idade < 12) {
                faseDaVida = 'criança'
                img.setAttribute('src', 'criancaHomem.jpg')
            } else if (idade >=12 && idade < 18) {
                faseDaVida = 'jovem'
                img.setAttribute('src', 'jovemHomem.jpg')
            } else if (idade >= 18 && idade < 50) {
                faseDaVida = 'adulto'
                img.setAttribute('src', 'adultoHomem.jpg')
            } else if (idade >= 50 && idade < 100) {
                faseDaVida = 'idoso'
                img.setAttribute('src', 'idosoHomem.jpg')
            } else {
                faseDaVida = 'morto'
                img.setAttribute('src', 'caixao.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'feminino'
            if (idade >= 0 && idade < 12) {
                faseDaVida = 'criança'
                img.setAttribute('src', 'criancaMulher.jpg')
            } else if (idade < 18) {
                faseDaVida = 'jovem'
                img.setAttribute('src', 'jovemMulher.jpg')
            } else if (idade < 50) {
                faseDaVida = 'adulta'
                img.setAttribute('src', 'adultoMulher.jpg')
            } else if (idade < 100) {
                faseDaVida = 'idosa'
                img.setAttribute('src', 'idosaMulher.jpg')
            } else {
                faseDaVida = 'morta'
                img.setAttribute('src', 'caixao.jpg')
            }
        }
        res.computedStyleMap.textallign = 'center'
        res.innerHTML = `<p>Detectamos um${genero == 'feminino' || faseDaVida == 'criança' ? 'a' : ""} ${faseDaVida} do gênero ${genero} com ${idade} anos</p>`
        res.appendChild(img)

    }
}