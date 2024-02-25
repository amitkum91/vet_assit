from django.db import models

# Create your models here.
class cust_login_registration(models.Model):
    cust_id = models.IntegerField(primary_key=True, editable=False)
    reg_mobile_no = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    cust_name = models.CharField(max_length=200)
    cust_email = models.CharField(max_length=200)
    cust_address = models.CharField(max_length=200)


class cust_account(models.Model):
    cust_id = models.IntegerField(primary_key=True)
    card_type = models.CharField(max_length=200)
    card_no = models.CharField(max_length=200)
    card_expiry = models.CharField(max_length=200)


class pet_registration(models.Model):
    cust_id = models.IntegerField()
    pet_id = models.IntegerField(primary_key=True, editable=False)


class pet_details(models.Model):
    pet_id = models.IntegerField(primary_key=True)
    pet_kind = models.CharField(max_length=200)
    pet_age = models.CharField(max_length=200)
    pet_weight = models.CharField(max_length=200)
    pet_sex = models.CharField(max_length=200)


class payment(models.Model):
    paymt_id = models.IntegerField(primary_key=True, editable=False)
    apmt_id = models.IntegerField()
    amount = models.CharField(max_length=200)
    paymt_datetime = models.CharField(max_length=200)
    paymt_mode = models.CharField(max_length=200)
    paymt_status = models.CharField(max_length=200)


class doctor_reg(models.Model):
    doc_id = models.IntegerField(primary_key=True, editable=False)
    doc_name = models.IntegerField()
    department = models.CharField(max_length=200)
    doc_age = models.CharField(max_length=200)
    highest_qualification = models.CharField(max_length=200)
    contact = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    address_lat = models.DecimalField
    address_lon = models.DecimalField
    reg_mobile_no = models.CharField(max_length=200)
    password = models.CharField(max_length=200)


class appointment(models.Model):
    apmt_id = models.IntegerField(primary_key=True, editable=False)
    pet_id = models.ForeignKey(pet_details, on_delete=models.CASCADE)
    pet_owner_id = models.ForeignKey(cust_login_registration, db_column='cust_id', on_delete=models.CASCADE)
    apmt_datetime = models.CharField(max_length=200)
    doc_id = models.ForeignKey(doctor_reg, db_column='doc_id', on_delete=models.CASCADE)
    department = models.CharField(max_length=200)
    consultation_fee = models.CharField(max_length=200)
    
    def __str__(self):
        return f"{self.apmt_id} {self.pet_id} {self.pet_owner_id} {self.apmt_datetime} {self.doc_id} {self.department} \
        {self.consultation_fee} {self.pet_id.pet_kind} {self.pet_owner_id.cust_name} {self.doc_id.doc_name}"