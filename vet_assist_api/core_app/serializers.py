from rest_framework import serializers
from .models import *


class CustLoginRegSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = cust_login_registration


class CustAccountSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = cust_account


class PetRegSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = pet_registration


class PetDetailSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = pet_details


class ApmtSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = appointment


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = payment


class DoctorRegSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = doctor_reg