from django.urls import path

from .views import view_index, view_list, view_user, view_product
from .api import view_api

app_name = "mygrocerylist"
urlpatterns = [
    path("", view_index, name="index"),
    path("u/<uuid:id>", view_user, name="user"),
    path("l/<uuid:id>", view_list, name="list"),
    path("p/<uuid:id>", view_product, name="product"),
    path("api/v1/<str:resource>/", view_api, name="api"),
    path("api/v1/<str:resource>/<uuid:id>", view_api, name="api"),
]
