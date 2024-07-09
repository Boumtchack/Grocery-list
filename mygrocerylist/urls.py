from django.urls import path

from .views import view_index, view_list, view_user, view_product

app_name = "mygrocerylist"
urlpatterns = [
    path("", view_index, name="index"),
    path("u/<uuid:id>", view_user, name="user"),
    path("l/<uuid:id>", view_list, name="list"),
    path("p/<uuid:id>", view_product, name="product"),
]
