from django.urls import path

from .views import view_index, view_list

app_name = "mygrocerylist"
urlpatterns = [
    path("", view_index, name="index"),
    path("<uuid:id>/", view_list, name="list"),
]
