from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from users import views


urlpatterns = [
	path('token/create/', TokenObtainPairView.as_view(), name='token-create'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token-verify'),
    path('logout/', views.Logout.as_view(), name='logout'),
	path('user_details/', views.AuthenticatedUserDetails.as_view(), name='user-details'),
	path('users/', views.Users.as_view(), name='users-list'),
]