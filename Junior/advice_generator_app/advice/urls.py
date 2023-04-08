from django.urls import path

from . import views

urlpatterns = [
    path("", views.generate_random_advice, name="random-advice"),
]
