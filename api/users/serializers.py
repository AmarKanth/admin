from rest_framework import serializers
from users.models import User


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