from django.urls import path
from . import views

urlpatterns = [
    path('custlogin/<int:pk>/', views.LoginRegDetail.as_view()),
    path('custacct/<int:pk>/', views.CustAcctDetail.as_view()),
    path('petreg/<int:pk>/', views.PetRegDetail.as_view()),
    path('petdtl/<int:pk>/', views.PetDetail.as_view()),
    path('apmtdtl/<int:pk>/', views.ApmtDetail.as_view()),
    path('paymtdtl/<int:pk>/', views.PaymtDetail.as_view()),
    path('docregdtl/<int:pk>/', views.DocRegDetail.as_view()),

    path('custlogin', views.CreateLoginReg.as_view()),
    path('custacct', views.CreateCustAcct.as_view()),
    path('petreg', views.CreatePetReg.as_view()),
    path('pet', views.CreatePet.as_view()),
    path('apmt', views.CreateApmt.as_view()),
    path('paymt', views.CreatePaymt.as_view()),
    path('docreg', views.CreateDocReg.as_view())
]