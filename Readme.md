# UPshow - QA Automation Test

## Requirements

- NodeJs 12 or higher;

## Framework

https://nightwatchjs.org/

## Website

https://www.phptravels.net/

## User Story

As an `anonimous user`, I want to be able to successfully register into the webseite.

### Acceptance Criteria

- Registration should require the first name, last name, mobile number, email address, and the password;
- The email should be in a valid format;
- The email should be unique between the users;
- The password field must be at least 6 characters;
- The password should be filled twice to avoid the possibility of mistaking;
- Ones the user successfully register, the system should redirect to the profile page;


-------------

My Info

Registration should require the first name, last name, mobile number, email address, and the password; ***MAL LAS ETIQUETAS
- The email should be in a valid format; ** NO VALIDA EL FORMATO
- The email should be unique between the users;  VALIDA OK
- The password field must be at least 6 characters;  NO VALIDA A CANTIDAD DE CARACTERES
- The password should be filled twice to avoid the possibility of mistaking; NO ENTENDI ESTO
- Ones the user successfully register, the system should redirect to the profile page; VALIDA OK

No valida el telefono

 El registro debe requerir el nombre, apellido, número de teléfono móvil, dirección de correo electrónico y contraseña;
- El correo electrónico debe tener un formato válido;
- El correo electrónico debe ser único entre los usuarios;
- El campo de contraseña debe tener al menos 6 caracteres;
- La contraseña debe completarse dos veces para evitar la posibilidad de error;
- Una vez que el usuario se registra con éxito, el sistema debe redirigir a la página de perfil;


 Casos de prueba
 1. Validar pantalla --- Display "Signup" page
 2. Validar campos vacios.
 3. Validar formato mail
 4. validar password > 6 caracteres
 5. validar registro exitoso
 **
 6. Validar formato del campo telefono
 7. validar maximo caracteres  *** aqui, ni se especifica en la story ni se valida en la web

Mejoras, lo de los campos de nombre y apellido
Validar campos vacios. *** los mensajes de error del sistema estan en espannol, deberian ser en ingles