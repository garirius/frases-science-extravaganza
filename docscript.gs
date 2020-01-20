function savePage(){
  var webFolder = DriveApp.getFolderById("1FzcEvRxaC2vx20NZ-8HptnN7pT_1qaI-");
  var bod = DocumentApp.getActiveDocument().getBody();
  var frases = bod.getListItems(); //sacamos las frases

  var str = "";
  for(var n=0; n<frases.length; n++){
    str += "<p>"+frases[n].getText()+"</p>\n\t";
  }

  //pillamos la plantilla web que tenemos y metemos nuestro texto
  var nuWeb = HtmlService.createHtmlOutputFromFile('template');
  var rawHTML = nuWeb.getContent();
  rawHTML = rawHTML.replace("#HERE#",str);

  //pillamos nuestra página web
  var page = webFolder.getFilesByName("index.html").next();
  page.setContent(rawHTML);
}

function onOpen(){
  //Crear menú de Science Extravaganza
  var ui = DocumentApp.getUi();
  ui.createMenu("Science Extravaganza")
    .addItem("Guardar frases","savePage")
    .addToUi();

    savePage();
}
