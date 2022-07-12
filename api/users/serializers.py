from rest_framework import serializers
from users.models import Permission, Role, User


class PermissionSerializer(serializers.ModelSerializer):

	class Meta:
		model = Permission
		fields = "__all__"


class PermissionRelatedField(serializers.StringRelatedField):
    def to_representation(self, value):
        return PermissionSerializer(value).data

    def to_internal_value(self, data):
        return data


class RoleSerializer(serializers.ModelSerializer):
	permissions = PermissionRelatedField(many=True)

	class Meta:
		model = Role
		fields = "__all__"


class RoleRelatedField(serializers.RelatedField):
	queryset = Role.objects.all()

	def to_representation(self, instane):
		return RoleSerializer(instane).data

	def to_internal_value(self, data):
		try:
			return self.queryset.get(pk=data)
		except Role.DoesNotExist:
			raise serializers.ValidationError("This field may not be blank.")


class UserSerializer(serializers.ModelSerializer):
	role = RoleRelatedField()
	
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