# Generated by Django 4.2.10 on 2024-03-09 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_app', '0002_doctor_reg_profiletype'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='apmt_id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]