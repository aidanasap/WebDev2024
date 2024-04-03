from django.urls import path, include

from .views import ApiViewSet
urlpatterns = [
    path('products/', ApiViewSet.as_view({'get': 'get_all_product'}), name="auth"),
    path('products/<int:id>/', ApiViewSet.as_view({'get': 'get_product'}), name="auth"),
    path('categories/', ApiViewSet.as_view({'get': 'get_all_categories'}), name="auth"),
    path('categories/<int:id>/', ApiViewSet.as_view({'get': 'get_one_category'}), name="auth"),
    path('categories/<int:id>/products/', ApiViewSet.as_view({'get': 'get_products'}), name="auth"),
    path('category/add/', ApiViewSet.as_view({'post': 'add_category'}), name="auth"),
    path('product/add/', ApiViewSet.as_view({'post': 'add_product'}), name="auth"),
]

