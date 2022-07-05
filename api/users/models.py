from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.validators import UnicodeUsernameValidator


class Permission(models.Model):
	name = models.CharField(max_length=200)


class Role(models.Model):
	name = models.CharField(max_length=200)
	permissions = models.ManyToManyField(Permission)


class User(AbstractUser):
	username_validator = UnicodeUsernameValidator()

	first_name = models.CharField(max_length=200)
	last_name = models.CharField(max_length=200)
	email = models.CharField(max_length=200, unique=True)
	password = models.CharField(max_length=200)
	role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True)
	username = models.CharField(max_length=150, unique=True, validators=[username_validator])

	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = []