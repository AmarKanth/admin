from rest_framework.viewsets import ModelViewSet
from products.models import Product
from products.serializers import PermissionSerializer
from core.pagination import CustomPagination

class ProductsAPIViewset(ModelViewSet):
	queryset = Product.objects.all().order_by('-id')
	serializer_class = PermissionSerializer
	pagination_class = CustomPagination