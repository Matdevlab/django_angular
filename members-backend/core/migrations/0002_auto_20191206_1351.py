# Generated by Django 3.0 on 2019-12-06 16:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='member',
            old_name='surname',
            new_name='secondname',
        ),
    ]