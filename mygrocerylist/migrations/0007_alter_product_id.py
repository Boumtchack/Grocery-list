# Generated by Django 5.0.6 on 2024-07-09 16:43

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mygrocerylist', '0006_rename_ammount_product_amount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
