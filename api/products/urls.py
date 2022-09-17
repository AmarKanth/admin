from django.urls import path, include
from rest_framework.routers import DefaultRouter
from products import views

routers = DefaultRouter()
routers.register('products', views.ProductsAPIViewset)

urlpatterns = [
	path('', include(routers.urls))
]