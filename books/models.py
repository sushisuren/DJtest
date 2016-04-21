#-*- encoding:utf-8 -*-
from django.db import models


# Create your models here.


class User(models.Model):
    #id = models.AutoField(primary_key=True)
    uname = models.CharField(max_length=30)#username
    name = models.CharField(blank=True,max_length=30)# true name
    passwd = models.CharField(max_length=20)
    email = models.EmailField(blank=True)
    sex = models.BooleanField()

    # class Meta:
    #     db_table = 'books_user'
    #     unique_together = ('id','uname')

    def __str__(self):
        return self.uname


class Book(models.Model):
    bname=models.CharField(max_length=30)#book name
    publisher=models.CharField(max_length=30)
    price=models.FloatField()
    reader=models.ForeignKey(User,verbose_name='purchaser')

    def __str__(self):
        return self.bname


class Record(models.Model):
    bname=models.ManyToManyField(Book)
    uname=models.ManyToManyField(User)
    borrow_date=models.DateField()
    return_date=models.DateField()

    def __str__(self):
        return str(self.borrow_date)