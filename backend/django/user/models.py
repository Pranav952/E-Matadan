
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

