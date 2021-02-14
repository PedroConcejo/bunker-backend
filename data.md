### Postman set Token in headers

    **Copy in test**
var data = pm.response.json();
pm.environment.set("token", data.token);

### Run Mondo Service

sudo systemctl start mongod
sudo systemctl status mongod