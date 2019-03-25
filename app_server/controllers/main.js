module.exports.index = function(req, res, next) {
    res.render('index', { title: ' GrupoKFC', 
                          restaurant:[
                            {nombre: 'Kentucky Fried Chicken',
                             tipo: 'Comida Rapida'
                          }, 
                          {nombre: 'Menestras del Negro',
                            tipo: 'Comida Rapida'}]
                         });
  }

  module.exports.hola = function(req, res, next) {
    res.render('hola', { title: 'hola Lola' });
  }

  module.exports.about = function(req, res, next) {
    res.render('about', { title: 'otra cosa' });
  }