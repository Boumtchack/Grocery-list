from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=40)
    ammount = models.IntegerField(default=0)
    def __str__(self):
        return self.name

class List(models.Model):
    title = models.CharField(max_length=100)
    list_code = models.CharField(max_length=200)
    def __str__(self):
        return self.title

class ListManager(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    list = models.ForeignKey(List, on_delete=models.CASCADE)
