# Generated by Django 2.1.4 on 2018-12-29 08:05

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0002_auto_20181229_1334'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='date_joined',
            field=models.DateField(default=datetime.datetime(2018, 12, 29, 8, 5, 41, 319602, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='date_passed',
            field=models.DateField(default=datetime.datetime(2018, 12, 29, 8, 5, 41, 319602, tzinfo=utc)),
        ),
    ]