$( document ).ready(function() {
  var data = jsyaml.safeLoad(getText('./archive.yml'));
  var templates = getTemplates();


  $('#list').html(templates.issue( {list:data} ));

  $("input[type='text']").on("input", function(){
    console.log( $( this ).val() )

    var searchStr = $( this ).val();
    var filtered = _.filter(data, function (obj) {
      return _.values(obj).some(function (el) {
        var t = _.toString(el).toLowerCase();
        return t.indexOf(searchStr.toLowerCase()) > -1;
      });
    });

    $('#list').html(templates.issue( {list: filtered} ));

  });

});

function getText(myUrl){
    var result = null;
    $.ajax( { url: myUrl,
              type: 'get',
              dataType: 'html',
              async: false,
              success: function(data) { result = data; }
            }
    );
    FileReady = true;
    return result;
}

function getTemplates(){
  var t = [];
  $('script[type*=handlebars-template]').each(function(){
    t[$(this).attr('id')] = Handlebars.compile($(this).html());
  })
  return t;
}

Handlebars.registerHelper('debug', function(optionalValue) {
  console.log('Current Context');
  console.log('====================');
  console.log(this);

  if (optionalValue) {
    console.log('Value');
    console.log('====================');
    console.log(optionalValue);
  }
});
