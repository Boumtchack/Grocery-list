from django.db import models
from uuid import uuid4


class User(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=100, default="jane doe")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return "/mygrocerylist/u/%s" % self.id


class List(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    title = models.CharField(max_length=100, default="my new list")
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return "/mygrocerylist/l/%s" % self.id


class Product(models.Model):
    name = models.CharField(max_length=40)
    ammount = models.IntegerField(default=1)
    list = models.ForeignKey(List, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
