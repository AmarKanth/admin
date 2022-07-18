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
		read_only_fields = ('id',)


class UserSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = User
		fields = ('id', 'username', 'first_name', 'last_name', 'email', 'is_active', 'role')
		read_only_fields = ('id',)
		extra_kwargs = {
			'password': {'write_only': True}
		}

	def create(self, validated_data):
		validated_data["password"] = "password"
		return self.Meta.model.objects.create_user(**validated_data)