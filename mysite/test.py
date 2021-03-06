#-*- encoding:utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render_to_response,RequestContext
from django.http import HttpResponse
from django.contrib import auth
from os import linesep
from django import forms
from django.core.mail import send_mail
from books.models import User


# class User(models.Model):
#     uname = models.CharField(max_length=30)#username
#     passwd = models.CharField(verbose_name='密码',max_length=20)
#     name = models.CharField(blank=True,verbose_name='姓名',max_length=30)# true name
#     email = models.EmailField(blank=True)
#     sex = models.BooleanField()
#     birth=models.DateField()
#     education=models.CharField(max_length=20)
#     school=models.CharField(max_length=100)
#     position=models.CharField(max_length=100)
#     insterest=models.CharField(max_length=100)

class NameForm(forms.ModelForm):
    gender=forms.ChoiceField(label='性别',choices=((True, '男'), (False, '女')))
    file=forms.FileField(label='文件上传')
    class Meta:
        model=User
        fields=['name','birth','education','school','position','insterest']



class NameForm_test(forms.Form):
    your_name=forms.CharField(label="姓名",max_length=100)
    age=forms.FloatField(label="年龄")
    email=forms.EmailField()
    file=forms.FileField(label="文件上传")
    gender=forms.ChoiceField(label='性别',choices=((True, '男'), (False, '女')))



def test(request):
    if request.method=="POST":
        form = NameForm(request.POST,request.FILES)
        print request.FILES
        if form.is_valid():
            M=form.cleaned_data
            print (request.FILES['file'])
            print M
            #print M['age']
            return HttpResponse(str(request.FILES['file']))
            #return render_to_response("test/form.html",{'form':form},RequestContext(request))
    else:
        form=NameForm()
    return render_to_response("test/form.html",{'form':form})

def test4(request):
    if request.method =="GET":
        return render_to_response('test/login.html', locals(),context_instance=RequestContext(request))
    if request.method=="POST":
        fn=r"e:\webpy\djtest\tt.txt" #file name
        of=open(fn,'a')#open file
        of.write(str(request.META.get('header'))+linesep+'*'*20)
        print "write ok"
        #request.session['name']='anjinhai'#set session
        response=render_to_response("test/login.html",locals(),context_instance=RequestContext(request))
        response.set_cookie("fav","red")#set cookie response
        response['djano']='1.7.1'
        return response
        return HttpResponse(response)

def test3(request):
    if request.method =="GET":
        return render_to_response('test/login.html', locals(),context_instance=RequestContext(request))
    data=request.POST
    username=data.get("uname")
    password=data.get("passwd")
    user=auth.authenticate(username=username,password=password)
    if user is not None and user.is_active:
        auth.login(request,user)
        print "Correct"
        #msg="login pass"
        msg=request.user.is_authenticated()
        return render_to_response("test/msg.html",locals())
    else:
        print "Invalid passwd."
        msg="login fail"
        return render_to_response("test/msg.html",locals())



def test2(request):
    name='中华人民共和国'
    request.session['name']='anjinhai'#set session
    response = render_to_response('test/test.html', locals())
    response.set_cookie("fav","red")#set cookie response
    print request.COOKIES
    return response
    return HttpResponse(list(request.META))
    if request.session['login']==1:
        islogin = request.session['login']
    else:
        request.session['login']=0
        islogin = request.session['login']
    return render_to_response('test/test.html',{'name':name,'islogin':islogin})



class MailForm(forms.Form):
    subject = forms.CharField(max_length=100)
    message = forms.CharField(widget=forms.Textarea)
    sender = forms.EmailField()
    cc_myself = forms.BooleanField(required=False)

def Mail(request):
    if request.method=="POST":
        form=MailForm(request.POST)
        if form.is_valid():
            subject=form.cleaned_data['subject']
            message=form.cleaned_data['message']
            sender=form.cleaned_data['sender']
            cc_myself=form.cleaned_data['cc_myself']

            recipients=['anjnhai33@qq.com']
            send_mail(subject,message,sender,recipients,
                      auth_user="sushisuren@163.com",
                      auth_password='anjinhai1',
                      fail_silently=False,
                      connection=None,)
            return HttpResponse("already send")
    else:
        form=MailForm()
    return render_to_response("test/form.html",{"form":form})