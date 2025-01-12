from django.urls import path
from .views import FeedbackView
from .views import ProtectedView

urlpatterns = [
    path('api/feedback/', FeedbackView.as_view(), name='feedback'),
      path("protected/", ProtectedView.as_view(), name="protected"),
]

