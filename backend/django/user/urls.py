from django.urls import path
from .views import FeedbackView
from .views import ProtectedView
from .views import FeedbackView, RegisterVoterView,voter_list,voter_detail,RegisterCandidateView

urlpatterns = [
    path('feedback/', FeedbackView.as_view(), name='feedback'),
    path("protected/", ProtectedView.as_view(), name="protected"),
    path('voting/register/', RegisterVoterView.as_view(), name='register_voter'),
    path('voting/voters/', voter_list, name='voter_list'),
    path('voting/voters/<int:id>/', voter_detail, name='voter-detail'),
    path('register/candidate/', RegisterCandidateView.as_view(), name='register_candidate'),
]

