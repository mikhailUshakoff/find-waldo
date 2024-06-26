# Use the official Nginx image as a base
FROM nginx:alpine

# Copy the HTML file and image to the Nginx HTML directory
COPY index.html /usr/share/nginx/html/
COPY waldo1.png /usr/share/nginx/html/
COPY artifacts/pk.bin /usr/share/nginx/html/
COPY artifacts/artifacts.json /usr/share/nginx/html/

# Expose port 80
EXPOSE 80
