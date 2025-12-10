from django.urls import path
from .views import home_page_data

urlpatterns = [
    path('products/', home_page_data),
]