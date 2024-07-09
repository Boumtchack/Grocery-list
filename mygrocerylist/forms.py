from django.forms import ModelForm
from .models import Product, List

class ListForm(ModelForm):
    class Meta:
        model = List
        fields = ["title"]

class ProductForm(ModelForm):
    class Meta:
        model = Product
        fields = ["name", "ammount"]
