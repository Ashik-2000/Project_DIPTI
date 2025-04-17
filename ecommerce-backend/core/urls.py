from django.urls import path
from .views import CategoryListAPIView, ProductListAPIView, hello_world, RegisterView

urlpatterns = [
    path('hello/', hello_world),
    path('categories/', CategoryListAPIView.as_view()),
    path('products/', ProductListAPIView.as_view()),
    path('register/', RegisterView.as_view()),
]
