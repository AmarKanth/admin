from rest_framework import serializers
from products.models import Product


class PermissionSerializer(serializers.ModelSerializer):

	class Meta:
		model = Product
		fields = '__all__'