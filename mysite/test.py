#-*- encoding:utf-8 -*-
from django.shortcuts import render_to_response
from django.http import HttpResponse
def test(request):
    name='ane'
    return HttpResponse("hello %s" % name)
    return render_to_response('foot.html')
