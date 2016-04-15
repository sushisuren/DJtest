#-*- encoding:utf-8 -*-
from django.shortcuts import render_to_response
from django.http import HttpResponse
def test(request):
    name='中华人民共和国'
    if request.session['login']==1:
        islogin = request.session['login']
    else:
        request.session['login']=0
        islogin = request.session['login']
    return render_to_response('test.html',{'name':name,'islogin':islogin})
