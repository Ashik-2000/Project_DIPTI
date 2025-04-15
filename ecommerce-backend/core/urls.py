from django.urls import path
from .views import CategoryListAPIView, ProductListAPIView, hello_world

urlpatterns = [
    path('hello/', hello_world),
    path('categories/', CategoryListAPIView.as_view()),
    path('products/', ProductListAPIView.as_view()),
]
