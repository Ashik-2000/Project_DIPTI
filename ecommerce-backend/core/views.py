from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.views import APIView

@api_view(['GET'])
def hello_world(request):
    return Response({"message": "Hello from Django!"})

class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer



class RegisterView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists'}, status=400)

        user = User.objects.create_user(username=username, password=password)
        return Response({'message': 'User created successfully'}, status=201)