from django.forms import ModelForm
from .models import Product, List, User


class UserForm(ModelForm):
    class Meta:
        model = User
        fields = ["name"]


class ListForm(ModelForm):
    class Meta:
        model = List
        fields = ["title"]


class ProductForm(ModelForm):
    class Meta:
        model = Product
        fields = ["name", "ammount"]
