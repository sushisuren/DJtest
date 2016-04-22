#-*- encoding:utf-8 -*-
from __future__ import unicode_literals
from django.db import models


# Create your models here.


class User(models.Model):
    uname = models.CharField(max_length=30)#username
    passwd = models.CharField(verbose_name='密码',max_length=20)
    name = models.CharField(blank=True,verbose_name='姓名',max_length=30)# true name
    email = models.EmailField(blank=True)
    sex = models.BooleanField(blank=True,verbose_name='性别')
    gender = models.CharField(blank=True,verbose_name='性别', choices=(('M', '男'), ('F', '女')),
        max_length=1)#, radio_admin=True)
    birth=models.DateField(blank=True,verbose_name='生日')
    education=models.CharField(blank=True,verbose_name='学历',max_length=20)
    school=models.CharField(blank=True,verbose_name='学校',max_length=100)
    position=models.CharField(blank=True,verbose_name='职位',max_length=100)
    insterest=models.CharField(blank=True,verbose_name='兴趣',max_length=100)

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