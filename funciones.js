function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
    let hoja = SpreadsheetApp.openById('1ed6NANH7_9Ie0o_KbAOcDsf0B2Zhcc-k1PGuBubUrpM').getActiveSheet();
    let  datos = hoja.getDataRange().getValues();
    return datos;
}