from rest_framework_simplejwt.token_blacklist.models import OutstandingToken, BlacklistedToken

from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status, exceptions

from users.serializers import UserSerializer, PermissionSerializer, RoleSerializer
from users.models import Role, Permission, User
from users.pagination import CustomPagination


class Register(APIView):

	def post(self, request):
		data = request.data

		if data['password'] != data['password_confirm']:
			raise exceptions.APIException('Passwords do not match!')

		serializer = UserSerializer(data=data)
		serializer.is_valid(raise_exception=True)
		serializer.save()
		return Response(serializer.data)


class Logout(APIView):

	def get(self, request):
		tokens = OutstandingToken.objects.filter(user=request.user)

		for token in tokens:
			BlacklistedToken.objects.get_or_create(token=token)

		return Response(status=status.HTTP_205_RESET_CONTENT)


class AuthenticatedUserDetails(APIView):

	def get(self, request):
		user = request.user
		serializer = UserSerializer(user)
		return Response(serializer.data, status=status.HTTP_200_OK)


class PermissionAPIViewset(ModelViewSet):
	queryset = Permission.objects.all()
	serializer_class = PermissionSerializer


class RoleAPIViewset(ModelViewSet):
	queryset = Role.objects.all()
	serializer_class = RoleSerializer


class UsersAPIViewset(ModelViewSet):
	queryset = User.objects.all().order_by('id')
	serializer_class = UserSerializer
	pagination_class = CustomPagination