#-*- encoding:utf-8 -*-
from django.shortcuts import render,render_to_response,RequestContext
from books.models import User
from universal import Udata

def login(request):
    if request.method == 'POST':
        data = request.POST
        dd = Udata(data)
        if dd.uname == '':
            data = '用户名不能为空'
        else:
            p=User.objects.filter(uname=dd.uname)#获取用户实例
            if p.exists(): #check object is exists
                if dd.passwd == p[0].passwd:#check password，不迭代，主键直接取第一条
                    data = "ok"
                else:
                    data = "passwd of usrname is not"
            else:#not exists
                data = '未注册'
    return render_to_response("books/login.html",locals(),context_instance=RequestContext(request))

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
    if request.method == 'POST':
        data = request.POST
        lg_data=Udata(data)#login data instantiation
        user_check=User.objects.filter(uname=lg_data.uname)
    return render_to_response("books/edit.html",locals(),context_instance=RequestContext(request))
