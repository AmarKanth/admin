from rest_framework_simplejwt.token_blacklist.models import OutstandingToken, BlacklistedToken

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, exceptions

from users.serializers import UserSerializer
from users.models import User


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


class Users(APIView):

	def get(self, request):
		users = User.objects.all()
		serializer = UserSerializer(users, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)

	def post(self, request):
		serializer = UserSerializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		serializer.save()
		return Response(serializer.data, status=status.HTTP_201_CREATED)