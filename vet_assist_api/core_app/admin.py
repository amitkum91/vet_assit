from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(cust_login_registration)
admin.site.register(cust_account)
admin.site.register(pet_registration)
admin.site.register(pet_details)
admin.site.register(payment)
admin.site.register(doctor_reg)
admin.site.register(appointment)