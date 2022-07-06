from rest_framework import serializers
from users.models import Permission, Role, User


class PermissionSerializer(serializers.ModelSerializer):

	class Meta:
		model = Permission
		fields = "__all__"


class RoleSerializer(serializers.ModelSerializer):

	class Meta:
		model = Role
		fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = User
		fields = ('id', 'username', 'first_name', 'last_name', 'email', 'password',)
		read_only_fields = ('id',)
		extra_kwargs = {
			'password': {'write_only': True}
		}

	def create(self, validated_data):
		return self.Meta.model.objects.create_user(**validated_data)