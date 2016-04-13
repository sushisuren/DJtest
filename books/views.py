#-*- encoding:utf-8 -*-

from django.shortcuts import render,render_to_response,RequestContext
from django.http import HttpResponse
from models import User
# Create your views here.

def reg2(request):
    p=User(name='lishasha',uid=33)
    p.save()
    return render_to_response('reg.html')


def reg5(req):
    if req.method == 'POST':
        data = req.POST
        print data
    return render_to_response('books/reg.html', locals(), context_instance=RequestContext(req))

def reg(request):
    # if request.method == 'GET':
    #     return render_to_response('books/reg.html')
    if request.method == 'POST':
        data = request.POST
        print data.getlist('email')
        #print data.get('email'),data.get('last_name')#['lastName']
    return render_to_response("books/reg.html",locals(),context_instance=RequestContext(request))
        #return HttpResponse("haha")

