from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import *
from .serializers import *
from drf_yasg.utils import swagger_auto_schema


class ApiViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    # serializer_class = CategorySerializer

    def get_all_categories(cls, request):
        
        try:
            categories = Category.objects.all()
        
            serializer = CategorySerializer(instance=categories, many=True)
            
            return Response(data=serializer.data)
        except:
            return Response(data="not found")
    
    def get_one_category(cls, request, id : int):
        
        try:
            category = Category.objects.get(pk=id)
        
            serializer = CategorySerializer(instance=category)
            
            return Response(data=serializer.data)
        except:
            return Response(data="not found")

    def get_products(cls, request, id : int):
        
        
        try:
            products = Product.objects.filter(category=id)
            
            serializer = ProductSerializer(instance=products, many=True)
            
            return Response(data=serializer.data)
        except:
            return Response(data="not found")

    
    def get_product(cls, request, id : int):
        
     
        try:
            product = Product.objects.get(pk=id)
        
            serializer = ProductSerializer(instance=product, many=False)
            
            return Response(data=serializer.data)
        except:
            return Response(data="not found")

        
    def get_all_product(cls, request):
        try:
            products = Product.objects.all()
            
            serializer = ProductSerializer(instance=products, many=True)

            return Response(data=serializer.data)
        except:
            return Response(data="not found")

    @swagger_auto_schema(operation_summary="add category", request_body=CategorySerializer)
    def add_category(cls, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response({"detail" : serializer.errors})
        return Response(data=serializer.data)
    @swagger_auto_schema(operation_summary="add product", request_body=ProductSerializer)
    def add_product(cls, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response({"detail" : serializer.errors})
        return Response(data=serializer.data)
    