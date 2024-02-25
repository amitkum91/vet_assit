# Generated by Django 4.2.10 on 2024-02-22 18:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core_app', '0002_payment_paymt_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='doctor_id',
        ),
        migrations.AddField(
            model_name='appointment',
            name='doc_id',
            field=models.ForeignKey(db_column='doc_id', default=123, on_delete=django.db.models.deletion.CASCADE, to='core_app.doctor_reg'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='appointment',
            name='pet_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core_app.pet_details'),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='pet_owner_id',
            field=models.ForeignKey(db_column='cust_id', on_delete=django.db.models.deletion.CASCADE, to='core_app.cust_login_registration'),
        ),
    ]