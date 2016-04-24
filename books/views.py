#-*- encoding:utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render,render_to_response,RequestContext,HttpResponseRedirect
from django.http import HttpResponse
from books.models import User
from universal import Udata
from django import forms

def login(request):
    if request.method == 'POST':
        data = request.POST
        dd = Udata(data)
        if dd.uname == '':
            data = '用户名不能为空'
        else:
            lo_user=User.objects.filter(uname=dd.uname)#获取用户实例
            if lo_user.exists(): #check object is exists
                lo_user=User.objects.get(uname=dd.uname)
                if dd.passwd == lo_user.passwd:#check password，不迭代，直接取第一条
                    request.session['uname'] = dd.uname#session
                    request.session['login'] = 1
                    islogin = request.session['login']
                    data = islogin
                    return HttpResponseRedirect('/edit/')
                    return render_to_response("books/editform.html",locals())#,RequestContext(request))
                    #data = request.session['uname']# "登录成功"
                else:
                    data = "passwd of usrname is not"
            else:#not exists
                data = '未注册'
    return render_to_response("books/login.html",locals())#,context_instance=RequestContext(request))

def reg(request):
    if request.method == 'POST':
        data = request.POST
        lg_data=Udata(data)#login data instantiation
        user_check=User.objects.filter(uname=lg_data.uname)
        if user_check.exists():
            u_check = "用户名已存在"
        else:
            if lg_data.passwd != lg_data.passwd2:
                u_check = "两次验证码不一致"
            else:
                db=User(uname=lg_data.uname,passwd=lg_data.passwd,sex=lg_data.sex)
                db.save()
                u_check = "注册成功，请登录"
    return render_to_response("books/reg.html",locals(),context_instance=RequestContext(request))


def edit(request):
    if request.method=="POST":
        islogin = request.session['login']
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
    return render_to_response("books/editform.html",locals())#{'form':form,'islogin':islogin})

class NameForm(forms.ModelForm):
    gender=forms.ChoiceField(label='性别',choices=((True, '男'), (False, '女')))
    file=forms.FileField(label='文件上传')
    class Meta:
        model=User
        fields=['name','birth','education','school','position','insterest']


class SearchForm(forms.ModelForm):
    class Meta:
        model=User
        fields=['name','education']

def Search(request):
    if request.method=="POST":
        form=SearchForm(request.POST)
        if form.is_valid():
            c_form=form.cleaned_data
            uname=c_form['name']
            education=c_form['education']
            if uname:
                db_data=User.objects.filter(uname=uname)
            elif education:
                db_data=User.objects.filter(uname=education)
            return HttpResponse(db_data)
            pass#do
    else:
        form=SearchForm()
        return render_to_response("books/searchform.html",locals())



def edit_test(request):
    if request.method == 'POST':
        uname=request.session.get('uname',0)
        if uname:
            data = request.POST
            lg_data=Udata(data)#login data instantiation
            user_check=User.objects.filter(uname=request.session['uname'])
            if user_check.exists():
                lo_user=User.objects.get(uname=uname)
                lo_user.name=lg_data.name
                lo_user.email=lg_data.email
                lo_user.sex=lg_data.sex
                lo_user.save()
                return HttpResponse("Already edit")
            else:
                return HttpResponse("not found user")
        else:
            return HttpResponseRedirect("/")

    else:
        uname=request.session.get('uname',0)
        if uname:
            islogin = True
            user_check=User.objects.filter(uname=request.session['uname'])
            lo_user=User.objects.get(uname=uname)
            return  render_to_response("books/edit.html",locals(),context_instance=RequestContext(request))
        else:
            return HttpResponseRedirect("/") #not login Redirect
    #return render_to_response("books/edit.html",locals(),context_instance=RequestContext(request))


def logout(request):
    try:
        del request.session['uname'],request.session['login']
    except KeyError:
        return HttpResponse("not log out.")
    return HttpResponse("You're logged out.")
