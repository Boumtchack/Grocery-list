creer un nouvel environement virtuel :
```
python3 -m venv env
```

activer l'environement:
```
source env/bin/activate
```

desactiver l'environement:
```
deactivate
```

installer Django (dans le 'env'):
```
pip install django
```

création d'un nouveau projet:

```
django-admin startproject "projectname"
```

lancer le serveur:

```
python manage.py runserver
```

créaction d'une app:

```
python manage.py startapp "appname"
```

Run: 
```
python manage.py makemigrations to create migrations for those changes
```
to create migrations for those changes

Run:

```
python manage.py migrate 
```
to apply those changes to the database.

git init

touch .gitignore

