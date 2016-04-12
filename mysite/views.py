#-*-e ncoding:utf-8 -*-
from django.http import HttpResponse,Http404

def home(request):
    print dir('dd')
    print type('dd')
    return HttpResponse("Welcome to My HomePage!")

def hello(request):
    return HttpResponse("<h1>Hello World!</h1>")


import datetime
def hours_ahead(request,offset):
    try:
        offset = int(offset)
    except ValueError:
        raise Http404
    dt=datetime.datetime.now() + datetime.timedelta(days=offset)
    html = "<html><body> %s 天后,it will be %s</body></html>" %(offset,dt)
    return HttpResponse(html)


from django.template  import  Template,Context
def temp(request):
    now=datetime.datetime.now()
    t=Template("<html><body><h4>It is now {{ current_date }}</h4>.</body></html>")
    html = t.render(Context({'current_date':now}))
    return HttpResponse(html)

from django.template.loader import get_template

def temp2(request):
    now = datetime.datetime.now()
    t=get_template("cur_date.html")
    html = t.render(Context({'cur_date':now}))
    return HttpResponse(html)

from django.shortcuts import render_to_response
def temp3(request):
    now = datetime.datetime.now()
    return render_to_response('cur_date.html',{'cur_date':now})