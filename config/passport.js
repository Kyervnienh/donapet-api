const passport = require('passport');                       //Importando passport, middleware para autenticación.
const LocalStrategy = require('passport-local').Strategy;   //Importando estrategia autenticación. --> passport-local
const Usuario = require('../models/usuario');

passport.use(new LocalStrategy({                            //Configurando elementos utilizados para habilitar sesión.
  usernameField: 'correo',
  passwordField: 'password'
}, function (correo, password, done) {
  Usuario.findOne({where: { correo: correo }}).then(function (user) {
    if (!user || !user.validarPassword(password)) {
      return done(null, false, { errors: { 'email o contraseña': 'equivocado(a)' } });
    }
    return done(null, user);
  }).catch(done);
}));