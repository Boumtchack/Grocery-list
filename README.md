- create a new virtual env called `env`
    ```shell
    python3 -m venv env
    ```

- activate/deactivate the virtual env
    ```shell
    source env/bin/activate
    ```

    ```shell
    deactivate
    ```

- within `env`, install django
    ```shell
    pip install django
    ```

- create a new django project
  ```shell
  django-admin startproject "projectname"
  ```

- start the server
  ```shell
  python manage.py runserver
  ```

- create an app
  ```shell
  python manage.py startapp "appname"
  ```

- create migrations
  ```shell
  python manage.py makemigrations
  ```

- apply migrations
  ```shell
  python manage.py migrate
  ```

- create an admin user to access `/admin`
    ```shell
    python manage.py createsuperuser
    ```

- load initial data
    ```shell
    rm db.sqlite3
    python manage.py migrate
    python manage.py loaddata init-data.json
    ```
    This loads a superadmin user with username/password of `admin`. ⚠️ this is not secure and should not run on production.

- setup git
  ```shell
  git init
  touch .gitignore
  ```

- Curl get a specific resssource
  ```shell
  curl http://127.0.0.1:8000/mygrocerylist/api/v1/[ressource]/[uuid]
  ```

- Curl post a new ressource
  ```shell
   curl -X POST http://127.0.0.1:8000/mygrocerylist/api/v1/[ressource]/
   -d'{"data1":"data1_name","data2":"data2_name"}'
  ```

- Curl delete a specific ressource
  ```shell
   curl -X DELETE http://127.0.0.1:8000/mygrocerylist/api/v1/[ressource]/[uuid]
  ```
