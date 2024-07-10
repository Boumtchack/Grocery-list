from django.contrib import admin

# Register your models here.

from .models import List, User, Product


admin.site.register(List)
admin.site.register(User)
admin.site.register(Product)
