# Challenge Amigo Secreto
<p align="center">
<img src="https://img.shields.io/badge/status-done-green">
</p>

<p align="center">
<img width="840" height="703" alt="base1" src="https://github.com/user-attachments/assets/312a60f2-0ae2-419f-a92e-b8599cb4527a" />
</p>

## Descripción del proyecto
En este desafío, se desarrolló una aplicación que permite a los usuarios ingresar nombres de amigos en una lista 
para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".
El usuario agrega nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en
una lista visible en la página, y al finalizar, un botón "Sortear Amigo" selecciona uno de los nombres de forma 
aleatoria, mostrando el resultado en pantalla.

## Funcionalidades del proyecto ⬆️
- `Agregar nombres:` Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
- `Validar entrada:` Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
- `Visualizar la lista:` Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
- `Sorteo aleatorio:` Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

## Funcionamiento
### JavaScript
- Se declara una variable de tipo array, que almacenará los nombres de los amigos ingresados.
- Se desarrolló una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
<p align="left">
  <img width="656" height="368" alt="base2" src="https://github.com/user-attachments/assets/5648ac83-5ce1-4752-a9ec-80540fd5745a" />
</p>

- Se desarrolló una función que recorre el array amigos y agrega cada nombre como un elemento `<li>` dentro de una lista HTML. Se usa `innerHTML` para limpiar la lista antes de agregar nuevos elementos.
  
<p align="left">
  <img width="564" height="238" alt="base3" src="https://github.com/user-attachments/assets/692761dd-9ebb-4110-bad4-c9f6ff9e79e5" />
</p>

- Se escribió una función que seleccionó de manera aleatoria uno de los nombres almacenados en el array amigos. Se usa `Math.random()` y `Math.floor()` para obtener un índice aleatorio.
  
<p align="left">
  <img width="1184" height="291" alt="base4" src="https://github.com/user-attachments/assets/44609963-edc0-4fed-8ccd-7d6b0dc78285" />
</p>


## Tecnologías utilizadas
- JavaScript
- HTML
- CSS
  
## Autor
It's me... Mario!

## Conclusiones
Código ejecutado correctamente.
