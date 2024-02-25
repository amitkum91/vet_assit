from rest_framework import generics

from .models import *
from .serializers import *
import razorpay
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


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


#################################################################
    
razorpay_client = razorpay.Client(auth=("rzp_test_jA01TPKltbFtUD", "U12h67YsMKgVgXXgSS2KebLv"))

@csrf_exempt
def new_order(request):
    if request.method == "POST":

        print("", request.POST['fee'])
        fee = int(request.POST['fee'])
        apmt_id = request.POST['apmt_id']

        new_order_response = razorpay_client.order.create({
                        "amount": fee*100,
                        "currency": "INR",
                        "payment_capture": "1"
                      })

        response_data = {
                "callback_url": "http://127.0.0.1:8000/api/callback",
                "razorpay_key": "rzp_test_jA01TPKltbFtUD",
                "order": new_order_response,
                "apmt_id": apmt_id
        }
        print(response_data)
        return JsonResponse(response_data)


@csrf_exempt
def order_callback(request):
    if request.method == "POST":
        if "razorpay_signature" in request.POST:
            payment_verification = razorpay_client.utility.verify_payment_signature(request.POST)
            if payment_verification:
                return JsonResponse({"paymt_id": request.POST['razorpay_payment_id']})
                # Logic to perform is payment is successful
            else:
                return JsonResponse({"res":"failed"})
                # Logic to perform is payment is unsuccessful