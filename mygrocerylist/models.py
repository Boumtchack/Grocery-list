from django.db import models
from uuid import uuid4


class User(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=100, default="jane doe")

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            "id": str(self.id),
            "name": self.name,
            "lists": [str(lst.id) for lst in self.list_set.all()],
        }

    def get_absolute_url(self):
        return "/mygrocerylist/u/%s" % self.id


class List(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    title = models.CharField(max_length=100, default="my new list")
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.title

    def to_json(self):
        return {
            "id": str(self.id),
            "title": self.title,
            "user": str(self.user.id) if self.user else None,
            "products": [str(prod.id) for prod in self.product_set.all()],
        }

    def get_absolute_url(self):
        return "/mygrocerylist/l/%s" % self.id


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=40)
    amount = models.IntegerField(default=1)
    list = models.ForeignKey(List, on_delete=models.CASCADE)

    def get_absolute_url(self):
        return "/mygrocerylist/p/%s" % self.id

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            "id": str(self.id),
            "name": self.name,
            "amount": self.amount,
            "list": str(self.list.id),
        }
