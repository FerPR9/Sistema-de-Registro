# Construir la aplicación Angular
FROM nginx:stable-alpine

# Eliminar archivos preexistentes en la carpeta de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar el archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar todo el código fuente de Angular
# COPY registro/usr/share/nginx/html

COPY ./usr/share/nginx/html

# Exponer el puerto 80 para Nginx
EXPOSE 80

# Iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]