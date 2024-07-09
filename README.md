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

- setup git
  ```shell
  git init
  touch .gitignore
  ```
