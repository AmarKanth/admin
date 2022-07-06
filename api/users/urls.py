from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from users import views


router = DefaultRouter()
router.register('users', views.UsersAPIViewset)
router.register('roles', views.RoleAPIViewset)
router.register('permissions', views.PermissionAPIViewset)


urlpatterns = [
	path('token/create/', TokenObtainPairView.as_view(), name='token-create'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token-verify'),
    path('register/', views.Register.as_view(), name='signup'),
    path('logout/', views.Logout.as_view(), name='logout'),
	path('user_details/', views.AuthenticatedUserDetails.as_view(), name='user-details'),
	path('', include(router.urls)),
]