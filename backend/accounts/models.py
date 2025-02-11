from django.db import models
from django.contrib.auth.models import UnicodeUsernameValidator
from django.core.validators import MinLengthValidator
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.password_validation import validate_password

from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import Group, Permission

from events.models import Event
from services.models import Review

import datetime
# Create your models here.
class User(AbstractUser):
    first_name = models.CharField(_("first name"), max_length=150)
    last_name = models.CharField(_("last name"), max_length=150)
    username = models.CharField(
        _("username"),
        max_length=150,
        unique=True,
        help_text=_(
            "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."
        ),
        validators=[UnicodeUsernameValidator(), MinLengthValidator(6)],
        error_messages={"unique": _("A user with that username already exists."),},
    )    
    email = models.EmailField(_("email address"), unique=True)
    birthday = models.DateField(_("birthday"), default=datetime.date.today)
    password = models.CharField(
        _("password"),
        max_length=128,
        validators=[validate_password],
    )
    events = models.ManyToManyField(Event, related_name='participants', blank=True)

    def __str__(self):
        if(self.first_name == "" and self.last_name == ""):
            return ""
        else:
            return "{}, {}".format(self.last_name,self.first_name)

    groups = models.ManyToManyField(
        Group,
        verbose_name=_('groups'),
        blank=True,
        related_name='user_groups',
        related_query_name='user',
    )

    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_('user permissions'),
        blank=True,
        related_name='user_permissions',
        related_query_name='user',
    )

