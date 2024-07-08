from django.urls import path

from . import views

app_name = 'mygrocerylist'
urlpatterns = [
    path("", views.start, name="start"),
    path("<int:list_id>/", views.details, name="details"),
]
