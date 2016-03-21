
window.onload = function() { init() };

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1nPwfhbwXeIv8ksiuX6Q9rj7QBzV6skdr0z_g2gvaL3E/pubhtml';

function init() { Tabletop.init(
    {
      key: public_spreadsheet_url,
      callback: showInfo
    }
  )
}

function showInfo(data){

  console.log(data);





var svg = d3.select("body").append("svg")
    .attr("width", 1000)
    .attr("height", 5000)

  svg.selectAll('.pers')
    .data(data.personnes.elements)
    .enter()
    .append('circle')
    .attr('cy', function(d,i){

      return i * 5;

    })
    .attr('cx', function(d){

      if(d.DNAP === "") return 500


      var dates = d.DNAP.split("/");
      var fin = parseInt(dates[1])

      return (fin - 2000) * 20

    })
    .attr('r', 4 )
    .style('fill', function(d){

      if(d.www === "") return "blue";
      else return "red";

    });

  // data.personnes.elements.forEach(function(d){

  //   var DNSEP = (d.DNSEP === "" || d.DNSEP === "?") ? "" : '('+d.DNSEP+')';

  //   if(d.www != "") $( "#listPersonnes" ).append(
  //     '<a class="link" title="'
  //     + d.prenom +' '+ d.nom + DNSEP + '" target="_blank" href="'+d.www
  //     +'"><img width="20%" src="http://free.pagepeeker.com/v2/thumbs.php?size=x&url='+d.www
  //     +'"></a>' );
  // })

  // $('.link').mouseover(function() {
  //   $('#infoZone').html( $(this).attr('title'))
  // })

}
