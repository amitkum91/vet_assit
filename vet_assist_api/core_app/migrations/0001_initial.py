# Generated by Django 4.2.10 on 2024-02-07 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='appointment',
            fields=[
                ('apmt_id', models.IntegerField(editable=False, primary_key=True, serialize=False)),
                ('pet_id', models.IntegerField()),
                ('pet_owner_id', models.CharField(max_length=200)),
                ('apmt_datetime', models.CharField(max_length=200)),
                ('doctor_id', models.CharField(max_length=200)),
                ('department', models.CharField(max_length=200)),
                ('consultation_fee', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='cust_account',
            fields=[
                ('cust_id', models.IntegerField(primary_key=True, serialize=False)),
                ('card_type', models.CharField(max_length=200)),
                ('card_no', models.CharField(max_length=200)),
                ('card_expiry', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='cust_login_registration',
            fields=[
                ('cust_id', models.IntegerField(editable=False, primary_key=True, serialize=False)),
                ('reg_mobile_no', models.CharField(max_length=200)),
                ('password', models.CharField(max_length=200)),
                ('cust_name', models.CharField(max_length=200)),
                ('cust_email', models.CharField(max_length=200)),
                ('cust_address', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='doctor_reg',
            fields=[
                ('doc_id', models.IntegerField(editable=False, primary_key=True, serialize=False)),
                ('doc_name', models.IntegerField()),
                ('department', models.CharField(max_length=200)),
                ('doc_age', models.CharField(max_length=200)),
                ('highest_qualification', models.CharField(max_length=200)),
                ('contact', models.CharField(max_length=200)),
                ('address', models.CharField(max_length=200)),
                ('reg_mobile_no', models.CharField(max_length=200)),
                ('password', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='payment',
            fields=[
                ('paymt_id', models.IntegerField(editable=False, primary_key=True, serialize=False)),
                ('apmt_id', models.IntegerField()),
                ('amount', models.CharField(max_length=200)),
                ('paymt_datetime', models.CharField(max_length=200)),
                ('paymt_mode', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='pet_details',
            fields=[
                ('pet_id', models.IntegerField(primary_key=True, serialize=False)),
                ('pet_kind', models.CharField(max_length=200)),
                ('pet_age', models.CharField(max_length=200)),
                ('pet_weight', models.CharField(max_length=200)),
                ('pet_sex', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='pet_registration',
            fields=[
                ('cust_id', models.IntegerField()),
                ('pet_id', models.IntegerField(editable=False, primary_key=True, serialize=False)),
            ],
        ),
    ]
