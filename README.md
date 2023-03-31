# Mini-aplicación para escuchar podcasts musicales


Mini-aplicación para escuchar podcasts musicales. La aplicación tiene tres vistas principales:

1.  Vista principal: donde se muestra una lista de todos los podcasts disponibles para escuchar.
2.  Detalles de un podcast: donde se muestra información detallada sobre un podcast en particular, como la descripción del podcast, la imagen y una lista de episodios disponibles.
3. Detalles de un episodio de un podcast: donde se muestra información detallada sobre un episodio de podcast en particular, como el título, la descripción y el archivo de audio para escuchar.



### Pre-requisitos

* npm
  ```sh
  npm install npm@latest -g
  ```
* node
   ```sh
  npm install -g npm
  
 

### Instalación

Para instalar la aplicación, siga los siguientes pasos:


1. Clona el repositorios
   ```sh
   git clone https://github.com/jocarrd/Podcaster
   ```
2. Instale las dependencias
   ```sh
   npm install
   ```


### Modo de desarrollo y producción


La aplicación tiene dos modos: desarrollo y producción. En modo desarrollo, los assets no están minimizados y se sirven individualmente. En modo producción, los assets están concatenados y minimizados.


Para ejecutar la aplicación en modo desarrollo, ejecute el siguiente comando:

* npm
  ```sh
  npm run dev
  ```


Para ejecutar la aplicación en modo producción, ejecute el siguiente comando:

* npm
  ```sh
  npm run build
  ```

  * npm
  ```sh
  npm run preview
  ```

 Esto creará una carpeta dist con los assets concatenados y minimizados.


 ### Testing

 Para realizar pruebas en la aplicación, he utilizado vitest con React Testing Library.
 Para ejecutar las pruebas , ejecute el siguiente comando:

 * npm
  ```sh
  npm run test
  ```

