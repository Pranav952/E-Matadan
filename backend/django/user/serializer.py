from rest_framework import serializers
from .models import Feedback,Candidate
from .models import VoterRegistration

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'

class VoterRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = VoterRegistration
        fields = '__all__'
        
class CandidateRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = '__all__'