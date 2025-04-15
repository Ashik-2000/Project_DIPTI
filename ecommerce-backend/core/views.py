from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

@api_view(['GET'])
def hello_world(request):
    return Response({"message": "Hello from Django!"})

class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer