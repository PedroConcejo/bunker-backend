### Postman set Token in headers

    **Copy in test**
var data = pm.response.json();
pm.environment.set("token", data.token);

### Run Mondo Service

sudo systemctl start mongod
sudo systemctl status mongod

### React

npx create-react-app <Nombre_Carpeta>

npm install --save react-router-dom

npm install axios

npm install react-bootstrap bootstrap

public/index.html -->
<link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous"
  />


