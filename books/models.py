from django.db import models

# Create your models here.


class User(models.Model):
    #id = models.AutoField(primary_key=True)
    uname = models.CharField(primary_key=True,max_length=30)#username
    name = models.CharField(blank=True,max_length=30)# true name
    passwd = models.CharField(max_length=20)
    email = models.EmailField(blank=True)
    sex = models.BooleanField()

    # class Meta:
    #     db_table = 'books_user'
    #     unique_together = ('id','uname')

    def __str__(self):
        return self.uname