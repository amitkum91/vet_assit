from rest_framework import generics

from .models import *
from .serializers import *

class CustAcctDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = cust_account.objects.all()
    serializer_class = CustAccountSerializer


class LoginRegDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = cust_login_registration.objects.all()
    serializer_class = CustLoginRegSerializer


class PetRegDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = pet_registration.objects.all()
    serializer_class = PetRegSerializer


class PetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = pet_details.objects.all()
    serializer_class = PetDetailSerializer


class ApmtDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = appointment.objects.all()
    serializer_class = ApmtSerializer


class PaymtDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = payment.objects.all()
    serializer_class = PaymentSerializer


class DocRegDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = doctor_reg.objects.all()
    serializer_class = DoctorRegSerializer

#################################################################

class CreateCustAcct(generics.ListCreateAPIView):
    queryset = cust_account.objects.all()
    serializer_class = CustAccountSerializer


class CreateLoginReg(generics.ListCreateAPIView):
    queryset = cust_login_registration.objects.all()
    serializer_class = CustLoginRegSerializer


class CreatePetReg(generics.ListCreateAPIView):
    queryset = pet_registration.objects.all()
    serializer_class = PetRegSerializer


class CreatePet(generics.ListCreateAPIView):
    queryset = pet_details.objects.all()
    serializer_class = PetDetailSerializer


class CreateApmt(generics.ListCreateAPIView):
    queryset = appointment.objects.all()
    serializer_class = ApmtSerializer


class CreatePaymt(generics.ListCreateAPIView):
    queryset = payment.objects.all()
    serializer_class = PaymentSerializer


class CreateDocReg(generics.ListCreateAPIView):
    queryset = doctor_reg.objects.all()
    serializer_class = DoctorRegSerializer


