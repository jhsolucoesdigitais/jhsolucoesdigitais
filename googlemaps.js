var primeiro = '<style> div#divinho1 { width: 500px; border-radius: 20px 20px 0px 0px; margin: 0 auto; } div#divinho2 { width: 500px; margin: 0 auto; } div#divinho3 { width: 500px; border-radius: 0px 0px 0px 0px ; margin: 0 auto; } div#divinho4 { width: 500px; border-radius: 0px 0px 20px 20px ; margin: 0 auto; } div#divinho5 { width: 300px; border-radius: 0px 0px 10px 10px ; margin: 0 auto; height:20px ; } div#divinho6 { width: 300px; border-radius: 20px 20px 20px 20px ; margin: 0 auto; } select#down_num{ background-color: #4CAF50; border: none; color: white; text-align: center; font-size: 12px; border-radius: 10px; } .button { background-color: #4CAF50; border: none; color: white; padding: 7px 10px; text-align: center; text-decoration: none; display: inline-block; font-size: 10px; margin: 4px 2px; cursor: pointer; border-radius: 30px; width: 100px; } .button1 {background-color: #4CAF50;} .button2 {background-color: #008CBA;} .button3 {background-color: #f44336;} .button4 {background-color: #555555;} </style> <div id=divinho1 style="background: rgb(238, 238, 238); padding: 5px 10px; text-align: center;"><strong>&copy;️ JHS SOLU&Ccedil;&Otilde;ES DIGITAIS LTDA </strong></div> <div id=divinho3 style="background: rgb(238, 238, 238);padding: 5px 10px; text-align: center;"> <div id=divinho5  style="background: rgb(250, 250, 250);" <p> Realizar download antes de finalizar? <select id=down_num> <option value="n">Não</option> <option value="s">Sim</option> </select> </p> </div> </div> <div id=divinho2 style="background: rgb(238, 238, 238); padding: 5px 10px; text-align: center;"> <button class="button button1" onclick="iniciar()" data-toggle="tooltip" title="Iniciar Extração">INICIAR</button> <button class="button button2" onclick="download()" data-toggle="tooltip" title="Download da Extração">DOWNLOAD</button> <button class="button button3" onclick="contador()" data-toggle="tooltip" title="Contabilizar empresas">CONTAR</button> <button class="button button4" onclick="tools()" data-toggle="tooltip" title="Nosso Site">SITE</button> </div> <div id=divinho4 style="background: rgb(238, 238, 238); padding: 5px 10px; text-align: center;"> <div id=divinho6  style="background: rgb(250, 250, 250);" <p style="text-align: center;"><span style="font-size:18px"><span id="ext" style="color:#008000"><strong>Extraídos: 0</strong></span> </div> </div>'; var gmaps = document.querySelector("div.logo"); var tam = document.querySelector('[class="iHM8f"]').style.height = "150px"; var inserir = document.querySelector('div[class="iHM8f"').innerHTML =  primeiro; var cor = document.querySelector("#rcnt").style.backgroundColor = 'black'; var cor2 = document.querySelector("#searchform > div.sfbg").style.backgroundColor = 'black'; if (gmaps !== null) { var mD = gmaps.innerHTML = '<img alt="" height="100" src="https://jhsolucoesdigitais.com/wp-content/uploads/2022/08/GOOGLE-MAPS.png" width="100" /></p>'; } function tools() { window.open('https://jhsolucoesdigitais.com/', '_blank'); } var result_table = [ ['EMPRESA', 'TELEFONE', 'ENDEREÇO', 'SITE', 'AVALIAÇÕES', 'COMENTÁRIOS', 'CATEGORIA'] ]; async function iniciar() { function delay(n) { return new Promise(function(resolve) { setTimeout(resolve, n * 1000); }) }; do { var down_antes = document.querySelector("select").value; if (down_antes === 's') { nome = prompt("REALIZAR DOWNLOAD AO CHEGAR EM:"); } else { nome = 500; } } while (isNaN(nome) === true); do { var oi = document.querySelectorAll('div[jsname="GZq3Ke"]'); var f = oi.length; var i = 0; for (; i < f; i++) { document.querySelectorAll("div.rllt__details")[i].click(); await delay(5); var passada = 0; do { passada = passada + 1; var pos = document.querySelectorAll("div.dbg0pd")[i].innerText; var mon = document.querySelector("div.SPZz6b"); if (mon === null) { mon = 'erro'; } else { mon = mon.childNodes[0].innerText; } if (pos != mon) { document.querySelectorAll("div.rllt__details")[i].click(); var att = document.querySelector("span#ext").innerHTML = '<span style="font-size:18px"><span style="color:#008000"><strong>⏳</strong></span>'; await delay(3); } if (passada === 5) { pos = mon; } } while (pos != mon); var tel = document.querySelector('[data-dtype="d3ph"]'); var empresa = document.querySelectorAll('span[class="OSrXXb"]')[i].innerText; var endereco = document.querySelector('span[class="LrzXr"]'); var avaliacao = document.querySelectorAll("span.fzTgPe.Aq14fc"); var qtscomets = document.querySelectorAll("span.z5jxId"); var site = document.querySelectorAll("a.dHS6jb"); var categoria = document.querySelectorAll("span.YhemCb"); if (site.length === 0) { var site = 'Sem site' } else { if (site[0].innerText === 'Site') { site = site[0].href; } else { site = 'Sem site' }; }; if (qtscomets.length === 0) { var qtscomets = 'Sem comentários' } else { qtscomets = qtscomets[0].innerText; }; if (avaliacao.length === 0) { var avaliacao = 'Sem avaliacao' } else { avaliacao = avaliacao[0].innerText; }; if (tel === null) { var tel = 'Sem telefone' } else { tel = tel.innerText }; if (endereco === null) { var endereco = 'Sem endereco' } else { endereco = endereco.innerText; }; if (categoria.length === 0) { var categoria = 'Sem categoria' } else { categoria = categoria[categoria.length - 1].innerText; }; result_table.push([empresa, tel, endereco, site, avaliacao, qtscomets, categoria]); var val = result_table.length - 1; var att = document.querySelector("span#ext").innerHTML = '<span style="font-size:18px"><span style="color:#008000"><strong>Extraídos: ' + val + '</strong></span>'; if (val == nome) { download(); } }; var mais = document.querySelector("#pnnext > span:nth-child(2)"); if (mais == null) { download(); alert('Finalizado'); } else { mais.click(); await delay(5); do { var fimList = document.querySelectorAll('div[jsname="GZq3Ke"]'); var compara1 = document.querySelectorAll("div.dbg0pd")[fimList.length - 1].innerText; var table_ult = result_table.length - 1; var compara2 = result_table[table_ult][0]; if (compara1 == compara2) { document.querySelector("#pnnext > span:nth-child(2)").click(); await delay(5); var fimList = document.querySelectorAll('div[jsname="GZq3Ke"]'); var compara1 = document.querySelectorAll("div.dbg0pd")[fimList.length - 1].innerText; } } while (compara1 == compara2); } } while (mais != null); }; function download() { var filtrados = result_table.filter(([telefone], i) => { return !result_table.some(([_telefone], j) => j > i && telefone === _telefone); }); var unicos = filtrados; var lineArray = []; filtrados.forEach(function(infoArray, index) { var line = infoArray.join(" \t"); lineArray.push(index == 0 ? line : line); }); var csvContent = lineArray.join("\r\n"); var excel_file = document.createElement('a'); excel_file.setAttribute('href', 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(csvContent)); excel_file.setAttribute('download', 'JHS_EXTRATOR.txt'); document.body.appendChild(excel_file); excel_file.click(); document.body.removeChild(excel_file); }; async function contador() { function delay(n) { return new Promise(function(resolve) { setTimeout(resolve, n * 1000); }) }; alert('Iremos realizar a contagem, clique em "OK" e aguarde a finalização!'); confetti.start(); var pesquisa = document.querySelector("input.gLFyf.gsfi").value; var cont = 0; do { cont = cont + document.querySelectorAll('[class="VkpGBb"]').length; var m = document.querySelector("#pnnext > span:nth-child(2)"); if (m == null) { alert(pesquisa + ': Total: ' + cont); } else { m.click(); await delay(4); } } while (m != null); var pag = document.querySelector('[aria-label="Page 1"'); if (pag === null) { document.querySelector('[aria-label="Page 6"').click(); await delay(5); document.querySelector('[aria-label="Page 1"').click(); } else { pag.click(); } confetti.stop(); }
