
from django.db import models

class Feedback(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    feedback = models.TextField()
    rating = models.IntegerField(default=3)
    feedback_type = models.CharField(max_length=50, default='general')
    agree = models.BooleanField(default=False)
    feedback_date = models.DateField(auto_now_add=True)
    age = models.CharField(max_length=50)
    gender = models.CharField(max_length=10)
    state = models.CharField(max_length=50)
    district = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
class VoterRegistration(models.Model):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    address = models.TextField()
    citizenship_number = models.CharField(max_length=100, unique=True)
    citizenship_photo_front = models.ImageField(upload_to='citizenship_photos/front/')
    citizenship_photo_back = models.ImageField(upload_to='citizenship_photos/back/')
    photo = models.ImageField(upload_to='voter_photos/')

    def __str__(self):
        return f"{self.name} {self.surname}"
    
class Candidate(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    name = models.CharField(max_length=255)
    address = models.TextField()
    age = models.PositiveIntegerField()
    citizenship_photo_front = models.ImageField(upload_to='candidate/citizenship_photos/front/')
    citizenship_photo_back = models.ImageField(upload_to='candidate/citizenship_photos/back/')
    party_name = models.CharField(max_length=255)
    education = models.TextField()
    experience = models.TextField()
    photo = models.ImageField(upload_to='candidate_photos/')
    is_authenticated = models.IntegerField(default=0) 

    def __str__(self):
        return f"{self.name} ({self.party_name})"
    