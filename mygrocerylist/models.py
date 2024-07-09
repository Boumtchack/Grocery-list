from django.db import models
from uuid import uuid4


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=40)
    ammount = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class List(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return "/mygrocerylist/%s/" % self.id


class ListManager(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    list = models.ForeignKey(List, on_delete=models.CASCADE)
