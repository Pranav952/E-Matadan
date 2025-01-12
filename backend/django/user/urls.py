from django.urls import path
from .views import FeedbackView

urlpatterns = [
    path('api/feedback/', FeedbackView.as_view(), name='feedback'),
]

