// VERSION 2
function startApp() {
  var loader = document.getElementById('loading');
  loader.style.display = 'none';
  
  var app = document.getElementById('app');
  app.style.display = 'block';

  var pageList = document.getElementById('showdata');

  let showHebergement = document.getElementById('show-hebergement')
  let showInteret = document.getElementById('show-interet')
  let ul = document.getElementById('write')

  var btnPostHebergement = document.getElementById('send-hebergement');
  btnPostHebergement.addEventListener('click', () => {
    $.post( "http://localhost:3000/postHebergement", { name: "Pullman Hotel", lattitude: "43.608612,", longitude:"1.453505", description:"Lorem ipsum" })
    .done( dataH => {
      console.log( "request success", dataH );
      pageList.style.display = 'block';
    })
    .fail(function(e) {
      console.error(e);
      alert( "error" );
    });
  });
  
  var btnPostInteret = document.getElementById('send-interet');
  btnPostInteret.addEventListener('click', () => {
    // TODO afficher un loader 
    $.post( "http://localhost:3000/postInteret", { name: "Mairie de Toulouse", lattitude: "43.608612,", longitude:"1.453505", description:"Lorem ipsum" })
    .done( dataI => {
      console.log( "request success", dataI );
      pageList.style.display = 'block';
    })
    .fail(function(e) {
      console.error(e);
      alert( "error" );
    });
  });
  
  
  showHebergement.addEventListener('click', () => {
      $.get("http://localhost:3000/hebergement", function (dataH) {
          console.log(dataH)
          var content = ''
          for (let i = 0; i < dataH.dataH.length; i++) {
              content += '<li>' + dataH.dataH[i].name + '</li>'
          }
          ul.innerHTML = content
          pageList.style.display = 'inline-block'
      })
      .fail(function(e){
        console.error(e);
        alert("error");
      });
  })
  
  
  showInteret.addEventListener('click', function (e) {
    $.get("http://localhost:3000/interet", function (dataI) {
        console.log(dataI)
        var content = ''
        for (let i = 0; i < dataI.dataI.length; i++) {
            content += '<li>' + dataI.dataI[i].name + '</li>'
        }
        ul.innerHTML = content
        pageList.style.display = 'inline-block'
    })
    .fail(function(e){
      console.error(e);
      alert("error");
    });
  });
}
//document.addEventListener('deviceready', startApp, false);

setTimeout(startApp, 1000);