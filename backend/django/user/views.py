from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import api_view
from .models import VoterRegistration
from .serializer import FeedbackSerializer,VoterRegistrationSerializer,CandidateRegistrationSerializer


class FeedbackView(APIView):
      def post(self, request):
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Feedback submitted successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
      
class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": f"Hello, {request.user}!"})  # Access user from the token


class RegisterCandidateView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        serializer = CandidateRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Candidate registration successful!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RegisterVoterView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        serializer = VoterRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Registration successful!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class RegisterCandidateView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        serializer = CandidateRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Candidate registration successful!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def voter_list(request):
    if request.method == 'GET':
        voters = VoterRegistration.objects.all()
        serializer = VoterRegistrationSerializer(voters, many=True)
        return Response(serializer.data)
      
      
@api_view(['GET'])
def voter_detail(request, id):
    try:
        voter = VoterRegistration.objects.get(id=id)
        serializer = VoterRegistrationSerializer(voter)
        return Response(serializer.data)
    except VoterRegistration.DoesNotExist:
        return Response({'error': 'Voter not found'}, status=404)
    
    
